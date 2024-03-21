import mongoose from 'mongoose'
import { AnswerModel } from '~/server/models/mongoose.model';


export default defineEventHandler(async (event) => {
  await mongoose.connect('mongodb+srv://balajisrdev:Love_Your_Mom@feeder.gz4bqkm.mongodb.net/?retryWrites=true&w=majority&appName=feeder', {});



  const answers = await AnswerModel.find({
  });

  return {
    data: answers,
    status: 200

  }
})
