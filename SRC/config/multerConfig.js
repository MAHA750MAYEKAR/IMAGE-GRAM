
import s3 from './awsConfig.js'
import AWS_BUCKET_NAME from './serverConfig.js'
import multer from 'multer';
import multerS3 from 'multer-s3'

export const uploaders3=multer({
    storage:multerS3({
        s3:s3,
        bucket:AWS_BUCKET_NAME,
        key:function(req, file, cb){
            console.log(file);
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // to make sure the key is unique
            cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
        }
        
    })
})