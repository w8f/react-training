import axios from "axios";
import Users from "../logic/Users";

// モジュールをモック化
jest.mock("axios");

test("should fetch users", () => {
  const users = require("./data/users.json");
  const response = { data: users };

  // 注意；TypeScript環境の場合、anyを噛ませないとエラーになる。
  // axios.get.mockResolvedValue(response);
  (axios.get as any).mockResolvedValue(response);

  return Users.all().then((data) => expect(data).toEqual(users));
});
