import reducer from '../postsReducer'
import {initialState} from '../postsReducer'
import { Action } from '../../actions';
import { ActionType } from '../../action-types';

test('ActionType.FETCH_POSTS Should return correct state', () => {
  const action : Action = {
      type: ActionType.FETCH_POSTS,
    }
  const newState = reducer(initialState, action);

  expect(newState.loading).toBe(true)
  expect(newState.data).toStrictEqual([])
  expect(newState.error).toBe(null)
});

test('ActionType.FETCH_POSTS_ERROR Should return correct state', () => {
  const action : Action = {
      type: ActionType.FETCH_POSTS_ERROR,
      payload: 'sth is wrong'
    }
  const newState = reducer(initialState, action);

  expect(newState.loading).toBe(false)
  expect(newState.data).toStrictEqual([])
  expect(newState.error).toBe('sth is wrong')
});

test('ActionType.FETCH_POSTS Should return correct state', () => {
  const post = {id: 1, userId: 2, title: "This is title", body: "This is body"}
  const action : Action = {
      type: ActionType.FETCH_POSTS_SUCCESS,
      payload: {
        author: "seabook",
        posts:[post]
      }
    }
  const newState = reducer(initialState, action);

  expect(newState.loading).toBe(false)
  expect(newState.data).toStrictEqual([post])
  expect(newState.error).toBe(null)
});




