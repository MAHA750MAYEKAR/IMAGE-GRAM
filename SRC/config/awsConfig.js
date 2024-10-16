import AWS from "aws-sdk"
import {AWS_REGION,AWS_ACCESS_KEY,AWS_SECRETE_KEY} from './serverConfig.js'

const s3 =new AWS.S3({
    region:AWS_REGION,
    accessKeyId:AWS_ACCESS_KEY,
    secretAccessKey:AWS_SECRETE_KEY
})

export default s3


