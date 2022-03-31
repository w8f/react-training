import { VFC } from "react";
import useSample2 from "./uss2";

const UseStateSample2: VFC = () => {
  const { members, onClickBtn, onClickCheckbox } = useSample2();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useState sample 2</h1>
      <hr />
      <table
        style={{
          textAlign: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "10px",
        }}
      >
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
            <td>checked</td>
          </tr>
        </thead>
        <tbody>
          {members.map(({ id, name, age, checked }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>
                <form>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onClickCheckbox(id)}
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onClickBtn}>Button</button>
    </div>
  );
};

export default UseStateSample2;
