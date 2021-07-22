import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
