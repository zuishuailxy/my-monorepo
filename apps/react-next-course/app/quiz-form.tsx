import { insertData } from "@/app/utils";
import { revalidatePath } from "next/cache";

const quizFrom = () => {
  async function createQuiz(formData: FormData) {
    "use server";
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      answer: formData.get("answer"),
    };

    const sql =
      "INSERT INTO quizzes (title, quiz_description, answer) VALUES (?, ?, ?)";
    const val = [data.title, data.description, data.answer] as string[];
    insertData(sql, val);

    console.log(data);
    revalidatePath("/");
  }
  return (
    <form action={createQuiz} className="flex flex-col mt-8 max-w-xs">
      <h3 className="text-lg font-semibold">Create quiz</h3>
      <label>
        Title
        <input
          className="bg-gray-50 border border-gray-200 rounded p-1 ml-2"
          type="text"
          name="title"
        />
      </label>
      <label>
        Description{" "}
        <input
          className="bg-gray-50 border border-gray-200 rounded p-1 ml-2"
          type="text"
          name="description"
        />
      </label>

      <label>
        Answer
        <input
          className="bg-gray-50 border border-gray-200 rounded p-1 ml-2"
          type="text"
          name="answer"
        />
      </label>

      <button
        type="submit"
        className="mt-4  p-2 bg-gray-50 shadow rounded hover:bg-gray-200 transition-all"
      >
        Create Quiz
      </button>
    </form>
  );
};

export default quizFrom;
