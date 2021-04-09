import React from "react";
import { Action } from "../reducers/quizReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Answer = {
  id: number;
  label: string;
  questionID?: number;
  is_correct: boolean;
};

const CreateAnswer = ({
  dispatch,
  answer,
  questionID,
  multipleChoice,
}: {
  dispatch: React.Dispatch<Action>;
  answer: Answer;
  questionID: number;
  multipleChoice: boolean;
}): JSX.Element => {
  const updateLabel = (value: string) => {
    dispatch({
      type: "UPDATE_ANSWER_LABEL",
      id: answer.id,
      label: value,
      questionID: questionID,
    });
  };

  const toggleAnswerType = () => {
    dispatch({
      type: "TOGGLE_ANSWER_TYPE",
      id: answer.id,
      questionID: questionID,
      value: answer.is_correct,
    });
  };

  const removeAnswer = () => {
    dispatch({ type: "REMOVE_ANSWER", questionID: questionID, id: answer.id });
  };

  return (
    <div className="w-full flex mb-2">
      <input
        className="ml-4 mr-1"
        type={multipleChoice ? "checkbox" : "radio"}
        checked={answer.is_correct}
        onChange={toggleAnswerType}
        name={questionID.toString()}
      />
      <input
        className="w-full border-b border-white bg-white bg-opacity-50 pl-3 py-1 rounded focus:bg-opacity-90"
        name="label"
        type="text"
        value={answer.label}
        onChange={(e) => updateLabel(e.target.value)}
      />
      <button className="w-7 h-7 ml-2 self-center rounded bg-green-100 text-green-600 shadow transform transition duration-900 hover:translate-x-1" type="button" onClick={removeAnswer}>
        <FontAwesomeIcon icon="times" className="" />
      </button>
    </div>
  );
};

export default CreateAnswer;
