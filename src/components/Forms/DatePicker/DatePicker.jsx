import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";

import * as style_theme from "../../themes/styles";

const StyledDatePicker = styled(Form.Control)`
  width: 14rem;
  color: ${(props) => props.theme.secondary};
  &:focus {
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.tertiary};
  }
  .form-control {
    color: ${(props) => props.theme.secondary};
  }
`;

export const DatePicker = ({ text, date, validate = () => {}, onChange = () => {}, theme }) => {
  const [dateValue, setDateValue] = useState(date ? new Date(date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0]);
  console.log(dateValue);
  return (
    <StyledDatePicker
      name={text}
      placeholder={text}
      value={dateValue}
      type="date"
      theme={theme}
      onChange={(e) => {
        setDateValue(e.target.value);
        onChange(e.target.value);
      }}
      isValid={validate(dateValue)}
    />
  );
};

export default DatePicker;
