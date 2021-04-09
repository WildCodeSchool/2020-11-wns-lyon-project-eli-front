import { QuizState } from '../components/QuizEditor';
import { useCreateQuizMutation } from '../mutation/createQuizMutation';
import { useCreateQuestionMutation } from '../mutation/createQuestionMutation';
import { useCreateAnswerMutation } from '../mutation/createAnswerMutation';
import { useState } from 'react';
import { QuestionType, QuizType } from '../mutation/inputType';
import { FetchResult } from '@apollo/client';

export const useGenerateQuiz = () => {
  const { createQuiz, } = useCreateQuizMutation();
  const { createQuestion, } = useCreateQuestionMutation();
  const { createAnswer } = useCreateAnswerMutation();
  const [error, setError] = useState()


  const generate = async (state: QuizState) => {
    const { title, subtitle, questions, tags } = state;
    // create quiz
    try {
      const quiz: FetchResult<QuizType> = await createQuiz({ title, subtitle, questions, tags });
      console.log('generateQuiz', quiz)
      return quiz;
    } catch (e) {
      setError(e)
    }
    return error
  }

  return { generate };
}