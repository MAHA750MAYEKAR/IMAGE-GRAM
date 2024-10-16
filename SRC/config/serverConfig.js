import dotenv from 'dotenv'

dotenv.config()
export const DB_URL=process.env.DB_URL

export const AWS_ACCESS_KEY=process.env.AWS_ACCESS_KEY
export const AWS_SECRETE_KEY=process.env.AWS_SECRETE_KEY

export const AWS_REGION=process.env.AWS_REGION
const  AWS_BUCKET_NAME=process.env.AWS_BUCKET_NAME
export default AWS_BUCKET_NAME