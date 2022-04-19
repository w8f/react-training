import { FC, useState } from "react";

type Input = {
  name: string;
  email: string;
};

/**
 * Input要素用に共通関数を用意する。
 * @see https://blog.microcms.io/react-best-practices-part3/
 */
const UseStateSample3: FC = () => {
  const [formData, setFormData] = useState<Input>({
    name: "",
    email: "",
  });

  /** Input要素用 共通関数 */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="text-center bg-stone-50 min-h-screen m-auto">
      <div>
        <h1 className="text-2xl m-20 inline-block">useState sample3</h1>
        <form>
          <div className="flex justify-center m-4">
            <label className="mr-4" htmlFor="name">
              Name:
            </label>
            <input
              className="bg-white border border-gray-800"
              type="text"
              name="name"
              onChange={onInputChange}
            ></input>
          </div>
          <div className="flex justify-center m-4">
            <label className="mr-4" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-white border border-gray-800"
              type="email"
              name="email"
              onChange={onInputChange}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UseStateSample3;
