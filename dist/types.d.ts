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

export { NavHeader };
