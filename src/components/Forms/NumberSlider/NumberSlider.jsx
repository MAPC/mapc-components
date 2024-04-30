import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

const ControlContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const RangeControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;

  input.form-range {
    flex: 7;
  }
`;

const RangeValue = styled(Form.Control)`
  width: calc(4rem + ${(props) => String(props.max).length}ch) !important;
  margin-bottom: 0.75rem;
`;

const RangeTerminus = styled.div`
  flex: 1;
  padding-top: 4px;
  text-align: center;
`;

const Range = styled(Form.Range)`
  pointer-events: auto;
  /* Styling the slider thumb for WebKit browsers */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // Necessary to remove default styling
    appearance: none;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.theme.special}; // Green background
    border-radius: 50%; // Circular thumb
    cursor: pointer;
    transition: background-color 0.3s ease; // Smooth transition for hover effect
  }

  /* Styling the slider track for WebKit browsers */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background-color: ${(props) => props.theme.tertiary};
    border-radius: 4px;
  }
`;

const NumericControl = styled(InputGroup)`
  width: initial;
  /*
  width: fit-content;
  min-width: fit-content;
  max-width: fit-content;
  */
`;

const InputDecoration = styled(InputGroup.Text)`
  height: 100%;
`;

const RangeStep = styled(Button)`
  color: ${(props) => props.theme.special};
  border-color: ${(props) => props.theme.primary};
  :disabled {
    color: "#dee2e6";
    border-color: "#dee2e6";
  }
`;

export const NumberSlider = ({
  min = 0,
  max = 100,
  value = 0,
  disabled = false,
  percentage = false,
  onChange = () => {},
  theme,
  numericControl = true,
  stepButtons = true,
}) => {
  const [inputValue, setInputValue] = useState(Number(value));

  if (percentage) {
    max = 1;
  }

  function handleChange(data) {
    setInputValue(data);
    onChange(data);
  }

  return (
    <ControlContainer>
      <RangeControl>
        <RangeTerminus>{min}</RangeTerminus>

        {stepButtons && (
          <RangeStep
            variant="outline-primary"
            size="sm"
            disabled={disabled}
            onClick={(e) => {
              if (inputValue > min) {
                handleChange(Number(inputValue - 1));
              }
            }}
            theme={theme}
          >
            <CaretLeftFill size={20} />
          </RangeStep>
        )}

        <Range
          min={min}
          max={max}
          value={inputValue}
          disabled={disabled}
          step={max <= 1 ? "0.01" : "1"}
          onChange={(e) => {
            handleChange(Number(e.target.value));
          }}
          theme={theme}
        />
        {stepButtons && (
          <RangeStep
            disabled={disabled}
            variant="outline-primary"
            size="sm"
            onClick={(e) => {
              if (inputValue < max) {
                handleChange(Number(inputValue + 1));
              }
            }}
            theme={theme}
          >
            <CaretRightFill size={20} />
          </RangeStep>
        )}
        <RangeTerminus>{max}</RangeTerminus>
      </RangeControl>

      {numericControl && (
        <NumericControl size="sm">
          <InputDecoration>At least</InputDecoration>
          <RangeValue
            type="number"
            value={
              percentage
                ? (Number(inputValue) * 100).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })
                : Number(inputValue).toString()
            }
            disabled={disabled}
            max={max}
            min={min}
            onChange={(e) => {
              let newValue;
              if (percentage) {
                newValue = Number(e.target.value.replace(/%/g, "")) / 100;
              } else {
                newValue = Number(e.target.value);
              }
              if (newValue > max) {
                newValue = max;
              } else if (newValue < min) {
                newValue = min;
              }
              handleChange(newValue);
            }}
          />
          {percentage && <InputDecoration>%</InputDecoration>}
        </NumericControl>
      )}
    </ControlContainer>
  );
};

export default NumberSlider;
