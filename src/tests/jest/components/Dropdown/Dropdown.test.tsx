import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Dropdown from '../../../../components/Dropdown';
import { Option } from '../../../../components/Dropdown/variables';

describe('Dropdown:', () => {
  describe('Rendering:', () => {
    test('should render closed dropdown menu properly', () => {
      //given
      let dummySelected = {
        value: 'tampere',
        label: 'Tampere',
        lat: 0,
        lng: 0,
      };
      const dummyHandlesetDropdownSelection = (selected: Option) => {
        dummySelected = selected;
      };
      const dummyComponentProps = {
        setDropdownSelection: dummyHandlesetDropdownSelection,
        dropdownSelection: dummySelected,
      };

      // when
      const componentRenderer = renderer.create(
        <Dropdown {...dummyComponentProps} />,
      );
      const tree = componentRenderer.toJSON();

      // then
      expect(tree).toMatchSnapshot();
    });
  });
  test('should render open dropdown menu properly', () => {
    //given
    let dummySelected = {
      value: 'tampere',
      label: 'Tampere',
      lat: 0,
      lng: 0,
    };
    const dummyHandlesetDropdownSelection = (selected: Option) => {
      dummySelected = selected;
    };
    const dummyComponentProps = {
      setDropdownSelection: dummyHandlesetDropdownSelection,
      dropdownSelection: dummySelected,
    };

    // when
    const componentRenderer = renderer.create(
      <Dropdown {...dummyComponentProps} />,
    );

    act(() => {
      componentRenderer.root.findByType('button').props.onClick();
    });
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });

  describe('Selecting:', () => {
    test('should select Espoo properly', async () => {
      //given
      let dummySelected = {
        value: 'tampere',
        label: 'Tampere',
        lat: 0,
        lng: 0,
      };
      const dummyHandlesetDropdownSelection = (selected: Option) => {
        dummySelected = selected;
      };
      const dummyComponentProps = {
        setDropdownSelection: dummyHandlesetDropdownSelection,
        dropdownSelection: dummySelected,
      };

      // when
      const componentRenderer = renderer.create(
        <Dropdown {...dummyComponentProps} />,
      );

      await act(async () => {
        componentRenderer.root.findByType('button').props.onClick();
      });

      await act(async () => {
        componentRenderer.root
          .findByProps({ className: 'cities_element_espoo' })
          .props.onClick();
      });

      const tree = componentRenderer.toJSON();

      // then
      expect(tree).toMatchSnapshot();
      expect(dummySelected.label).toBe('Espoo');
    });
  });
});
