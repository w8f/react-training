import { FC } from "react";
import { routes } from "./Router";

const Top: FC = () => {
  return (
    <div className="text-center bg-stone-50 h-screen">
      <h1 className="text-3xl m-10 inline-block">
        Welcome, Let's React Training
      </h1>
      <p>this is a react training repository.</p>
      <a href="http://localhost:3001/">switch next.js training pages</a>
      <div className="m-8">
        {routes.map(({ path }) => (
          <a className="block text-lg" key={path} href={path}>
            cd {path}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Top;
