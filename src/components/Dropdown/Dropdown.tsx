import React, { useState } from 'react';
import styled from 'styled-components';
import Chevron from './Chevron';
import { options, Option } from './variables';
import { CONTENT_WIDTH, SPACING, palette } from '../variables';

type Props = {
  setDropdownSelection: (selected: Option) => void;
  dropdownSelection: Option;
};

export const Dropdown: React.FC<Props> = ({
  setDropdownSelection,
  dropdownSelection,
}) => {
  const [isDropdownMenuVisible, setDropdownMenuVisible] = useState(false);

  const toggleDropdownMenu = () => {
    setDropdownMenuVisible(!isDropdownMenuVisible);
  };

  const namespace = 'cities';
  const value = dropdownSelection;

  return (
    <DropdownContainer>
      <DropdownButton
        onClick={toggleDropdownMenu}
        role="combobox"
        aria-haspopup="listbox"
        aria-controls={`${namespace}_dropdown`}
        aria-labelledby={`${namespace}_label`}
        aria-expanded={isDropdownMenuVisible}
        aria-activedescendant={`${namespace}_element_${value.value}`}
      >
        {value.label}
        {isDropdownMenuVisible ? (
          <Chevron variant="up" color="black" />
        ) : (
          <Chevron variant="down" color="black" />
        )}
      </DropdownButton>
      {isDropdownMenuVisible && (
        <DropdownMenu>
          <ul
            className="select-dropdown"
            role="listbox"
            id={`${namespace}_dropdown`}
            tabIndex={-1}
            aria-multiselectable={false}
          >
            {options.map(
              (option: Option) =>
                option &&
                option.label && (
                  <li
                    key={option.value}
                    className={`${namespace}_element_${option.value}`}
                    id={`${namespace}_element_${option.value}`}
                    aria-selected={option.value === value.value}
                    role="option"
                    onClick={() => {
                      setDropdownSelection(option);
                      toggleDropdownMenu();
                    }}
                  >
                    <label key={option.value}>{option.label}</label>
                  </li>
                ),
            )}
          </ul>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: inline-block;
  height: fit-content;
  position: relative;
  width: 100%;
`;

const DropdownMenu = styled.div`
  background-color: white;
  border: 1px solid ${palette.greyBorder};
  box-sizing: border-box;
  font-family: 'Arial';
  font-size: 13px;
  max-width: ${CONTENT_WIDTH};
  padding-bottom: calc((${SPACING} / 2) - 3px);
  padding-top: calc(${SPACING} / 2);
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 1;

  ul {
    list-style-type: none;
    margin: 0;
    max-width: ${CONTENT_WIDTH};
    padding: 0;

    li {
      margin-bottom: 2px;
      max-width: ${CONTENT_WIDTH};
      padding-left: ${SPACING};
      padding-right: ${SPACING};

      &[aria-selected='true'] {
        background: ${palette.blueBackground};
      }
    }
  }
`;

const DropdownButton = styled.button`
  align-items: center;
  background-color: white;
  border: 1px solid ${palette.greyBorder};
  box-sizing: border-box;
  color: inherit;
  display: flex;
  flex-direction: row;
  font-family: 'Arial';
  font-size: 13px;
  justify-content: space-between;
  line-height: 13px;
  max-width: ${CONTENT_WIDTH};
  padding-bottom: ${SPACING};
  padding-left: ${SPACING};
  padding-right: ${SPACING};
  padding-top: ${SPACING};
  text-align: left;
  width: 100%;

  &:hover + & {
    display: inline-block;
  }
`;
