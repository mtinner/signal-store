import {MainComponent} from "./main.component";
import {MobiRoute} from "../../types/Routes";
import {navigationRoutes} from "../navigationRoutes";

export const main: MobiRoute = {
  ...navigationRoutes.main,
  component: MainComponent,
}
