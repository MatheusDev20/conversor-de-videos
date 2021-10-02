import multer from 'multer';
import path from 'path';

const videosPath = path.resolve(__dirname, '..' ,'inputs')
console.log(videosPath)
const storage = multer.diskStorage({
  destination: videosPath,
  filename: (req, file, cb) => {
    cb(null, "input-" + Date.now() + path.extname(file.originalname))
  }
})

export default storage