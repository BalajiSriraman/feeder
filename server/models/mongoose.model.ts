import mongoose from 'mongoose'


export const answerSchema = new mongoose.Schema({
  quizUrl: String,
  answer: String,
  token: String,
});

export const AnswerModel = mongoose.model("Answer", answerSchema);

