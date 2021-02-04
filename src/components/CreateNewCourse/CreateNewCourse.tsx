import React, { useEffect, useState } from 'react';

import { UploadCourse } from './../UploadCourse/UploadCourse';

interface Classe {
  id: number;
  name: string;
  img: string;
}

interface Matiere {
  id: number;
  name: string;
  img: string;
}

const classeMock: Classe[] = [
  { id: 0, name: 'Classe 1', img: '' },
  { id: 2, name: 'Classe 2', img: '' },
  { id: 3, name: 'Classe 3', img: '' },
  { id: 4, name: 'Classe 4', img: '' },
];

const subjectMock: Matiere[] = [
  { id: 0, name: 'Matiere 1', img: '' },
  { id: 2, name: 'Matiere 2', img: '' },
  { id: 3, name: 'Matiere 3', img: '' },
  { id: 4, name: 'Matiere 4', img: '' },
];

export const CreateNewCourse = (): JSX.Element => {
  /* Partie "Selection" */
  const [classSelect, setClassSelect] = useState<number>();
  const [subjectSelect, setSubjectSelect] = useState<number>();
  /* Partie "Création du cours" */
  const [courseTitle, setCourseTitle] = useState<string>();
  const [courseSubTitle, setCourseSubTitle] = useState<string>();
  const [courseSubDuration, setCourseSubDuration] = useState<number>();
  const [courseContent, setCourseContent] = useState<string>();

  return (
    <form className="grid gap-0 grid-cols-3">
      <section className="col-span-1 p-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Selectionner vos classes</h2>
          {classeMock.map((classe, index) => {
            return (
              <div key={index}>
                <button className="h-16 w-full bg-gray-200 text-gray-800 font-medium rounded-md p-3 cursor-pointer mb-5">
                  {classe.name}
                </button>
              </div>
            );
          })}
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Selectionner vos matières</h2>
          {subjectMock.map((subject, index) => {
            return (
              <div key={index}>
                <button className="h-16 w-full bg-gray-200 text-gray-800 font-medium rounded-md p-3 cursor-pointer mb-5">
                  {subject.name}
                </button>
              </div>
            );
          })}
        </section>
      </section>
      <section className="col-span-2 p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Création du cours</h2>
        <div>
          <label htmlFor="courseTitle" className="text-xl font-bold text-gray-800 mb-3 block">
            Titre
          </label>
          <input
            name="courseTitle"
            id="courseTitle"
            type="text"
            className="focus:outline-none h-14 bg-white shadow-lg w-full border border-solid border-black rounded-md mb-5 px-4"
          />
        </div>
        <div>
          <label htmlFor="courseSubtitle" className="text-xl font-bold text-gray-800 mb-3 block">
            Sous-Titre
          </label>
          <input
            name="courseSubtitle"
            id="courseSubtitle"
            type="text"
            className="focus:outline-none h-14 bg-white shadow-lg w-full border border-solid border-black rounded-md mb-5 px-4"
          />
        </div>
        <div>
          <label htmlFor="courseTime" className="text-xl font-bold text-gray-800 mb-3 block">
            Durée estimée
          </label>
          <input
            name="courseTime"
            id="courseTime"
            type="text"
            className="focus:outline-none h-14 bg-white shadow-lg w-full border border-solid border-black rounded-md mb-5 px-4"
          />
        </div>
        <div>
          <label htmlFor="courseContent" className="text-xl font-bold text-gray-800 mb-3 block">
            Contenu
          </label>
          <textarea
            name="courseContent"
            id="courseContent"
            className="focus:outline-none h-80 bg-white shadow-lg w-full border border-solid border-black rounded-md mb-5 p-4 resize-none"
          />
        </div>
        <div className="mb-5">
          <label className="text-xl font-bold text-gray-800 mb-3 block">Annexe</label>
          <UploadCourse />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="focus:outline-none inline-block bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-md p-3 px-20 cursor-pointer"
            onClick={(e) => {
              console.log('test');
            }}
          >
            Valider
          </button>
        </div>
      </section>
    </form>
  );
};
