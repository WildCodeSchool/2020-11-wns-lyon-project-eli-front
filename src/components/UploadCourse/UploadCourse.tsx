import React, { useEffect, useState } from 'react';

export const UploadCourse = (): JSX.Element => {
  const filesTemp: File[] = [];
  const filesNameTemp: string[] = [];
  const [files, setFiles] = useState<File[]>([]);
  const [filesName, setFilesName] = useState<string[]>([]);
  const [filesCount, setFilesCount] = useState(0);

  useEffect(() => {
    setFiles(files);
  }, [files]);

  useEffect(() => {
    setFilesName(filesName);
  }, [filesName]);

  useEffect(() => {
    setFilesCount(filesCount);
  }, [filesCount]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFilesCount(event.target.files.length);
      for (let i = 0; i < event.target.files.length; i++) {
        filesTemp.push(event.target.files[i]);
        filesNameTemp.push(event.target.files[i].name);
      }
      setFilesName(filesNameTemp);
      setFiles(filesTemp);
    }

    event.target.value = '';
  };

  const handleFileDelete = (index: number): void => {
    const currentFilesName = filesName;
    currentFilesName.splice(index, 1);
    setFilesName(currentFilesName);

    const currentFiles = files;
    currentFiles.splice(index, 1);
    setFiles(currentFiles);

    setFilesCount(files.length);
  };

  return (
    <>
      <div>
        {filesName.map((fileName, index) => {
          return (
            <div key={index} className="flex flex-row justify-between items-center mb-2">
              <p>{fileName}</p>
              <button
                onClick={(e) => {
                  e.preventDefault;
                  handleFileDelete(index);
                }}
                className="inline-block bg-red-500 hover:bg-red-700 text-white font-medium rounded-md p-2 focus:outline-none"
              >
                Supprimer
              </button>
            </div>
          );
        })}
      </div>
      <label
        htmlFor="uploadCourse"
        className="inline-block bg-green-400 hover:bg-green-600 text-white font-medium rounded-md p-3 cursor-pointer"
      >
        {filesCount == 0 && 'Ajouter un fichier'}
        {filesCount > 0 && 'Modifier vos fichiers'}
      </label>
      <input
        id="uploadCourse"
        name="uploadCourse"
        type="file"
        className="hidden"
        onChange={handleFileUpload}
        multiple
      />
    </>
  );
};
