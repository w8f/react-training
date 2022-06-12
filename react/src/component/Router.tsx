import { FC, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type RouterType = {
  path: string;
  element: React.LazyExoticComponent<FC<{}>>;
  role: string[];
  children?: any[];
};

export const routes = [
  {
    path: "/",
    role: [],
    element: lazy(() => import("../component/Top")),
    // children: [
    //   {
    //     path: "/child",
    //     element: lazy(() => import("../pages/Child")),
    //   },
    // ],
  },
  {
    path: "/useStateSample",
    role: [],
    element: lazy(() => import("../component/useState/UseStateSample")),
  },
  {
    path: "/useStateSample2",
    role: [],
    element: lazy(() => import("../component/useState/UseStateSample2")),
  },
  {
    path: "/useStateSample3",
    role: [],
    element: lazy(() => import("../component/useState/UseStateSample3")),
  },
  {
    path: "/useEffectSample",
    role: [],
    element: lazy(() => import("../component/useEffect/UseEffectSample")),
  },
  {
    path: "/useRefSample",
    role: [],
    element: lazy(() => import("../component/useRef/UseRefSample")),
  },
  {
    path: "/useContextSample",
    role: [],
    element: lazy(() => import("../component/useContext/UseContextSample")),
  },
  {
    path: "/useContextSampleWithState",
    role: [],
    element: lazy(
      () => import("../component/useContext/UseContextSampleWithState")
    ),
  },
  {
    path: "/useContextSampleWithCustomHook",
    role: [],
    element: lazy(
      () => import("../component/useContext/UseContextSampleWithCustomHook")
    ),
  },
  {
    path: "/useReducerSample",
    role: [],
    element: lazy(() => import("../component/useReducer/UseReducerSample")),
  },
  {
    path: "/useReducerSample2",
    role: [],
    element: lazy(() => import("../component/useReducer/UseReducerSample2")),
  },
  {
    path: "/memorizationSample",
    role: [],
    element: lazy(() => import("../component/memorization/MemorizationSample")),
  },
  {
    path: "/suspenseSample",
    role: [],
    element: lazy(() => import("../component/v18/suspense/SuspenseSample")),
  },
  {
    path: "/suspenseSample2",
    role: [],
    element: lazy(() => import("../component/v18/suspense/SuspenseSample2")),
  },
  {
    path: "/useIdSample",
    role: [],
    element: lazy(() => import("../component/v18/useId/UseIdSample")),
  },
  {
    path: "/automaticBatchingSample",
    role: [],
    element: lazy(() => import("../component/v18/AutomaticBatchingSample")),
  },
  {
    path: "/transitionSample",
    role: [],
    element: lazy(() => import("../component/v18/TransitionSample")),
  },
  {
    path: "/hooksWithJSX",
    role: [],
    element: lazy(() => import("../component/hooksWithJSX")),
  },
  {
    path: "/debuggerSample",
    role: [],
    element: lazy(() => import("../component/debugger/index")),
  },
];

/**
 * Router
 * ルーティング定義のために配列でデータ管理をする
 * @see https://blog.microcms.io/react-best-practices-part3/
 */
const Router: FC = () => {
  const createRoute = ({ element, role, children, ...route }: RouterType) => {
    const Component = element;
    return (
      <Route key={route.path} {...route} element={<Component />}>
        {children && children.map(createRoute)}
      </Route>
    );
  };
  return (
    <BrowserRouter>
      <Routes>{routes.map(createRoute)}</Routes>
    </BrowserRouter>
  );
};

export default Router;
