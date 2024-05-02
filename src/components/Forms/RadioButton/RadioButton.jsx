import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const StyledRadio = styled(Form.Check)`
  color: ${(props) => props.theme.secondary};
  .form-check-input:checked {
    background-color: ${(props) => props.theme.special || "#0d6efd"};
    border-color: ${(props) => props.theme.tertiary || "#0d6efd"};
  }

  .form-check-input:focus {
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.tertiary};
  }

  // Custom color for the border and background of the checkbox
  .form-check-input {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.tertiary || "#ced4da"};
  }
`;

export const RadioButton = ({ label = [], type = "radio", theme, onChange = () => {}, disabled = false }) => {
  return (
    <StyledRadio
      type={type}
      id={label}
      label={label}
      theme={theme}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled}
    />
  );
};

export default RadioButton;
