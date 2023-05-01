
import { diskStorage } from 'multer';
import { extname } from 'path';

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + extname(file.originalname));
  },
});

export default storage;
