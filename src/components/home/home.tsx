import { Container, Footer, Header } from "../../styles/elements";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  Link,
} from "react-router-dom";
import { QuizEditor } from "../QuizEditor";
import AuthenticationForm from "../AuthenticationForm";
import { QuizzesList } from "../QuizzesList";
import { Quiz } from '../../pages/Quiz';
import { ReactRouter } from '../../router/router';

const React = require("react");

export function Home(): JSX.Element {
  return (
    <section className="">
      <h1>Teacher Dashboard</h1>
    </section>
  );
}
