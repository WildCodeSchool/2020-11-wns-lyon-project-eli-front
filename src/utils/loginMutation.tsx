import gql from 'graphql-tag';
import { FetchResult, useMutation } from '@apollo/react-hooks';
import { useCookies } from 'react-cookie';
import { useAuthToken } from '../hooks/auth';

export const loginMutationGQL = gql`
  mutation auth($password: String!, $email: String!) {
    authenticate(password: $password, email: $email) {
      token
      user {
        email
      }
    }
  }
`;

export const useLoginMutation = () => {
  const [, setAuthToken, removeAuthtoken] = useAuthToken();
  const [, setCookie] = useCookies(['user']);

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      console.log(data);
      setCookie('user', data.authenticate.user.email);
      setAuthToken(data.authenticate.token);
    },
  });

  // full login function
  const login = async (email: string, password: string): Promise<FetchResult<unknown>> => {
    removeAuthtoken();
    return await mutation({
      variables: {
        password,
        email,
      },
    });
  };

  return { login, mutationResults };
};
