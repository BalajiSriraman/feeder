import mongoose from 'mongoose'


export const answerSchema = new mongoose.Schema({
  quizUrl: String,
  token: String,
  answer: String,
});

export const AnswerModel = mongoose.model("Answer", answerSchema);

