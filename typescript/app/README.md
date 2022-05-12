# TypeScript 学習用リポジトリ

## 1. コンテナ立ち上げ

docker run で立ち上げる場合

```
app % docker build -t app:latest .
app % docker run -itdp 3002:3002 app:latest
```

※毎回ファイル変更して立ち上げるのが面倒なので、docker-compose up で変更を検知しつつ立ち上げするよう変更

## ２. コンテナ内でファイル実行

```
/usr/src/app # node src/index.js
> hello world
```
