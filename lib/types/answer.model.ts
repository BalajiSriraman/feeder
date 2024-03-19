import * as v from 'valibot';

export const answerSchema = v.record(v.object({
  option: v.number(),
  value: v.string()
}));


export type Answer = v.Input<typeof answerSchema>