import {FormComponent} from "./form.component";
import {MobiRoute} from "../../types/Routes";
import {navigationRoutes} from "../navigationRoutes";

export const form: MobiRoute<FormComponent> = {
 ...navigationRoutes.form,
  component: FormComponent,
  deactivateGuards: {
    [navigationRoutes.main.routerLink]: (component, currentRoute, currentState, nextState) => {

      console.log(component, currentRoute, currentState, nextState);
      return component.hasUnsavedChanges
    }
  },
}
