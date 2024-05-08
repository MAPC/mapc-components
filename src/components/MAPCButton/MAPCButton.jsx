import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
  color: ${(props) => (props.main ? "" : props.theme.secondary)};
  background-color: ${(props) => (props.main ? props.theme.special : props.theme.primary)};
  border-color: ${(props) => (props.main ? props.theme.quaternary : props.theme.quaternary)};
  transform: ${(props) => (props.juice ? "scale(1.0)" : "")};

  &:hover {
    color: ${(props) => (props.main ? "" : props.theme.special)};
    background-color: ${(props) => (props.main ? props.theme.primary : props.juice ? props.theme.tertiary : props.theme.primary)};
    border-color: ${(props) => (props.main ? props.theme.quaternary : props.theme.quaternary)};
    transform: ${(props) => (props.juice ? "scale(1.025)" : "")};
  }
  &:active {
    color: ${(props) => (props.main ? "" : props.theme.special)}!important;
    background-color: ${(props) => (props.main ? props.theme.primary : props.theme.tertiary)} !important;
    border-color: ${(props) => (props.main ? props.theme.quaternary : props.theme.primary)} !important;
    transform: ${(props) => (props.juice ? "scale(0.95)" : "")};
  }
`;

export const MAPCButton = ({ text, disabled = false, juice = false, onClick = () => {}, main = false, theme }) => {
  return (
    <StyledButton
      onClick={onClick}
      theme={theme}
      juice={juice}
      main={main}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default MAPCButton;
