# TypeScript 学習用リポジトリ

## 1. コンテナ立ち上げ

```
app % docker build -t app:latest .
app % docker run -itdp 3002:3002 app:latest
```

## ２. コンテナ内でファイル実行

```
/usr/src/app # node src/index.js
> hello world
```
