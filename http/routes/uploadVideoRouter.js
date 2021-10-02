import { Router } from 'express';
import multer from 'multer';
import storage from '../../config/multer';
import VideoConverterController from '../controllers/videoConverter';

const uploadVideoRoute = Router();
const videoConverter = new VideoConverterController();
const upload = multer({
  storage: storage
}
).single('video')

uploadVideoRoute.post('/video-converter', upload, videoConverter.execute)


export default uploadVideoRoute;

