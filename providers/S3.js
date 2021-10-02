import aws, { S3 } from 'aws-sdk';

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
          reject(err)
        }
        resolve(data)
      })
    })
    
    return getBuckets
  }
}
export default S3Provider