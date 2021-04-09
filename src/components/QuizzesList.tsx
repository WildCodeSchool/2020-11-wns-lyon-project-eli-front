import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { QuizType } from "../mutation/inputType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function QuizzesList(): JSX.Element {
  const [quizzes, setQuizzes] = useState([]);
  const [allQuizzes, setAllQuizzes] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    setQuizzes(allQuizzes.filter((quiz:QuizType) => {
      if (!quiz.subtitle) quiz.subtitle = ''
      return quiz.title.toLowerCase().includes(search.toLowerCase()) || quiz.subtitle.toLowerCase().includes(search.toLowerCase());
    }))
  }, [search])

  const getQuizzesGQL = gql`
    query getQuizzes {
      getQuizzes(order: "DESC") {
        title
        subtitle
        questions {
          label
          answers {
            label
          }
        }
        createdAt
      }
    }
  `;

  const { error, loading, data } = useQuery(getQuizzesGQL, {
    onCompleted: () => {
      setAllQuizzes(data.getQuizzes)
      setQuizzes(data.getQuizzes);
    },
  });

  const COLORS = ["bg-gray-700", "bg-red-700", "bg-green-700", "bg-yellow-700", "bg-purple-700", "bg-pink-700"]
  const randomElement = COLORS[Math.floor(Math.random() * COLORS.length)];

  if (error) return <pre>{error}</pre>;
  if (loading) return <pre>{loading}</pre>;

  return (
    <main className="flex flex-col items-center justify-center">
      {/*Tools*/}
      <div className="container p-8 mx-auto flex bg-white bg-opacity-20 justify-between shadow">
        {/*Search Bar*/}
        <label className="w-1/4 ml-5 flex items-center">
          <FontAwesomeIcon icon="search" className="absolute ml-2" />
          <input
            className="w-full border-b border-white bg-white bg-opacity-40 pl-8 py-1 rounded focus:bg-opacity-80 shadow"
            name="title"
            placeholder="Search a quiz..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="w-8 h-8 rounded p-1 ml-2 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
            type="button"
          >
            <FontAwesomeIcon icon="filter" />
          </button>
        </label>
        {/*Display mode*/}
        <div className="flex justify-around w-1/6">
          <button
            className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
            type="button"
          >
            <FontAwesomeIcon icon="grip-horizontal" className="" />
          </button>
          <button
            className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
            type="button"
          >
            <FontAwesomeIcon icon="list-ul" className="" />
          </button>
          <button
            className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
            type="button"
          >
            <FontAwesomeIcon icon="sort-alpha-down" className="" />
          </button>
          <button
            className="w-8 h-8 rounded p-1 bg-green-100 text-green-800 shadow transform transition duration-900 hover:scale-125"
            type="button"
          >
            <FontAwesomeIcon icon="sort-numeric-down-alt" className="" />
          </button>
        </div>
      </div>

      {/*Quizzes*/}
      <section className="container flex flex-wrap justify-around items-center p-8 mx-auto">
        {quizzes.map((q: QuizType, key: number) => (
          <article
            className="w-1/5 mx-0.5 my-3 rounded bg-white bg-opacity-50 shadow flex"
            key={key}
          >
            <span className={`${COLORS[Math.floor(Math.random() * COLORS.length)]} w-2 rounded-l`}>&nbsp;</span>
            <div className="flex flex-col flex-grow p-2">
              <p className="mb-0.5">{q.title}</p>
              <p className="text-xs">{q.subtitle}</p>
              <small className="text-xs text-gray-500">
                {q.createdAt && new Date(q.createdAt).toLocaleDateString()}
              </small>
            </div>
            <aside className="flex flex-col justify-between">
              <button className="w-8 h-8 mt-1 text-green-800 " type="button">
                <FontAwesomeIcon
                  icon="ellipsis-v"
                  className="transform transition duration-200 hover:scale-125"
                />
              </button>
              <button className="w-8 h-8 text-green-800" type="button">
                <FontAwesomeIcon
                  icon="play-circle"
                  className="transform transition duration-200 hover:scale-125"
                />
              </button>
            </aside>
          </article>
        ))}
      </section>
    </main>
  );
}
