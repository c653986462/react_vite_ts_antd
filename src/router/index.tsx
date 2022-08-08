import ErrorPage from "@/layouts/404";
import { RouteParent, RouteObject } from "@/router/interface";
const metaRouters = import.meta.globEager("./modules/*.tsx");
// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  const metaItem = metaRouters[item] as RouteParent;
  Object.keys(metaItem).forEach((key: any) => {
    routerArray.push(...metaItem[key]);
  });
});
const routes = [
  ...routerArray,
  {
    exact: true,
    path: "/404",
    element: <ErrorPage />,
  },
];
const routerConfig = {
  routes,
};
export default routerConfig;
