import mongoose from 'mongoose'
import { AnswerModel } from '~/server/models/mongoose.model';

export default defineEventHandler(async (event) => {
  await mongoose.connect('mongodb+srv://balajisrdev:Love_Your_Mom@feeder.gz4bqkm.mongodb.net/?retryWrites=true&w=majority&appName=feeder', {});

  // @ts-expect-error
  const id = event.context.params.id!; // Get id from params

  const result = await AnswerModel.deleteOne({ _id: id }); // Delete the document with the given id

  if (result.deletedCount > 0) {
    return {
      message: 'Successfully deleted',
      status: 200
    }
  } else {
    return {
      message: 'No document found with the given id',
      status: 404
    }
  }
});
