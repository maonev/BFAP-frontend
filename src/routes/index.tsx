import { Home } from "@/layouts/home";
import { Teams } from "@/layouts/teams";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./paths";
import { LoginPage } from "@/layouts/auth/LoginPage";

type Props = {};

export const RoutesPath = (props: Props) => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.TEAMS} element={<Teams />} />
      <Route path={Paths.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};
