# useContext

何らかのデータが、ネストレベルの異なる多くのコンポーネントから\
アクセスできる必要がある時に使用される。

公式リファレンス\
<https://ja.reactjs.org/docs/hooks-reference.html#usecontext>

わかりやすかった記事\
<https://reffect.co.jp/react/react-usecontext-understanding>

## useContext を利用する利点

- 複数コンポーネントで同じステートを簡単に共有できる。
- ステート、イベントハンドラを一元管理できる。
- 全てのコンポーネントを明示的に通すことなしに、コンポーネントツリーの深くまで値を渡せる。
  - アプリケーション内の多くのコンポーネントから必要とされる特定のタイプのプロパティ\
    （例： ロケール設定、UI テーマなど）で使用するのがオススメ
