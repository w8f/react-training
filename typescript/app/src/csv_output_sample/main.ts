"use strict";

const now = () => {
  // serverの日時がJSTで取得できないので、一旦ソースで指定
  const dt = new Date(
    new Date().toLocaleString("ja", {
      timeZone: "Asia/Tokyo",
    })
  );

  const YYYY = dt.getFullYear();
  const MM = dt.getMonth() + 1;
  const DD = dt.getDate();
  const hh = dt.getHours();
  const mm = dt.getMinutes();

  /**
   * format用関数
   * @param n
   */
  const __f = (n: number) => {
    return n < 10 ? "0" + n : String(n);
  };

  return `${YYYY}-${__f(MM)}-${__f(DD)}-${__f(hh)}-${__f(mm)}`;
};

/**
 * Node.js上でCSV出力するサンプルコード
 */
const axios = require("axios");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: `./data/output_${now()}.csv`,
});

const main = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = res.data;

  // console.log(users);
};

console.log(now());
main();

const dt = new Date();
