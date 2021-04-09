import React, { FormEvent, useState } from "react";
import QuizContext from "../context/QuizContext";
import { useReducer } from "react";
import quizReducer from "../reducers/quizReducer";
import CreateQuestion from "./CreateQuestion";
import { Answer } from "./CreateAnswer";
import { useGenerateQuiz } from "../utils/generateQuiz";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Question {
  id: number;
  label: string;
  answers: Answer[];
  multiple_choice: boolean;
}

export interface Tag {
  id: number;
  name: string;
}

export type QuizState = {
  title: string;
  subtitle?: string;
  questions: Question[];
  tags: Tag[];
};

export const initialState: QuizState = {
  title: "Title",
  subtitle: "Subtitle",
  questions: [
    {
      id: 1,
      label: "New Question",
      answers: [
        { id: 1, label: "New Answer...", questionID: 1, is_correct: false },
      ],
      multiple_choice: false,
    },
  ],
  tags: [],
};

export function QuizEditor(): JSX.Element {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [error, setError] = useState();
  const { generate } = useGenerateQuiz();

  // toggle displaying
  const [preview, setPreview] = useState(true);
  const [editor, setEditor] = useState(true);
  const displayPreview = () => {
    setEditor(false)
    setPreview(true)
  }
  const displayEditor = () => {
    setEditor(true)
    setPreview(false)
  }
  const displayBoth = () => {
    setEditor(true)
    setPreview(true)
  }

  // quiz
  const updateTitle = (value: string) => {
    dispatch({ type: "UPDATE_TITLE", newTitle: value });
  };

  const updateSubtitle = (value: string) => {
    dispatch({ type: "UPDATE_SUBTITLE", newSubtitle: value });
  };

  const addQuestion = () => {
    dispatch({ type: "ADD_QUESTION" });
  };

  const createQuiz = async (e: FormEvent) => {
    e.preventDefault();
    let quizInput = { ...state };
    quizInput.questions.map((q) => {
      q.answers = Array.from(q.answers, (a) => {
        const { questionID, ...newA } = a;
        return newA;
      });
    });
    try {
      const quiz = await generate(quizInput);
      // popup success
      await Swal.fire("Alright!", "Quiz Created !", "success");
      console.log("success", quiz);
      // New Quiz || Return
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  return (
    <QuizContext.Provider value={dispatch}>
      <main className="flex flex-col items-center justify-center">
        <div className="container w-36  p-2 mx-auto flex bg-white bg-opacity-20 justify-start shadow">
          {/*Display mode*/}
          <div className="flex justify-around w-full">
            <button
              className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125 active:scale-125"
              type="button"
              onClick={displayPreview}
            >
              <FontAwesomeIcon icon="eye" className="" />
            </button>
            <button
              className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
              type="button"
              onClick={displayBoth}
            >
              <FontAwesomeIcon icon="columns" className="" />
            </button>
            <button
              className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
              type="button"
              onClick={displayEditor}
            >
              <FontAwesomeIcon icon="pen" className="" />
            </button>
          </div>
        </div>
        <section className="w-full flex m-auto p-12 justify-around">
          {/*  Preview  */}
          {preview && (
            <div className="container w-1/2 bg-white bg-opacity-30 rounded shadow p-4 mx-5 transform transition duration-900">
              <pre className="mb-2">Preview</pre>

              <header className="w-full bg-white bg-opacity-60 rounded shadow p-4 mb-4 backdrop-filter backdrop-grayscale backdrop-blur backdrop-contrast-200">
                <h2 className="font-semibold text-gray-900">{state.title}</h2>
                <h3 className="text-gray-600">{state.subtitle}</h3>
              </header>

              <ul>
                {state.questions.map((q: Question, key: number) => (
                  <li
                    key={key}
                    className="w-full rounded shadow p-4 mb-8 bg-white bg-opacity-60"
                  >
                    <p className="text-lg font-semibold">
                      {++key + ". " + q.label}
                    </p>
                    <hr />
                    <form className="w-full p-4 mt-2">
                      <ul>
                        {q.answers.map((a: Answer, key: number) => (
                          <div key={key} className="mb-3">
                            <input
                              className="mr-2"
                              type={q.multiple_choice ? "checkbox" : "radio"}
                              checked={a.is_correct}
                              name={q.id.toString()}
                            />
                            <label>{a.label}</label>
                          </div>
                        ))}
                      </ul>
                    </form>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/*  Editor  */}
          {editor && (
            <div className="container w-1/2 rounded shadow p-4 mx-5 bg-gray-700 bg-opacity-40">
              <pre className="mb-2">Quiz Editor</pre>
              {error !== "" && <pre>{error}</pre>}

              <form onSubmit={(e) => createQuiz(e)} noValidate>
                <header className="w-full rounded shadow p-4 mb-4 bg-white bg-opacity-30">
                  <div>
                    <input
                      className="w-full border-b border-white bg-white bg-opacity-50 pl-3 py-1 mb-2 rounded focus:bg-opacity-90"
                      name="title"
                      value={state.title}
                      onChange={(e) => updateTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full border-b border-white bg-white bg-opacity-50 pl-3 py-1 rounded focus:bg-opacity-90"
                      name="subtitle"
                      value={state.subtitle}
                      onChange={(e) => updateSubtitle(e.target.value)}
                    />
                  </div>
                </header>
                {state.questions.map((q: Question, key: number) => (
                  <CreateQuestion
                    dispatch={dispatch}
                    question={q}
                    key={key}
                    index={key}
                  />
                ))}
                <section className="flex w-full justify-center items-center justify-around">
                  <button
                    className="rounded px-4 py-2 mb-2 self-center bg-green-100 text-green-800 transform animation animation-duration-500 hover:scale-95"
                    type="submit"
                  >
                    Generate Quiz
                  </button>
                  <button
                    className="rounded px-4 py-2 mb-2 self-center bg-green-100 text-green-800 transform animation animation-duration-500 hover:scale-95"
                    type="button"
                    onClick={addQuestion}
                  >
                    New Question
                  </button>
                </section>
                {/*<footer className="flex w-full border border-gray-500">
              <button
                className="border border-gray-500 rounded px-2 py-1 mr-5 text-xs"
                type="button"
                onClick={addQuestion}
              >
                Add tag
              </button>
              <section className="flex justify-around">
                <div className="border border-gray-500 rounded text-xs mr-2 px-2 py-1">
                  Math
                </div>
                <div className="border border-gray-500 rounded text-xs mr-2 px-2 py-1">
                  Logique
                </div>
                <div className="border border-gray-500 rounded text-xs mr-2 px-2 py-1">
                  Géométrie
                </div>
              </section>
            </footer>*/}
              </form>
            </div>
          )}
        </section>
      </main>
    </QuizContext.Provider>
  );
}
