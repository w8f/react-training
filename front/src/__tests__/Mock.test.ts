import { forEach } from "../logic/Callback";

const mockCallback = jest.fn((x: number) => 42 + x);

test("using mock func", () => {
  forEach([0, 1], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  // undefinedになる。。
  // expect(mockCallback.mock.results[0].value).toBe(42);
});

test("using mock return values", () => {
  const myMock = jest.fn();
  console.log(myMock());

  myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);
  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10 x true true

  // filter関数などでも使用できる。
  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const results = [11, 12].filter((num) => filterTestFn(num));
  console.log("results: " + results); // results: 11

  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
});
