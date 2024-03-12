import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { NavHeaderProps } from "./NavHeader.types";

export const NavHeaderContainer = styled.header`
  background-color: #fbfffe;
  padding: 0.5rem 2.5rem;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 1px 20px 1px #2b3b5e;
  border-bottom: 1px solid #adb5bd;

  a,
  a:visited,
  a:hover {
    color: #635c7b;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const TitleContainer = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  max-width: fit-content;
  height: 2rem;
`;

export const TitleLink = styled.h1`
  font-size: 1.5rem;
  font-family: sans-serif;
  margin-bottom: 0px;
  margin-top: 0.32rem;
  font-weight: bold;
  line-height: 0.78rem;
`;

export const NavContainer = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const NavLink = styled(Nav.Link)`
  font-family: sans-serif;
`;

export const NavHeader: React.FC<NavHeaderProps> = ({
  title = {
    key: "",
    path: "/",
    label: "",
  },
  routes = [],
  ...props
}) => {
  return (
    <NavHeaderContainer>
      <LinkContainer to={title.path}>
        <TitleContainer>
          <TitleLink>{title.label}</TitleLink>
        </TitleContainer>
      </LinkContainer>
      <NavContainer variant="underline">
        {routes.map((route) => (
          <Nav.Item key={route.key}>
            <LinkContainer to={route.path}>
              <NavLink eventKey={route.key}>{route.label}</NavLink>
            </LinkContainer>
          </Nav.Item>
        ))}
      </NavContainer>
    </NavHeaderContainer>
  );
};

export default NavHeader;
