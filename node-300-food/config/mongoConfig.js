import mongoose from "mongoose";
const USERNAME = "yeonji";
const PASSWORD = "!Biz12341234";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zfv1mnt.mongodb.net/?retryWrites=true&w=majority`;
/*
mongoose 도구를 사용하여
NoSQL 인mongoDB 에 DMBS Schema 방식으로 접근하기

*/

const Schema = mongoose.Schema;

const food = Schema({
  b_date: String,
  b_name: String,
  b_amount: Number,
  b_cal: Number,
  b_scal: Number,
});

const Diet_model = mongoose.model("food", food);

export { mongoURL, Diet_model };
