# Node.js CSV 入出力サンプル

## 技術(パッケージ選定)

- **csv-writer** \
   csv 書き込み用ライブラリ\
  <https://www.npmjs.com/package/csv-writer>

- axios\
  非同期通信ライブラリ\
  <https://www.npmjs.com/package/axios>

## サンプルプログラムの仕様

### input

ユーザ情報のモックを json で返却してくれる REST API\
<https://jsonplaceholder.typicode.com/users>

```
[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  ...
]
```

### output

csv_output_sample ディレクトリ内の main.ts 実行後、data ディレクトリ配下に CSV ファイルが出力される。

**【出力対象の csv ファイルの仕様】**

| KEY        | 仕様                              |
| ---------- | --------------------------------- |
| ファイル名 | output_YYYYMMDDhhmm(実行日時).csv |
| 文字コード | UTF-8                             |
| ヘッダ行   | あり                              |
| 改行コード | LF                                |
| 値         | ダブルクォーテーションで囲む      |

### トラブルシューティング

- ts ファイルを直接実行

```
/usr/src/app #　./node_modules/.bin/ts-node src/csv_output_sample/main.ts
```

- CSV ファイルの取り決めに関するキメ\
  この記事が参考になりそう。\
  <https://codezine.jp/article/detail/2364>
