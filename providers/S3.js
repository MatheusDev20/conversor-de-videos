import aws, { FSx, S3 } from 'aws-sdk';
import fs, { readFile } from 'fs';
import path from 'path';
class S3Provider {
  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1'
    })
  }
  async listBuckets() {
    const getBuckets = new Promise((resolve, reject) => {
      this.client.listBuckets((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      })
    })

    return getBuckets;
  }

  async saveFile(file) {
    let extname = path.extname(file).replace('.', '')
    const originalPath = path.resolve(__dirname, '..', 'outputs', extname, file);
    const fileContent = await fs.promises.readFile(originalPath);
    await this.client
      .putObject({
        Bucket: 'converter-app-node',
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
      })
      .promise()

    return file
  }
  async deleteFile(file) {
    await this.client
      .deleteObject({
        Bucket: 'converter-app-node',
        Key: file,
      })
      .promise();
  }
}
export default S3Provider