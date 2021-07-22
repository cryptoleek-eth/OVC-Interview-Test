import reducer from '../usersReducer'
import { initialState } from '../usersReducer'
import { Action } from '../../actions';
import { ActionType } from '../../action-types';

test('ActionType.FETCH_USERS Should return correct state', () => {
  const action : Action = {
      type: ActionType.FETCH_USERS,
    }
  const newState = reducer(initialState, action);

  expect(newState.loading).toBe(true)
  expect(newState.data).toStrictEqual([])
  expect(newState.error).toBe(null)
});

test('ActionType.FETCH_USERS_ERROR Should return correct state', () => {
  const action : Action = {
      type: ActionType.FETCH_USERS_ERROR,
      payload: 'sth is wrong'
    }
  const newState = reducer(initialState, action);

  expect(newState.loading).toBe(false)
  expect(newState.data).toStrictEqual([])
  expect(newState.error).toBe('sth is wrong')
});

test('ActionType.FETCH_USERS Should return correct state', () => {
  const user = {id: 1, name: 'name', email: "email", city: "city", company: "company"}
  const action : Action = {
      type: ActionType.FETCH_USERS_SUCCESS,
      payload: [user]
    }
  const newState = reducer(initialState, action);

  expect(newState.loading).toBe(false)
  expect(newState.data).toStrictEqual([user])
  expect(newState.error).toBe(null)
});




