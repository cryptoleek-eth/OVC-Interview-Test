import { ActionType } from '../action-types';
import { Action } from '../actions';
import { User } from '../domainTypes';

interface UsersState {
  loading: boolean;
  error: string | null;
  data: User[];
}

export const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: UsersState = initialState,
  action: Action
): UsersState => {
  switch (action.type) {
    case ActionType.SEARCH_USERS:
      const name = action.payload;

      let result : User[] = [];
      if (state.data.length > 0) {
        result = state.data.filter((user) => {
          return user.name.toLowerCase().includes(name.toLowerCase())
        });
      }

      return { loading: false, error: null, data: result };
    case ActionType.FETCH_USERS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
