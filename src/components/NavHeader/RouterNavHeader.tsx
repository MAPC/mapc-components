import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {RouterNavHeaderProps} from "./RouterNavHeader.types";
import {NavHeaderProps} from "./NavHeader.types";
import {NavHeader} from "./NavHeader";

export const RouterNavHeader: React.FC<RouterNavHeaderProps> = ({indexRoute, ...props}) => {
  const childRoutes = indexRoute.children || [];
  const navHeaderProps: NavHeaderProps = {
    title: {
      key: indexRoute.id,
      path: indexRoute.path,
      label: indexRoute.handle?.label || "",
    },
    routes: childRoutes.map((childRoute) => {
      return {
        key: childRoute.id,
        path: childRoute.path,
        label: childRoute.handle?.label || "",
      };
    }),
  };
  return (
    <NavHeader
      title={navHeaderProps.title}
      routes={navHeaderProps.routes}
    />
  );
};

export default RouterNavHeader;
