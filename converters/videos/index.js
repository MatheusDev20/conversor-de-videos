
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

class VideoConverter {
  constructor(video_data) {
    this.path = video_data.path
    this.originalFileName = video_data.originalname
    this.command = ffmpeg(video_data.path)
  }

  async convert(output) {
    let convertedFileName = `converted-video-${Date.now()}.${output}`
    const promise = new Promise((resolve, reject) => {
      this.command.withOutputFormat(output)
        .on('error', (err) => {
          reject(err)
          return
        })
        .on('end', () => {
          let res = {
            "data": {
              filename: convertedFileName
            },
            "status": 200,
            "message": "Succesfully converted",
          }
          resolve(res)
        })
        .save(path.resolve(__dirname, '..', '..', `outputs/${output}/${convertedFileName}`))
    })
    return promise
  }

}

// try {
//   command.withOutputFormat(to)
//     .on("end", () => {
//       console.log('Finished')
//     })
//     .on('error', (err) => {
//       console.log(err)
//     })
//     .saveToFile(__dirname + 'output.avi')
//   return res.send('ok')
// }
// catch (err) {
//   res.json({ err: err })
// }
export default VideoConverter