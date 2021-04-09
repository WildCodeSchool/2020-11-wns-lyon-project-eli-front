import { QuizState } from "../components/QuizEditor";
import { initialState } from '../components/QuizEditor';

export type Action =
  | {
      type: "UPDATE_TITLE";
      newTitle: string;
    }
  | {
      type: "UPDATE_SUBTITLE";
      newSubtitle: string;
    }
  | {
      type: "ADD_QUESTION";
    }
  | {
      type: "ADD_ANSWER";
      questionId: number;
      questionLen: number;
    }
  | {
      type: "UPDATE_QUESTION";
      id: number;
      label: string;
    }
  | {
      type: "TOGGLE_QUESTION_TYPE";
      id: number;
      value: boolean;
    }
  | {
      type: "TOGGLE_ANSWER_TYPE";
      id: number;
      questionID: number;
      value: boolean;
    }
  | {
      type: "UPDATE_ANSWER_LABEL";
      id: number;
      label: string;
      questionID: number;
    }
  | {
      type: "REMOVE_QUESTION";
      id: number;
    }
  | {
  type: "REMOVE_ANSWER";
  id: number;
  questionID: number;
}
  | {
  type: "INITIAL_STATE";
};

const quizReducer = (state: QuizState, action: Action): QuizState => {
  let nextState;
  let questions = state.questions.slice();

  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.newTitle } || state;

    case "UPDATE_SUBTITLE":
      return { ...state, subtitle: action.newSubtitle } || state;

    case "ADD_QUESTION":
      let lastQuestionID = state.questions[state.questions.length - 1].id;
      nextState = {
        ...state,
        questions: [
          ...state.questions,
          {
            id: ++lastQuestionID,
            label: "New Question",
            answers: [
              {
                id: 1,
                label: "New Answer...",
                questionID: ++lastQuestionID,
                is_correct: false,
              },
            ],
            multiple_choice: false,
          },
        ],
      };
      return nextState || state;

    case "UPDATE_QUESTION":
      const quest = questions.find((q) => q.id === action.id);
      if (quest) {
        quest.label = action.label;
        nextState = { ...state, questions };
      }
      return nextState || state;

    case "TOGGLE_QUESTION_TYPE":
      const questionTo = questions.find((q) => q.id === action.id);
      if (questionTo && questionTo.multiple_choice === action.value) {
        questionTo.multiple_choice = !questionTo.multiple_choice;
        nextState = { ...state, questions };
      }
      return nextState || state;

    case "REMOVE_QUESTION":
      if (state.questions.length === 1) {
        return {
          ...state,
          questions: [
            {
              id: 1,
              label: "New Question",
              answers: [
                {
                  id: 1,
                  label: "New Answer ...",
                  questionID: 1,
                  is_correct: false,
                },
              ],
              multiple_choice: true,
            },
          ],
        };
      }
      questions = questions.filter((q) => q.id !== action.id);
      return { ...state, questions } || state;

    case "ADD_ANSWER":
      let q = questions.find((q) => q.id === action.questionId);
      if (q && q.answers.length === action.questionLen) {
        // if empty answers
        if (q.answers.length === 0) {
          q.answers = [
            {
              id: 1,
              label: "New Answer ...",
              questionID: action.questionId,
              is_correct: false,
            },
          ];
        } else {
          let lastAnswerID = q.answers[q.answers.length - 1].id;
          q.answers = [
            ...q.answers,
            {
              id: ++lastAnswerID,
              label: "New Answer ...",
              questionID: action.questionId,
              is_correct: false,
            },
          ];
        }
        nextState = { ...state, questions: questions };
      }
      return nextState || state;

    case "UPDATE_ANSWER_LABEL":
      const question = questions.find((q) => q.id === action.questionID);
      if (question) {
        const answer = question.answers.find((a) => a.id === action.id);
        if (answer) answer.label = action.label;
        nextState = { ...state, questions };
      }
      return nextState || state;

    case "TOGGLE_ANSWER_TYPE":
      const qAnswer = questions.find((q) => q.id === action.questionID);
      if (qAnswer) {
        const a = qAnswer.answers.find((a) => a.id === action.id);
        if (a && a.is_correct === action.value) {
          // case radio
          if (!qAnswer.multiple_choice) {
            qAnswer.answers.map((aw) => (aw.is_correct = false));
          }

          a.is_correct = !a.is_correct;
          nextState = { ...state, questions };
        }
      }
      return nextState || state;

    case "REMOVE_ANSWER":
      let questAnswers = questions.find((q) => q.id === action.questionID);

      if (questAnswers)
        questAnswers.answers = questAnswers.answers.filter(
          (a) => a.id !== action.id
        );
      nextState = { ...state, questions };
      return nextState || state;

    case "INITIAL_STATE":
      nextState = initialState
      return nextState;

    default:
      return state;
  }
};

export default quizReducer;
