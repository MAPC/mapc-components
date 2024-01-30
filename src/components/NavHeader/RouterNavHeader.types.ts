export interface RouterNavHeaderProps {
  indexRoute: IndexRoute;
}

export interface IndexRoute {
  id: string;
  path: string;
  handle?: RouteHandle;
  children?: ChildRoute[];
}

export interface ChildRoute {
  id: string;
  path: string;
  handle?: RouteHandle;
}

export interface RouteHandle {
  label?: string;
}
