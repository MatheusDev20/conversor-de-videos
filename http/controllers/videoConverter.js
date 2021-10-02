
import ffmpeg from 'fluent-ffmpeg'
import VideoConverter from '../../Converters/videos';
class VideoConverterController {
  async execute(req, res) {
    const video = req.file;
    const { to } = req.query;
    
    const converter = new VideoConverter(video);
    try {
      const response = await converter.convert(to);

      res.json({ data: response })
    }
    catch (err) {
      let response = {
        status: 500,
        message: err.message,
        path: ""
      }
      res.json({
        data: response
      })
    }

  }
}

export default VideoConverterController