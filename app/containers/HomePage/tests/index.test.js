/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ReposList from 'components/ReposList';
import { HomePage, mapDispatchToProps } from '../index';
// import { changeUsername } from '../actions';
import { loadRepos } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the page with default contents', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />,
    );
    expect(
      renderedComponent.contains(
        <ReposList loading error={false} repos={[]} />,
      ),
    ).toEqual(true);
  });

  it('should call onSubmitForm when form is submitted', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage onSubmitForm={submitSpy} />
      </IntlProvider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadResult(loadrepos) when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
