import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const StyledSelect = styled(Form.Select)`
  cursor: pointer;
  border-color: ${(props) => props.theme.quaternary};
  &:focus {
    border-color: ${(props) => props.theme.tertiary};
    box-shadow: 0 0 0 0.25rem ${(props) => props.theme.tertiary};
  }
`;

const StyledOption = styled.option`
  cursor: pointer;

  .option:hover {
    background-color: purple;
  }
  &:hover {
    color: ${(props) => props.theme.quaternary};
    background-color: ${(props) => props.theme.tertiary};
  }
  &:checked {
    background-color: ${(props) => props.theme.primary};
  }
`;

const DropdownTitle = styled(DropdownButton)`
  .dropdown-toggle {
    background-color: ${(props) => props.theme.special};
    border-color: ${(props) => props.theme.quaternary};
    width: 10rem;
  }
  .dropdown-toggle:active {
    background-color: ${(props) => props.theme.quaternary};
    border-color: ${(props) => props.theme.secondary};
  }
  .dropdown-menu {
    /* border-color: ${(props) => props.theme.primary}; */
    border-color: transparent ${(props) => props.theme.primary} ${(props) => props.theme.primary} ${(props) => props.theme.primary};
    border-radius: 0rem 0rem 1rem 1rem;
  }
`;
const DropdownItem = styled(Dropdown.Item)`
  .dropdown-item {
    background-color: ${(props) => props.theme.special};
  }
`;

const DropdownItemText = styled(Dropdown.ItemText)`
  color: ${(props) => props.theme.secondary};
  .dropdown-item-text {
    color: ${(props) => props.theme.secondary};
    --bs-dropdown-link-color: ${(props) => props.theme.secondary};
  }
`;

export const SelectDropdown = ({ disabled = false, options = [], type = "select", title = "", text = "", targets = [], onChange = () => {}, theme }) => {
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    function generateMenu() {
      const tempOptions = [];

      options.forEach((option, i) => {
        if (type == "select") {
          tempOptions.push(
            <StyledOption
              key={option}
              value={option}
              theme={theme}
            >
              {option}
            </StyledOption>
          );
        } else if (type == "dropdown") {
          tempOptions.push(
            <DropdownItem
              key={option}
              href={targets[i]}
              theme={theme}
            >
              {option}
            </DropdownItem>
          );
        }
      });

      setMenuOptions(tempOptions);
    }

    if (menuOptions.length === 0) {
      generateMenu();
    }
  }, [options, targets, type, menuOptions]);

  return (
    <>
      {type == "select" && (
        <StyledSelect
          onChange={onChange}
          theme={theme}
        >
          {menuOptions}
        </StyledSelect>
      )}{" "}
      {type == "dropdown" && (
        <DropdownTitle
          title={title}
          text={text}
          theme={theme}
        >
          {text.length > 0 && <DropdownItemText theme={theme}>{text}</DropdownItemText>}
          {menuOptions}
        </DropdownTitle>
      )}
    </>
  );
};

export default SelectDropdown;
