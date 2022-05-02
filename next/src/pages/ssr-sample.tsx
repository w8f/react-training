import { NextPage, GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lon: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Props = {
  users: User[];
};

/**
 * ServerSide Rendering Sample
 * ページからgetServerSideProps（サーバーサイドレンダリング）という関数をエクスポートすると、
 * Next.jsはリクエストごとに、getServerSidePropsが返すデータを使ってこのページをプリレンダリングします。
 * これは、頻繁に変更されるデータを取得して、最新のデータを表示するようにページを更新させたい場合に有効です。
 */
const ssrSample: NextPage<Props> = ({ users }) => {
  return (
    <div className="bg-stone-50 m-auto h-screen text-center">
      <h1 className="mt-10 inline-block text-2xl">SSR Sample</h1>
      <table className="mt-10 mx-auto">
        <thead>
          <tr className="border bg-white">
            <td className="p-2">id</td>
            <td className="p-2">name</td>
            <td className="p-2">username</td>
            <td className="p-2">email</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, username, email }) => (
            <tr className="border bg-white hover:bg-gray-200" key={id}>
              <td className="p-2">{id}</td>
              <td className="p-2">{name}</td>
              <td className="p-2">{username}</td>
              <td className="p-2">{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res: AxiosResponse<User[]> = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = res.data;
  //   console.log(context);
  return {
    props: {
      users: users,
    },
  };
};

export default ssrSample;
