import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Post } from '../domainTypes';

interface PostsState {
  loading: boolean;
  error: string | null;
  author: string;
  data: Post[];
}

export const initialState = {
  loading: false,
  error: null,
  author: '',
  data: [],
};

const reducer = (
  state: PostsState = initialState,
  action: Action
): PostsState => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, error: null, author: action.payload.author , data: action.payload.posts };
    case ActionType.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
