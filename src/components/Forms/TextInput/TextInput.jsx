import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

import * as style_theme from "../../themes/styles";

const TextControl = styled(FormControl)`
  border-color: ${(props) => (props.disabled ? props.theme.disabled.special : props.theme.special)};
  color: ${(props) => {
    return props.theme.primary || "#000000";
  }};
`;

export const TextInput = ({ text, readOnly = false, type = "text", disabled = false, isValid = false, isInvalid = false, onChange = () => {}, theme }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <TextControl
        placeholder={text}
        value={value}
        readOnly={readOnly}
        type={type}
        disabled={disabled}
        isValid={isValid}
        isInvalid={isInvalid}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        theme={theme}
      />
    </>
  );
};

export default TextInput;
