import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

import * as style_theme from "../../themes/styles";

const TextControl = styled(FormControl)`
  border-color: ${(props) => {
    return props.theme.special;
  }};
  color: ${(props) => {
    return props.theme.primary || "#000000";
  }};
`;

export const TextInput = ({ text, readOnly = false, type = "text", disabled = false, isValid = true, isInvalid = false, onChange = () => {}, theme }) => {
  // function proxyHandler(event){
  //     if(numericOnly && event.target.value == nu){

  //     }
  // }
  return (
    <>
      <TextControl
        placeholder={text}
        readOnly={readOnly}
        type={type}
        disabled={disabled}
        isValid={isValid}
        isInvalid={isInvalid}
        onChange={onChange}
        theme={theme}
      />
    </>
  );
};

export default TextInput;
