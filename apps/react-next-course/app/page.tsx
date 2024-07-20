import Link from "next/link";
import { Suspense } from "react";
import styles from "./home.module.css";
import { getResult } from "@/app/utils";
import QuizForm from "./quiz-form";

interface Quiz {
  id: number;
  title: string;
}

const Quizzes = async () => {
  const sql = "SELECT * FROM quizzes";
  const quizzes = (await getResult(sql)) as Quiz[];

  return (
    <ul>
      {quizzes?.map((quiz) => (
        <li key={quiz.id} className="underline">
          <Link href={`/quiz/${quiz.id}`}>
            {quiz.id} -- {quiz.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Home = async () => {
  return (
    <section>
      <h1 className="text-2xl text-blue-700 font-semibold">All Quizzes</h1>
      <p className={styles.hero}>sub quizzes</p>
      <Suspense fallback={<p>loading</p>}>
        <Quizzes></Quizzes>
      </Suspense>
      <QuizForm />
    </section>
  );
};

export default Home;
