import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

import * as style_theme from "../../themes/styles";

const TextControl = styled(FormControl)``;

export const TextInput = ({
  text,
  readOnly = false,
  type = "text",
  disabled = false,
  isValid = true,
  isInvalid = false,
  onChange = () => {},
  numericOnly = true,
}) => {
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
      />
    </>
  );
};

export default TextInput;
