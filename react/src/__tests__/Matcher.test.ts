import { sum } from "../logic/Sum";

/**
 * Matcherに関するサンプルコード
 *
 * その他のマッチャ−に関するリファレンスはこちら
 * https://jestjs.io/ja/docs/expect
 */

/**
 * expect.toBe()を利用した例
 */
test("add 1 + 2 to equal 3", () => {
  // toBeはObject.is を使用して厳密な等価性をテスト
  expect(sum(1, 2)).toBe(3);
});

/**
 * expect.toEqual()を利用した例
 */
test("object assignment", () => {
  const target = { one: 1 };
  const source = { two: 2 };

  const assignedData = Object.assign(target, source);
  // toEqualは、objectの等価性を再帰的にチェックする
  expect(assignedData).toEqual({
    one: 1,
    two: 2,
  });
});

/**
 * 反対のテスト
 */
test("add 1 + 2 not to equal 2", () => {
  expect(sum(1, 2)).not.toBe(2);
});

/**
 * nullのテスト
 */
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

/**
 * 0のテスト
 */
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

/**
 * 数値のテスト
 */
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

/**
 * 浮動小数点の値のテスト
 */
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);         このように書くと、丸め込み誤差が原因で期待通りに動作しない
  expect(value).toBeCloseTo(0.3); // これならば正しく動く
});

/**
 * 該当の文字列を含まないテスト
 */
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

/**
 * 該当の文字列を含むテスト
 */
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

/**
 * 配列に該当の文字列を含むテスト
 */
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

/**
 * 例外が投げられることをテスト
 */
const raiseError = () => {
  throw new Error("error!");
};

test("raiseError func should raise error", () => {
  // 注意；例外をスローする関数は、ラッピング関数内で呼び出される必要がある。
  expect(() => raiseError()).toThrow("error!");
});
