
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

class VideoConverter {
  constructor(video_data) {
    this.path = video_data.path
    this.command = ffmpeg(video_data.path)
  }

  async convert(output) {
    const promise = new Promise((resolve, reject) => {
      this.command.withOutputFormat(output)
        .on('error', (err) => {
          reject(err)
          return
        })
        .on('end', () => {
          console.log('end being called he shouldnt')
          let res = {
            "status": 200,
            "message": "Succesfully converted",
            "path": path.resolve(__dirname, '..', '..', `${output}`)
          }
          resolve(res)
        })
        .save(path.resolve(__dirname, '..', '..', `${output}` + '/output.avi'))
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