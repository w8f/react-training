# useRef

## 用例

1. DOM やコンポーネントにアクセスする手段として使うとき
2. インスタンス変数代わりに使う(⇔useState との違いは値を更新しても画面が再描画されない。)

内部に保持している値だけを更新したい、かつコンポーネントの再レンダリングを行いたくない場合に使うと良さそう

2 の使用例）コンポーネントのマウント状態、特定の処理が何度呼び出されたか、送信前のログデータを保持しておく

```js
  // nullを指定することで、readonlyになる（=currentは書き換えられない）
  const inputRef = useRef<HTMLInputElement>(null);

  const numRef = useRef(0);
    // 1. DOM やコンポーネントにアクセスする手段として使うとき
    <input ref={inputRef} type="text" />
    <button onClick={() => {
        // useRef とは、書き換え可能な値を
        // .current プロパティ内に保持することができる「箱」のようなもの
        inputRef.current && inputRef.current.focus();
    }}>
        Focus on Input
    </button>

    // 2. インスタンス変数代わりに使う
    <button onClick={() => {
        numRef.current++;
        console.log(numRef.current);
    }}>
        click
    </button>
```

useRef の初期値によって、useRef の返り値の型が変わる \
**RefObject** と **MutableRefObject** のどちらか\
<https://zenn.dev/berlysia/articles/624bc1aaffda58>
