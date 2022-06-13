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
});
