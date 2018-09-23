import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from '../constants';

import { loadRepos, reposLoaded, repoLoadingError } from '../actions';

describe('App Actions', () => {
  describe('Load Data', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_DATA,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('Data Loaded', () => {
    it('should return the correct type and the passed data', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_DATA_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('dataLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_DATA_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
