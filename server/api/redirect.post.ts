import mongoose from 'mongoose'
import { AnswerModel } from '../models/mongoose.model'

type req = {
  tokens: any
  quizUrl: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body) {
    console.error("Invalid request")

    setResponseStatus(event, 500)

    return {
      data: "Invalid request",
      status: 400
    }
  }

  const data: req = JSON.parse(body)


  // const headerKey = (JSON.parse(data.tokens).token.name) as string
  const value = (JSON.parse(data.tokens).token.value) as string
  const quizUrl = data.quizUrl

  await mongoose.connect('mongodb+srv://balajisrdev:Love_Your_Mom@feeder.gz4bqkm.mongodb.net/?retryWrites=true&w=majority&appName=feeder', {});

  // const answers = await AnswerModel.find({});

  console.info('Req Hit')
  try {
    const questions = await $fetch('https://assessment-api.kalvium.community/api/assessments/OS_MCQ_L32/attempts', {
      method: 'POST',
      headers: {
        authorization: value
      }
    }
    ).catch((e) => {
      console.error(e)
    })

    // const questionId = await AnswerModel.create({
    //   answer: JSON.stringify(questions),
    //   token: value,
    //   quizUrl: quizUrl
    // }).then((res) => {
    //   return res.id as string
    // }).catch((e) => {
    //   console.error(e)
    // }
    // )

    // console.info('Question ID: ', questionId)

    return {
      data: 'questionId',
      status: 200
    }


  } catch (e) {
    console.error(e)
    return {
      data: "Error generating content",
      status: 500
    }
  }


})
