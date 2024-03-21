import mongoose from 'mongoose'
import { AnswerModel } from '~/server/models/mongoose.model';

export default defineEventHandler(async (event) => {
  await mongoose.connect('mongodb+srv://balajisrdev:Love_Your_Mom@feeder.gz4bqkm.mongodb.net/?retryWrites=true&w=majority&appName=feeder', {});

  // @ts-expect-error
  const id = event.context.params.id!; // Get id from params

  const result = await AnswerModel.findById(id); // Delete the document with the given id

  if (result) {
    return {
      data: result,
      status: 200
    }
  } else {
    return {
      data: 'No document found with the given id',
      status: 404
    }
  }
});
