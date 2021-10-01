import MP4Converter from "../../Converters/mp4_2_mp3"
import FFmpeg from "../../ffmpeg"

class VideoConverter {
  async execute(req, res) {
      try {
        const mp4_2_mp3 = new MP4Converter(req.file.path)
        let video = await mp4_2_mp3.convert()
        console.log(video)
        return res.send(video)
      }
      catch (err) {
        res.json({ err: err })
      }

    }
}

export default VideoConverter