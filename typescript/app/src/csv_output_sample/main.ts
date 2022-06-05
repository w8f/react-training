"use strict";

/**
 * Node.js上でCSV出力するサンプルコード
 */
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const outputDir = path.join(__dirname, "data");
const { now } = require("./date");

const columns = ["id", "name", "username", "email", "phone", "website"];
const csvWriter = createCsvWriter({
  path: `${outputDir}/output_${now()}.csv`,
  header: columns.map((column) => {
    return {
      id: column,
      title: column.toUpperCase(),
    };
  }),
  alwaysQuote: true,
});

/**
 * ファイルを削除
 * @param file file名
 */
const removeFile = (file: string) => {
  fs.unlink(file, (err: Error) => {
    if (err) {
      throw err;
    }
    console.log("file remove success");
  });
};

const main = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = res.data;
  try {
    const isCsv = new RegExp(/.*\.csv$/);
    fs.readdir(
      "./src/csv_output_sample/data",
      {
        encoding: "utf8",
      },
      (err: Error, files: string[]) => {
        if (err) {
          throw err;
        }
        files
          .filter((file) => {
            const filePath = path.join(__dirname, "data", file);
            return fs.statSync(filePath).isFile() && isCsv.test(filePath);
          })
          // 既存ファイル削除
          .forEach((targetFile) => {
            removeFile(path.join(__dirname, "data", targetFile));
          });
      }
    );
    // csv 出力
    csvWriter
      .writeRecords(users)
      .then(() => {
        console.log("done");
      })
      .catch((error: Error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

main();
