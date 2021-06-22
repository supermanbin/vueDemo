import Grid from "@/pages/grid/Grid.vue";
import Svg from "@/pages/svg/Svg.vue";
import Line from "@/pages/svg/components/Line.vue";
import Shape from "@/pages/svg/components/Shape.vue";
import Path from "@/pages/svg/components/Path.vue";
import Auth from "@/pages/auth/Auth.vue";

const routes = [
  {
    path: "/",
    redirect: "/svg/line",
  },
  {
    path: "/svg",
    component: Svg,
    redirect: "/svg/line",
    children: [
      {
        path: "line",
        component: Line,
      },
      {
        path: "shape",
        component: Shape,
      },
      {
        path: "path",
        component: Path,
      },
    ],
  },
  {
    path: "/grid",
    component: Grid,
  },
  {
    path: "/auth",
    component: Auth,
  },
];

export default routes;
