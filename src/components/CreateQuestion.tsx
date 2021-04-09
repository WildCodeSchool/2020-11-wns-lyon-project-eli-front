import React, { useEffect, useState } from "react";
import { useCreateQuestionMutation } from "../mutation/createQuestionMutation";
import CreateAnswer, { Answer } from "./CreateAnswer";
import { Question } from "./QuizEditor";
import { Action } from "../reducers/quizReducer";

export type QuizInput = {
  title: string;
  subtitle?: string;
  content?: string;
};

const CreateQuestion = ({
  dispatch,
  question,
  index
}: {
  dispatch: React.Dispatch<Action>;
  question: Question;
  index: number
}): JSX.Element => {
  const { createQuestion } = useCreateQuestionMutation();
  const [error, setError] = useState();

  const updateLabel = (value: string) => {
    dispatch({ type: "UPDATE_QUESTION", id: question.id, label: value });
  };

  const toggleQuestionType = () => {
    dispatch({
      type: "TOGGLE_QUESTION_TYPE",
      id: question.id,
      value: question.multiple_choice,
    });
  };

  const removeQuestion = () => {
    dispatch({ type: "REMOVE_QUESTION", id: question.id });
  };

  const addAnswer = () => {
    dispatch({
      type: "ADD_ANSWER",
      questionId: question.id,
      questionLen: question.answers.length,
    });
  };

  return (
    <div className="w-full rounded shadow p-4 mb-8 flex flex-col items-start bg-white bg-opacity-30">
      <span className="absolute text-xs bg-green-100 text-green-800 rounded px-2 py-1 mb-2">{++index}</span>
      <button className="self-end px-2 py-1 mb-2 rounded text-xs bg-green-100 text-green-800 transform animation animation-duration-500 hover:scale-95" type="button" onClick={removeQuestion}>
        <small>Remove question</small>
      </button>
      <input
        className="w-full border-b border-white bg-white bg-opacity-50 pl-3 py-1 rounded focus:bg-opacity-90"
        name="label"
        value={question.label}
        onChange={(e) => updateLabel(e.target.value)}
      />
      <div className="self-end mb-2">
        <label>
          <small className="text-green-800 text-xs">Multiple answers</small>
          <input
            className="ml-1 text-green-800"
            type="checkbox"
            name="is_multiple"
            onChange={toggleQuestionType}
          />
        </label>
      </div>
      {question.answers.map((answer: Answer, key: number) => (
        <CreateAnswer
          dispatch={dispatch}
          answer={answer}
          key={key}
          questionID={question.id}
          multipleChoice={question.multiple_choice}
        />
      ))}

      <button className="self-center mt-4 px-2 py-1 rounded text-md bg-green-100 text-green-800 transform animation animation-duration-500 hover:scale-95" type="button" onClick={addAnswer}>
        Add Answer
      </button>
    </div>
  );
};

export default CreateQuestion;
