import React, { useState } from 'react'
import styled from "styled-components";
import { Chevron } from './Chevron';
import { options, Option } from './variables';
import { CONTENT_WIDTH, palette } from '../variables';

type Props = {
    setDropdownSelection: (selected: Option) => void;
    dropdownSelection: Option;
};

export const Dropdown: React.FC<Props> = ({
    setDropdownSelection, dropdownSelection
}) => {
    const [isDropdownMenuVisible, setDropdownMenuVisible] = useState(false);

    const toggleDropdownMenu = () => {
        setDropdownMenuVisible(!isDropdownMenuVisible)
    }

    const namespace = "cities";
    const value = dropdownSelection;

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdownMenu} role="combobox"
                aria-haspopup="listbox"
                aria-controls={`${namespace}_dropdown`}
                aria-labelledby={`${namespace}_label`}
                aria-expanded={isDropdownMenuVisible}
                aria-activedescendant={`${namespace}_element_${value.value}`}>
                {value.label}
                { isDropdownMenuVisible ? <Chevron variant='up' color="black" /> : <Chevron variant='down' color="black" />}
            </DropdownButton>
            {isDropdownMenuVisible && (
                <DropdownMenu>
                    <ul className="select-dropdown"
                        role="listbox"
                        id={`${namespace}_dropdown`}
                        tabIndex={-1}
                        aria-multiselectable={false}>
                        {options.map((option: Option) => (
                            option && option.label &&
                            <li key={option.value} id={`${namespace}_element_${option.value}`}
                                aria-selected={option.value === value.value}
                                role="option" onClick={() => {
                                    setDropdownSelection(option);
                                    toggleDropdownMenu();
                                }}>
                                <label key={option.value}>
                                    {option.label}
                                </label>
                            </li>
                        ))}
                    </ul>
                </DropdownMenu>
            )}
        </DropdownContainer>
    )
};

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: fit-content;
`

const DropdownMenu = styled.div`
  background-color: white;
  position: absolute;
  padding-top: 10pt;
  padding-bottom: 8pt;
  right: 0;
  z-index: 1;
  border: 1px solid ${palette.greyBorder};
  width: 100%;
  max-width: ${CONTENT_WIDTH};
  box-sizing: border-box;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-width: ${CONTENT_WIDTH};

    li {
        padding-left: 10pt;
        padding-right: 10pt;
        max-width: ${CONTENT_WIDTH};
        margin-bottom: 2pt;
        &[aria-selected=true] {
            background: ${palette.blueBackground};
          }
    }
  }

`

const DropdownButton = styled.button`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
  background-color: white;
  border: 1px solid ${palette.greyBorder};
  color: inherit;
  font-size: 13pt;
  padding: 10pt;
  line-height: 13pt;
  width: 100%;
  max-width: ${CONTENT_WIDTH};
  text-align: left;
  box-sizing: border-box;

  &:hover + & {
    display: inline-block;
  }
`