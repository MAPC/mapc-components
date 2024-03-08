import React from 'react';

interface NavHeaderProps {
    title?: Route;
    routes?: Route[];
}
interface Route {
    key: string;
    path: string;
    label: string;
}

declare const NavHeader: React.FC<NavHeaderProps>;

interface RouterNavHeaderProps {
    indexRoute: IndexRoute;
}
interface IndexRoute {
    id: string;
    path: string;
    handle?: RouteHandle;
    children?: ChildRoute[];
}
interface ChildRoute {
    id: string;
    path: string;
    handle?: RouteHandle;
}
interface RouteHandle {
    label?: string;
}

declare const RouterNavHeader: React.FC<RouterNavHeaderProps>;

export { NavHeader, RouterNavHeader };
