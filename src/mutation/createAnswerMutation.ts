import gql from "graphql-tag";
import {FetchResult, useMutation} from "@apollo/react-hooks";
import { AnswerType } from './inputType';

export const createAnswerMutationGQL = gql`
    mutation createAnswer($question: Int!, $label: String!, $is_correct: Boolean) {
        createAnswer(values: {
            question: $question, 
            label: $label,
            is_correct: $is_correct
        }) {
            question
            label
        }
    }
`;

export const useCreateAnswerMutation = () => {
  const [mutation, mutationResults] = useMutation(createAnswerMutationGQL, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const createAnswer = async (values: AnswerType): Promise<FetchResult<any>> => {
    const { question, label, is_correct } = values;
    return await mutation({
      variables: {
        question: question,
        label: label,
        is_correct: is_correct,
      },
    });
  };

  return { createAnswer, mutationResults };
};
