import { Hoge } from "../logic/Foo";

// 実装をモック化

test("mock implemention", () => {
  const myMockFn = jest.fn((cb) => cb(null, true));
  myMockFn((err: Error, val: string) => console.log(val));
  // > true

  // 関数への複数回への呼び出しで異なる結果を得るように
  // 複雑な挙動をするモック関数を再作成する必要がある場合は
  // mockImplementationOnceメソッドを使用する。
  const myMockFn2 = jest
    .fn((cb) => cb(null, "default")) // default
    .mockImplementationOnce((cb) => cb(null, true))
    .mockImplementationOnce((cb) => cb(null, false))
    .mockName("mock");
  myMockFn2((err: Error, val: string) => console.log(val));
  myMockFn2((err: Error, val: string) => console.log(val));
  myMockFn2((err: Error, val: string) => console.log(val));
  myMockFn2((err: Error, val: string) => console.log(val));
  // > true
  // > false
  // > default
  // > default
});

test("mock implemention2", () => {
  jest.mock("../logic/Foo");
  const foo = require("../logic/Foo");

  foo.mockImplementation(() => 42);
  console.log(foo());
  // > 42
});
