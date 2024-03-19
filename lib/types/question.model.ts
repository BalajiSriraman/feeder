import * as v from 'valibot';

export const questionSchema = v.object({
  questionId: v.string(),
  question: v.string(),
  options: v.array(v.nullish(v.any()),)
});


export type Question = v.Input<typeof questionSchema>