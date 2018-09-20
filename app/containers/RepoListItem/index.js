/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export class RepoListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    // if (item.owner.login !== this.props.currentUser) {
    //   nameprefix = `${item.owner.login}/`;
    // }

    // Put together the content of the repository
    // const content = (
    //   <Wrapper>
    //     <RepoLink href={item.html_url} target="_blank">
    //       {nameprefix + item.name}
    //     </RepoLink>
    //     <IssueLink href={`${item.html_url}/issues`} target="_blank">
    //       <IssueIcon />
    //       <FormattedNumber value={item.open_issues_count} />
    //     </IssueLink>
    //   </Wrapper>
    // );


    const content = (
      <Wrapper>
        {/* <RepoLink href="#">
          {nameprefix + item.id}
        </RepoLink> */}
        <RepoLink href="#">
          {nameprefix + item.title}
        </RepoLink>
        <label href="#">
          {nameprefix + item.body}
        </label>
      </Wrapper>
    );

    // Render the content into a list item
    // return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
    return <ListItem key={`repo-list-item-${item.id}`} item={content} />;
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
