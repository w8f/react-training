import { FC } from "react";
import Layout from "../layout";

/**
 * Cssの動作いろいろ<Grid Layout周り>
 * @see https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout
 *
 * grid-template-columns 列トラックのサイズが定義(px, fr, repeat() )
 * gridAutoRows 行のサイズ定義
 */
const CssSample: FC = () => {
  return (
    <Layout title="Css Grid Layout Sample Page">
      <dl>
        <dt className="mt-10">gridTemplateColumns: "200px 200px 200px"</dt>
        <dd
          style={{
            display: "grid",
            // 列が200pxの要素3つが横並びになる
            gridTemplateColumns: "200px 200px 200px",
          }}
        >
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i} style={{ border: "solid" }}>
                  {i}
                </div>
              );
            })}
        </dd>

        <dt className="mt-10">gridTemplateColumns: "500px 2fr 1fr"</dt>
        <dd
          style={{
            display: "grid",
            // fr グリッドコンテナー内の利用可能な空間の比で定義。
            // px(=絶対値)と合わせて指定することも可能
            gridTemplateColumns: "500px 2fr 1fr",
          }}
        >
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i} style={{ border: "solid" }}>
                  {i}
                </div>
              );
            })}
        </dd>

        <dt className="mt-10">gridTemplateColumns: "repeat(3, 1fr)"</dt>
        <dd
          style={{
            display: "grid",
            // repeat 記法によるトラック列挙
            // grid-template-columns: 1fr 1fr 1fr; の指定と同義
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i} style={{ border: "solid" }}>
                  {i}
                </div>
              );
            })}
        </dd>

        <dt className="mt-10">
          gridTemplateColumns: "20px repeat(6, 1fr) 20px"
        </dt>
        <dd
          style={{
            display: "grid",
            // repeat 記法によるトラック列挙
            // px(=絶対値)と合わせて指定することも可能
            gridTemplateColumns: "20px repeat(6, 1fr) 20px",
          }}
        >
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i} style={{ border: "solid" }}>
                  {i}
                </div>
              );
            })}
        </dd>

        <dt className="mt-10">grid-template-columns example 5</dt>
        <dd
          style={{
            display: "grid",
            // repeat 記法によるトラック列挙
            // px(=絶対値)と合わせて指定することも可能
            gridTemplateColumns: "repeat(5, 1fr 2fr)",
          }}
        >
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i} style={{ border: "solid" }}>
                  {i}
                </div>
              );
            })}
        </dd>

        <dt className="mt-10">
          明示的なグリッド(grid-auto-rows) gridAutoRows: "200px",
          gridTemplateColumns: "repeat(3, 1fr)"
        </dt>
        <dd
          style={{
            display: "grid",
            // repeat 記法によるトラック列挙
            // px(=絶対値)と合わせて指定することも可能
            gridAutoRows: "200px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i} style={{ border: "solid" }}>
                  {i}
                </div>
              );
            })}
        </dd>

        <dt className="mt-10">
          gridAutoRows: "minmax(100px, auto)", gridTemplateColumns: "repeat(3,
          1fr)",
        </dt>
        <dd
          style={{
            display: "grid",
            gridAutoRows: "minmax(100px, auto)",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <div>One</div>
          <div className="text-3xl">
            Two <p>100pxが最小値 コンテンツのサイズで縦幅は自動的に伸びる</p>
          </div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
        </dd>
      </dl>
    </Layout>
  );
};

export default CssSample;
