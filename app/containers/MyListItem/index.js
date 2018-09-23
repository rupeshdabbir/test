/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
import Labeler from './Labeler';


export class MyListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    let nameprefix = '';
    const content = (
      <Wrapper>
        <Labeler>
          <label>
            {nameprefix + item.id}
          </label>
        </Labeler>
        <Labeler>
          <label>
            {nameprefix + item.title}
          </label>
        </Labeler>
        <Labeler>
        <label>
          {nameprefix + item.body}
        </label>
        </Labeler>
      </Wrapper>
    );

    // Render the content into a list item
    return <ListItem key={`repo-list-item-${item.id}`} item={content} />;
  }
}

MyListItem.propTypes = {
  item: PropTypes.object
};

export default connect(
  createStructuredSelector({}),
)(MyListItem);
