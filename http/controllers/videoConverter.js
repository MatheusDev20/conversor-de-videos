
import ffmpeg from 'fluent-ffmpeg'

class VideoConverter {
  async execute(req, res) {
    try {
      console.log(req.query)
      const { to } = req.query
      console.log(to)
      const command = ffmpeg(req.file.path)
      command.withOutputFormat(to)
        .on("end", () => {
          console.log('Finished')
        })
        .on('error', (err) => {
          console.log(err)
        })
        .saveToFile(__dirname + 'output.avi')
      return res.send('ok')
    }
    catch (err) {
      res.json({ err: err })
    }

  }
}

export default VideoConverter