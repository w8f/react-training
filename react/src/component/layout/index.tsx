import { FC } from "react";

type LayoutProps = {
  title: string;
  children: JSX.Element;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <div className="bg-stone-50 text-center min-h-screen">
        <h1 className="text-2xl mt-10 inline-block">{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Layout;
