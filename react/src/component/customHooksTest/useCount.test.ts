import { renderHook, act } from "@testing-library/react-hooks";
import { useCount } from "./useCount";

describe("useCountフックのテスト", () => {
  test("should use counter", () => {
    const { result } = renderHook(() => useCount());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
  });

  test("should increment count", () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test("should decrement count", () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  test("should increment count from custom initial value", () => {
    const { result } = renderHook(() => useCount(9000));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(9001);
  });

  /**
   * Propsが多い場合だと、それらをすべて追跡する変数を持つのは難しい。。
   */
  test("should reset count to updated initial value", () => {
    let initialValue = 0;
    const { result, rerender } = renderHook(() => useCount(initialValue));

    initialValue = 10;
    rerender();

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });

  /**
   * rerenderのinitialPropsオプションを利用した例。こっちのほうが、スマートな感じ？
   */
  test("should reset count to updated initial value2", () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => useCount(initialValue),
      {
        initialProps: {
          initialValue: 0,
        },
      }
    );

    rerender({ initialValue: 10 });

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });
});
