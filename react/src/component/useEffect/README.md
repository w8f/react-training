# useEffect

公式リファレンス\
<https://ja.reactjs.org/docs/hooks-reference.html#useeffect>

useEffect に渡された関数はレンダーの結果が**画面に反映された後**に動作します。

```js
  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/Photos");
      const ps = (await res.json()) as Photo[];
      setPhotos(ps);
    };
    fetchPhoto();
  }, []);
```

useEffect の第 2 引数

- 空の配列[] → Mount 時のみ第一引数の関数が実行される。
- [特定の値] → 特定の値が変化した際に実行される。
