import { getResult } from "@/app/utils";
import { redirect } from "next/navigation";

interface Quiz {
  id: number;
  title: string;
  quiz_description: string;
  answer: string;
}

const NestedPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { show?: string };
}) => {
  const sql = "SELECT * FROM quizzes WHERE id = " + params.id;
  const result = (await getResult(sql)) as Quiz[];
  const { id, title, quiz_description, answer } = result[0];

  if (!result || result.length === 0) {
    // Handle case when no quiz is found
    return <div>Quiz not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">{title}:</h1>
      <p className="text-xl mt-2">{quiz_description} ?</p>
      {searchParams.show === "true" && (
        <p className="text-xl mt-2 text-green-600">{answer}</p>
      )}

      <form
        action={async () => {
          "use server";
          redirect(`/quiz/${params.id}?show=true`);
        }}
      >
        <button className="mt-4  p-2 bg-gray-200 shadow rounded hover:bg-gray-400 transition-all">
          Show Answer
        </button>
      </form>
    </div>
  );
};

export default NestedPage;
