/**
 * Node.js上でCSV出力するサンプルコード
 */
const axios = require("axios");
// const { AxiosResponse } = axios;

// Node.jsでコマンドライン引数を受け取る
// process.argv[2]で第一引数を受け取る
console.log(process.argv[2] ?? "引数は指定されていません。");

const main = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = res.data;
  console.log(users);
};

main();
