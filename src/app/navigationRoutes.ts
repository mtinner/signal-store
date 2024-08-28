import {LinkPaths} from "../types/Routes";


export const navigationRoutes  = {
  main: extendWithRouterLink({path: ''}),
  form: extendWithRouterLink({path: 'form'}),
  save: extendWithRouterLink({path: 'save'}),
} satisfies { [page: string]: LinkPaths }

function extendWithRouterLink<R extends { path: string }>(mobiRoute: R) {
  return {...mobiRoute, routerLink: toRouterLink(mobiRoute.path)};
}

function toRouterLink(path: string) {
  return `/${path}`;
}
