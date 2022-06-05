/**
 * 現在日時を取得し、YYYYMMDDhhmm形式の文字列を返却する
 */
exports.now = () => {
  // serverの日時がJSTで取得できないので、タイムゾーンは直接指定
  const dt = new Date(
    new Date().toLocaleString("ja", {
      timeZone: "Asia/Tokyo",
    })
  );

  const YYYY = dt.getFullYear();
  const MM = dt.getMonth() + 1;
  const DD = dt.getDate();
  const hh = dt.getHours();
  const mm = dt.getMinutes();

  /**
   * format用関数
   * @param n
   */
  const __f = (n: number) => {
    return n < 10 ? "0" + n : String(n);
  };

  return `${YYYY}${__f(MM)}${__f(DD)}${__f(hh)}${__f(mm)}`;
};
