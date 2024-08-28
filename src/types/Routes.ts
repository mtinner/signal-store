import {CanDeactivateFn, Route} from "@angular/router";
import {Type} from "@angular/core";

export type MobiRoute<Component = unknown> = Route & {
  component: Type<Component>;
  deactivateGuards?: { [path: string]: CanDeactivateFn<Component> };
  path: Pick<Route, 'path'>;
  routerLink: string;
};

export type LinkPaths = { path: string, routerLink: string };
