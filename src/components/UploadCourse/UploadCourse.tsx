import React from 'react';

const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  const fileName = file?.name;
  const fileType = file?.type;

  console.log(fileName);
  console.log(fileType);
  console.log(file);
};

export const UploadCourse = (): JSX.Element => {
  return (
    <>
      <label
        htmlFor="uploadCourse"
        className="inline-block bg-green-400 hover:bg-green-600 text-white font-medium rounded-md p-3"
      >
        Ajouter un fichier
      </label>
      <input id="uploadCourse" name="uploadCourse" type="file" className="hidden" onChange={handleFileUpload} />
    </>
  );
};
