/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ListItem from 'components/ListItem';
import { MyListItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <MyListItem {...props} />
    </IntlProvider>,
  );

describe('<MyListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      html_url: 'https://jsonplaceholder.typicode.com/posts'
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<MyListItem item={item} />);
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should render the collection of list name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });

});
