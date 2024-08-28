import {SaveComponent} from "./save.component";
import {MobiRoute} from "../../types/Routes";
import {navigationRoutes} from "../navigationRoutes";

export const save: MobiRoute = {
  ...navigationRoutes.save,
  component: SaveComponent,
}
