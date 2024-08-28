import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from '@angular/router';
import {form} from "./form/form.component.routes";
import {main} from "./main/main.component.routes";
import {save} from "./save/save.component.routes";
import {navigationRoutes} from "./navigationRoutes";

export const mobiRoutes = {
  main,
  save,
  form,
} satisfies { [key in keyof typeof navigationRoutes]: unknown }

const mobiRoutesWithDeactivateGuards = Object.values(mobiRoutes).map(mobiRoute => {
  const canDeactivateGuards = Object.entries(mobiRoute.deactivateGuards ?? {})
    .map(([path, guard]) => {
      return (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
        if (nextState.url === path) {
          return guard(component, currentRoute, currentState, nextState);
        }
        return () => true;
      }
    })
  const originalCanDeactivate = mobiRoute.canDeactivate ?? []
  return ({...mobiRoute, canDeactivate: [...originalCanDeactivate, ...canDeactivateGuards]})
})

export const routes: Routes = Object.values(mobiRoutesWithDeactivateGuards);
