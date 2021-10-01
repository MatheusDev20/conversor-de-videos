import { Router } from 'express';
import multer from 'multer';
import videosPath from '../../config/multer';
import VideoConverter from '../controllers/videoConverter';
import storage from '../../config/multer';

const uploadVideoRoute = Router();
const videoConverter = new VideoConverter();
const upload = multer({
  storage: storage
}
).single('video')

uploadVideoRoute.post('/video-upload', upload, videoConverter.execute)


export default uploadVideoRoute;

