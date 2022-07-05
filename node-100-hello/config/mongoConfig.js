const USERNAME = "yeonji";
const PASSWORD = "!Biz12341234";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zfv1mnt.mongodb.net/?retryWrites=true&w=majority`;

/*
mongoose 도구를 사용하여
NoSQL 인mongoDB 에 DMBS Schema 방식으로 접근하기

*/

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_flag: Number,
  b_sdate: String,
  b_bucket: String,
  b_edate: String,
  b_cancel: Boolean,
});

const bucket_model = mongoose.model("bucket", bucket);

export { mongoURL, bucket_model };
