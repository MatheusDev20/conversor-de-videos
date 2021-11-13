const getStorageUrl = (filename) => {
  if (process.env.STORAGE = 'S3') {
    return `https://converter-app-node.s3.sa-east-1.amazonaws.com/${filename}`
  }
  else {
    return `Host Video files here`
  }
}
export { getStorageUrl }