import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';
import Header from './Header';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;
  let headerMain = <div />;

  const header = {
    body: 'Body (Content) from the API',
    id : 'ID',
    title: 'Title from the given API',
    userId: 'ID'
  }

  // If we have items, render them
  if (props.items) {
    // props.items.unshift(header);
    console.log("Props.items", props.items);
    console.log(Array.isArray(props.items));
    headerMain = <ComponentToRender key={`item-0`} item={header} />
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Header>{headerMain}</Header>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
