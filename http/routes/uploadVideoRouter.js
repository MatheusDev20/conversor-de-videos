import { Router } from 'express';
import multer from 'multer';
import videosPath from '../../config/multer';
const uploadVideoRoute = Router()
const upload = multer({
  dest: './videos'
  }
  )
uploadVideoRoute.post('/video-upload', upload.single('video') , (req, res) => {
  console.log(req.file)
  console.log(videosPath)
  console.log(__dirname)
  return res.send('Ok')
});


export default uploadVideoRoute;

