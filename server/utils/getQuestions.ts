import { Question, questionSchema } from "~/lib/types";
import * as v from 'valibot';


export async function parseQuestionsAndOptions(data: any) {
  if (!data.attempt_info) {
    console.error("No 'attempt_info' found in the data");
    return;
  }

  const questions: Question = data.attempt_info.map((attempt: any) => {
    const question = attempt.question;
    return {
      questionId: question.title,
      question: question.content,
      options: question.choices.map((choice: any) => choice.content),
    };
  });

  // Print the extracted questions and options 
  const paresedData = v.safeParse(v.array(questionSchema), questions);

  return paresedData;
}

