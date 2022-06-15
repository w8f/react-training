# TypeScript 学習用リポジトリ

## 1. コンテナ立ち上げ

docker run で立ち上げる場合

```
app % docker build -t app:latest .
app % docker run --init -itdp 3002:3002 app:latest
```

※ Node.js は PID 1 として実行するように設計されていないため、\
Docker 内部で実行すると予期しない動作が発生する。立ち上げ時に、--init フラグをつけることで、\
Docker コンテナの node が PID=1 で立ち上がるのを防ぐ。

※毎回ファイル変更して立ち上げるのが面倒なので、docker-compose up で変更を検知しつつ立ち上げするよう変更

## ２. コンテナ内でファイル実行

```
/usr/src/app # node src/index.js
> hello world
```

node on Docker 環境のベストプラクティスが紹介されていたので、\
これを参考に Dockerfile の作成したほうがよさげかも\
<https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md>
