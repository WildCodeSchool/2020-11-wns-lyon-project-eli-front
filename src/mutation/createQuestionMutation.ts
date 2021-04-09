import gql from "graphql-tag";
import { FetchResult, useMutation } from "@apollo/react-hooks";
import { QuestionType } from "./inputType";

export const createQuestionMutationGQL = gql`
  mutation createQuestion(
    $quiz: Int!
    $label: String!
    $multiple_choice: Boolean
  ) {
    createQuestion(
      values: { quiz: $quiz, label: $label, multiple_choice: $multiple_choice }
    ) {
        quiz
        label
        multiple_choice
    }
  }
`;

export const useCreateQuestionMutation = () => {
  const [mutation, mutationResults] = useMutation(createQuestionMutationGQL, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const createQuestion = async ( { quiz, label, multiple_choice }: QuestionType ): Promise<FetchResult<any>> => {
    return await mutation({
      variables: {
        quiz: quiz,
        label: label,
        multiple_choice: multiple_choice,
      },
    });
  };

  return { createQuestion, mutationResults };
};
