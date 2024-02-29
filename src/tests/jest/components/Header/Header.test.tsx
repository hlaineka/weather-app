import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../../components/Header';

describe('Header component', () => {
  test('should render component properly', () => {
    // when
    const componentRenderer = renderer.create(<Header />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
