import defaultExport, { foo, bar } from "../logic/FooBarBaz";

jest.mock("../logic/FooBarBaz", () => {
  const originalModule = jest.requireActual("../logic/FooBarBaz");

  // default exportのオブジェクトとfooオブジェクトをモック化
  return {
    __esModule: true,
    ...originalModule,
    default: () => "mocked baz",
    foo: "mocked foo",
  };
});

test("should do a partial mock", () => {
  const defaultExportResult = defaultExport();

  expect(defaultExportResult).toBe("mocked baz");
  expect(foo).toBe("mocked foo");
  expect(bar()).toBe("bar");
});
