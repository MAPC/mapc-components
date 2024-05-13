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
  color: ${(props) => props.theme.secondary};
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

const RangeWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 7;
  margin-bottom: 1rem;
`;

const Range = styled.input.attrs({ type: "range" })`
  flex: 1;
  width: 100%;
  pointer-events: auto;
  position: absolute;
  -webkit-appearance: none; // Necessary to remove default styling
  appearance: none;
  height: 8px;
  border-radius: 4px;

  background-color: ${(props) => (props.slider ? props.theme.tertiary : "transparent")};
  /* Styling the slider thumb for WebKit browsers */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // Necessary to remove default styling
    appearance: none;
    height: 20px;
    width: 20px;
    position: relative;
    top: -6px;
    z-index: 10;

    pointer-events: auto;
    background: ${(props) => (props.disabled ? props.theme.disabled.special : props.theme.special)};
    border-radius: 50%; // Circular thumb
    cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
    transition: background-color 0.3s ease; // Smooth transition for hover effect
  }
  &::-moz-range-thumb {
    -moz-appearance: none; // Necessary to remove default styling
    appearance: none;
    height: 20px;
    width: 20px;
    position: relative;
    top: -6px;
    z-index: 10;

    pointer-events: auto;
    background: ${(props) => (props.disabled ? props.theme.disabled.special : props.theme.special)};
    border-radius: 50%; // Circular thumb
    border-color: ${(props) => (props.disabled ? props.theme.disabled.primary : props.theme.primary)};
    cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
    transition: background-color 0.3s ease; // Smooth transition for hover effect
  }
  /* Styling the slider track for WebKit browsers */
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none; // Necessary to remove default styling
    appearance: none;
    width: 100%;
    height: 8px;
    border: none;

    border-radius: 4px;
    pointer-events: none !important;
    background-color: ${(props) => (props.slider ? (props.disabled ? props.theme.disabled.primary : props.theme.tertiary) : "transparent")};
  }
  &::-moz-range-track {
    -moz-appearance: none; // Necessary to remove default styling
    appearance: none;
    width: 100%;
    height: 8px;
    border: none;

    border-radius: 4px;
    pointer-events: none !important;
    background-color: ${(props) => (props.slider ? (props.disabled ? props.theme.disabled.primary : props.theme.tertiary) : "transparent")};
  }
`;

const NumericControl = styled(InputGroup)`
  .input-group-text {
    color: ${(props) => props.theme.secondary};
  }

  width: initial;
  /*
  width: fit-content;
  min-width: fit-content;
  max-width: fit-content;
  */
`;

const InputDecoration = styled(InputGroup.Text)`
  .form-control {
    color: ${(props) => props.theme.secondary};
  }
  height: 100%;
`;

export const MultiThumbSlider = ({
  min = 0,
  max = 100,
  leftValue = 0,
  rightValue = 100,
  disabled = false,
  percentage = false,
  onChange = () => {},
  theme,
  numericControl = true,
  step = 1,
}) => {
  const [leftInputValue, setLeftInputValue] = useState(Number(leftValue));
  const [rightInputValue, setRightInputValue] = useState(Number(rightValue));

  if (percentage) {
    max = 1;
  }

  function handleChange(data) {
    onChange(data);
  }

  return (
    <ControlContainer theme={theme}>
      <RangeControl>
        <RangeTerminus>{min}</RangeTerminus>

        <RangeWrapper>
          <Range
            type="range"
            min={min}
            max={max}
            value={rightInputValue}
            disabled={disabled}
            step={max <= 1 ? "0.01" : step}
            onChange={(e) => {
              if (Number(e.target.value) > leftInputValue) {
                setRightInputValue(Number(e.target.value));
                handleChange(Number(e.target.value));
              }
            }}
            slider
            theme={theme}
          />
          <Range
            type="range"
            min={min}
            max={max}
            value={leftInputValue}
            disabled={disabled}
            step={max <= 1 ? "0.01" : step}
            onChange={(e) => {
              if (Number(e.target.value) < rightInputValue) {
                setLeftInputValue(Number(e.target.value));
                handleChange(Number(e.target.value));
              }
            }}
            slider={false}
            theme={theme}
          />
        </RangeWrapper>

        <RangeTerminus>{max}</RangeTerminus>
      </RangeControl>

      {numericControl && (
        <NumericControl
          size="sm"
          theme={theme}
        >
          <InputDecoration theme={theme}>At least</InputDecoration>
          <RangeValue
            type="number"
            value={
              percentage
                ? (Number(leftInputValue) * 100).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })
                : Number(leftInputValue).toString()
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
          <InputDecoration theme={theme}>At most</InputDecoration>
          <RangeValue
            type="number"
            value={
              percentage
                ? (Number(rightInputValue) * 100).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })
                : Number(rightInputValue).toString()
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
          {percentage && <InputDecoration theme={theme}>%</InputDecoration>}
        </NumericControl>
      )}
    </ControlContainer>
  );
};

export default MultiThumbSlider;
