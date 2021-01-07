import React from 'react';

/*
type TeacherType = {
    _id: any
    firstName: string
    lastName: string
    speciality: string
    seniority: number
    classroom: string
}
*/

const Dashboard = (): JSX.Element => {
  /*
  const TEACHERS = gql`
      {
          getTeachers {
              firstName
              lastName
          }
      }
  `
    const {loading, error, data} = useQuery(TEACHERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
*/

  return (
    <>
      <header>
        <h1>ELI Project</h1>
      </header>
      <section>
        <div>
          {/*{data.getTeachers.forEach((teacher: TeacherType) => {*/}
          {/*    console.log(teacher.firstName + teacher.lastName)*/}
          {/*})}*/}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
