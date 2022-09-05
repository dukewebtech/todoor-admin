import { lazy } from "react";
import { Container, useMediaQuery } from "@mui/material";
import { MediaQueryBreakpointEnum } from "constants/Global";
import { Navigate, useRoutes } from "react-router-dom";
import Suspense from "common/Suspense";
import { configureRoutes } from "utils/RouteUtils";
import { RouteEnum } from "constants/RouteConstants";

function AppProtected(props) {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  const routes = useRoutes(ROUTES);
  return (
    <>
      <Container maxWidth="xl">
        <Suspense>{routes}</Suspense>
      </Container>
    </>
  );
}

export default AppProtected;

const ROUTES = configureRoutes([
  {
    path: "*",
    element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.HOME,
    element: lazy(() => import("features/home/Home")),
  },
]);
