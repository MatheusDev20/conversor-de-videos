
import VideoConverter from '../../Converters/videos';
import BaseResponse from '../Responses/BaseResponse'
class VideoConverterController {
  async execute(req, res) {
    const video = req.file;
    const { to } = req.query;
 

    const converter = new VideoConverter(video);
    try {
      const response = await converter.convert(to);
      let sendResponse = new BaseResponse(response.data, response.status, response.message)

      res.json({ data: sendResponse })
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