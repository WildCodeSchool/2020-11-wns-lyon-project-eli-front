import gql from "graphql-tag";
import { FetchResult, useMutation } from "@apollo/react-hooks";
import { QuizType } from "./inputType";

export const createQuizMutationGQL = gql`
  mutation createQuiz($title: String!, $subtitle: String, $questions: [QuestionInput], $tags: [TagInput]) {
    createQuiz(values: { title: $title, subtitle: $subtitle, questions: $questions, tags: $tags }) {
        title
        subtitle
        questions {
            label
        }
        tags {
            name
        }
    }
  }
`;

export const useCreateQuizMutation = () => {
  const [mutation, mutationResults] = useMutation<QuizType, Record<string, any>>(createQuizMutationGQL, {
    onCompleted: (data) => {
      console.log('data in mutation', data);
    },
  });
  const createQuiz = async ({ title, subtitle, questions, tags }: QuizType): Promise<FetchResult<QuizType>> => {
    return await mutation({
      variables: {
        title: title,
        subtitle: subtitle,
        questions: questions,
        tags: tags
      },
    });
  };

  return { createQuiz, mutationResults };
};
