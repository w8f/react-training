# useReducer

## 用例

- useState の代替品。
- (state, action) => newState という型のリデューサ (reducer) を受け取り、現在の state を dispatch メソッドとペアにして返す。
- 複数の値にまたがる複雑な state ロジックがある場合や、前の state に基づいて次の state を決める必要がある場合に有用
- 複数階層にまたがって更新を発生させるようなコンポーネントではパフォーマンスの最適化にもなる
