import React from "react";
import { NavHeaderProps } from "./NavHeader.types";
export declare const NavHeaderContainer: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export declare const TitleContainer: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
export declare const TitleLink: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
export declare const NavContainer: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react-bootstrap/esm/helpers").Omit<any, import("react-bootstrap/esm/helpers").BsPrefixProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>> & import("react-bootstrap/Nav").NavProps> & import("react-bootstrap/esm/helpers").BsPrefixProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>> & import("react-bootstrap/Nav").NavProps & {
    children?: React.ReactNode;
}, never>> & Omit<import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/Nav").NavProps> & {
    Item: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/NavItem").NavItemProps>;
    Link: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"a", import("react-bootstrap/esm/NavLink").NavLinkProps>;
}, keyof React.Component<any, {}, any>>;
export declare const NavLink: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react-bootstrap/esm/helpers").Omit<any, import("react-bootstrap/esm/helpers").BsPrefixProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>> & import("react-bootstrap/esm/NavLink").NavLinkProps> & import("react-bootstrap/esm/helpers").BsPrefixProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>> & import("react-bootstrap/esm/NavLink").NavLinkProps & {
    children?: React.ReactNode;
}, never>> & Omit<import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"a", import("react-bootstrap/esm/NavLink").NavLinkProps>, keyof React.Component<any, {}, any>>;
export declare const NavHeader: React.FC<NavHeaderProps>;
export default NavHeader;
