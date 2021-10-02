
import VideoConverter from '../../converters/videos';
import BaseResponse from '../Responses/BaseResponse'
import Exception from '../Responses/Exception';
import path from 'path';
import S3Provider from '../../providers/S3';
class VideoConverterController {
  async execute(req, res) {
    const video = req.file;
    const { to } = req.query;

    if (to === path.extname(req.file.originalname).replace('.', '')) {
      let response = new Exception({}, 400, `Extensão destino - ${to} é a mesma do arquivo selecionado`)
      return res.json(response)
    }
    const s3 = new S3Provider()

    const converter = new VideoConverter(video);
    try {
      const response = await converter.convert(to);

      const filename = await s3.saveFile(response.data.filename)

      let sendResponse = new BaseResponse(response.data, response.status, response.message)

      return res.json({ data: sendResponse })
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