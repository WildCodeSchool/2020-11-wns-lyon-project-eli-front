import React from 'react';
import { FormEvent, useState } from 'react';
import { useCreateUserMutation } from '../utils/CreateUserMutation';
import faker from 'faker';
faker.locale = 'fr';

const TeacherGenerator = (): JSX.Element => {
  const [nb, setNb] = useState('');
  const { createUser } = useCreateUserMutation();
  const [error, setError] = useState([]);
  // const [users, setUser] = useState([]);
  // const USERS: Array<string> = [];

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    for (let i = 0; i < +nb; i++) {
      const values = {
        lastname: faker.name.lastName(),
        firstname: faker.name.firstName(),
        email: faker.internet.email(),
        role: 'TEACHER',
        password: 'password',
      };

      try {
        // ts-ignore
        const user = await createUser(values);
        // USERS.push(user);
      } catch (err) {
        setError(err);
        // setError(err.graphQLErrors[0].extensions.exception.validationErrors)
        // console.log('createUser errors', err.graphQLErrors[0].extensions.exception.validationErrors)
      }
    }
    // setUser(USERS);
  };

  return (
    <div style={{ margin: 'auto', padding: '100px' }}>
      <pre>Generate Teachers</pre>
      {error && error.map((err: any) => <pre key={err}> {JSON.stringify(Object.values(err.constraints))}</pre>)}
      {/* {users !== [] &&
        users.map((user: any) => (
          <pre key={user.id}>{user.data.createUser.firstName + ' ' + user.data.createUser.lastName + ' created'}</pre>
        ))} */}
      <form onSubmit={onSubmit} noValidate={true}>
        <div>
          <input
            name="number"
            type="number"
            value={nb}
            onChange={(e) => {
              setNb(e.target.value);
            }}
            placeholder="how many ?"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeacherGenerator;
