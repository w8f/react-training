import { useState, useEffect } from "react";

type Member = {
  id: number;
  name: string;
  age: number;
  checked: boolean;
};

// aespa member info
const aespa = [
  { id: 1, name: "karina", age: 21 },
  { id: 2, name: "winter", age: 21 },
  { id: 3, name: "giselle", age: 21 },
  { id: 4, name: "ningning", age: 19 },
];

const useSample2 = () => {
  // member state
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    // 初回ロード時にチェックボックス用の属性を追加する。
    const member = aespa.map((member) =>
      Object.assign(member, { checked: false })
    );
    setMembers(member);
  }, []);

  // チェックボタン押下時
  const onClickCheckbox = (id: number) => {
    // メンバーチェック更新
    const update = (member: Member) => {
      member.checked = !member.checked;
      return member;
    };
    setMembers([
      ...members.map((member) => (member.id === id ? update(member) : member)),
    ]);
  };

  // Button押下時
  const onClickBtn = () => {
    const target = members
      .filter((member) => member.checked)
      .map((member) => member.name);
    console.log("selected member is: " + target);
  };

  return {
    members,
    onClickBtn,
    onClickCheckbox,
  };
};

export default useSample2;
