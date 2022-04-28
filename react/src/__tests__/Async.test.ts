import { fetchPhoto } from "../component/useEffect/UseEffectSample";

// promise
// 記法は大きく3つに分けられる。どの構文に優劣があるわけではないので、
// シンプルに書ける方を選択するのがベターか。
test("fetch photo test", () => {
  const photos = require("./data/fetchPhotos.json");
  return fetchPhoto().then((data) => {
    expect(data).toMatchObject(photos);

    // promiseがrejectされた場合の処理をチェックしたい場合
    // test("the fetch fails with an error", () => {
    //   expect.assertions(1);
    //   return fetchData().catch((e) => expect(e).toMatch("error"));
    // });

    // expect.toContain()は===で厳密な等価性をチェックしているので、
    // 下記は通らない。
    // expect(data[0]).toContain({
    //   albumId: 1,
    //   id: 1,
    //   thumbnailUrl: "https://via.placeholder.com/150/92c952",
    //   title: "accusamus beatae ad facilis cum similique qui sunt",
    //   url: "https://via.placeholder.com/600/92c952",
    // });
  });
});

test("fetch photo test2", () => {
  const photos = require("./data/fetchPhotos.json");

  // expect宣言での記法
  return expect(fetchPhoto()).resolves.toMatchObject(photos);

  // promiseがrejectされた場合の処理をチェックしたい場合
  // test("the fetch fails with an error", () => {
  //   return expect(fetchData()).rejects.toMatch("error");
  // });
});

// async awaitを使用した書き方
test("fetch photo test3", async () => {
  const expected = require("./data/fetchPhotos.json");
  const photos = await fetchPhoto();
  expect(photos).toMatchObject(expected);
});
