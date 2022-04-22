import { FC, useEffect, useReducer } from "react";
import Users, { User } from "../../logic/Users";

type Action =
  | {
      type: "setName";
      args: {
        id: number;
        name: string;
      };
    }
  | {
      type: "setUsername";
      args: {
        id: number;
        username: string;
      };
    }
  | {
      type: "fetchAll";
      args: {
        users: User[];
      };
    };

const initialState = [
  {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
];

const reducer = (users: User[], action: Action): User[] => {
  switch (action.type) {
    case "fetchAll":
      return action.args.users;
    case "setName":
      return [
        ...users.map((user) => {
          if (user.id === action.args.id) {
            user.name = action.args.name;
            return user;
          }
          return user;
        }),
      ];
    case "setUsername":
      return [
        ...users.map((user) => {
          if (user.id === action.args.id) {
            user.username = action.args.username;
            return user;
          }
          return user;
        }),
      ];
  }
};

const useSample = () => {
  const [users, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Users.all().then((users) =>
      dispatch({
        type: "fetchAll",
        args: {
          users: users,
        },
      })
    );
  }, []);

  return {
    users,
    dispatch,
  };
};

/**
 * useReducer sample2
 * 配列の更新
 */
const UseReducerSample2: FC = () => {
  const { users, dispatch } = useSample();
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-3xl font-bold underline">useReducer sample2</h1>
      <hr />
      <div>
        <table style={{ marginLeft: "auto", marginRight: "auto", border: "1" }}>
          <thead>
            <tr>
              <td>name</td>
              <td>username</td>
              <td>email</td>
              <td>phone</td>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, username, email, phone }) => {
              return (
                <tr key={id}>
                  <td>
                    <input
                      defaultValue={name}
                      onChange={(e) => {
                        dispatch({
                          type: "setName",
                          args: {
                            id: id,
                            name: e.target.value,
                          },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={username}
                      onChange={(e) => {
                        dispatch({
                          type: "setUsername",
                          args: {
                            id: id,
                            username: e.target.value,
                          },
                        });
                      }}
                    />
                  </td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseReducerSample2;
