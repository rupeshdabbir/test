import React from 'react';
import PropTypes from 'prop-types';

import Ul from './UI';
import Wrapper from './Wrapper';

function MyTable(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    console.log("Props.items", props.items);
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

MyTable.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default MyTable;
