import { Tag } from '../components/QuizEditor';

export type AnswerType = {
  question?: number;
  label: string;
  is_correct: boolean;
}

export type QuestionType = {
  quiz?: number;
  label: string;
  multiple_choice: boolean;
  answers?: AnswerType[];
}

export type QuizType = {
  title: string;
  subtitle?: string;
  questions?: QuestionType[];
  tags?: Tag[];
  createdAt?: Date;
}

export type TagType = {
  name: string;
}
