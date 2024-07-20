// const mysql = require("mysql2/promise");

// const fn = async () => {
//   const connection = await mysql.createConnection({
//     host: "localhost",
//     database: "my_test_db",
//     user: "root",
//     password: "Wodeshe520,",
//   });
//   try {
//     const [results, fields] = await connection.query("SELECT * FROM quizzes");
//     console.log("The solution is:", results, fields);
//   } catch (error) {
//     console.error("Error executing query:", error);
//   } finally {
//     await connection.end();
//   }
// };

const mysql = require("mysql2/promise");

const fn = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "my_test_db",
    user: "root",
    password: "Wodeshe520,",
  });
  console.log("Connected to the database as id", connection.threadId);
  try {
    const [results, fields] = await connection.query("SELECT * FROM quizzes");
    console.log("The solution is:", results);
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await connection.end();
  }
};

fn();
