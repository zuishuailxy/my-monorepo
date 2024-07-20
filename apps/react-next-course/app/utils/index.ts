import mysql from "mysql2/promise";

const createConnection = async () => {
  return await mysql.createConnection({
    host: "",
    database: "",
    user: "",
    password: "",
  });
};

export const getResult = async (sql: string) => {
  const connection = await createConnection();
  try {
    const [results, _] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await connection.end();
  }
};

export const insertData = async (sql: string, val: string[]) => {
  const connection = await createConnection();

  try {
    const [result] = await connection.execute(sql, val);
    console.log("Insert successful, ID:", result);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    // 关闭连接
    await connection.end();
  }
};
