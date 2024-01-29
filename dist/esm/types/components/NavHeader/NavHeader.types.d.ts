export interface NavHeaderProps {
    title?: Route;
    routes?: Route[];
}
export interface Route {
    key: string;
    path: string;
    label: string;
}
