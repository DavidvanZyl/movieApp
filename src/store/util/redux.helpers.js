export const createReducer = (
  initialState = {},
  actionHandlerKeyFuncs = {}
) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type]; // Get the appropriate function
    return actionHandler ? actionHandler(state, action) : state; // If it exists, apply it or return the state as is
  };
};

const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps
  };
};

export const createAsyncAction = (
  actionType,
  asyncRequestFn,
  requestParams
) => {
  return dispatch => {
    dispatch(createAction(`${actionType}_START`, { request: requestParams }));
    // NOTE: asyncRequestFn must accept single object parameter
    return asyncRequestFn(requestParams).then(response => {
      response
        .json()
        .then(json =>
          dispatch(createAction(`${actionType}_SUCCESS`, { response: json }))
        )
        .catch(error =>
          dispatch(createAction(`${actionType}_ERROR`, { error }))
        );
    });
  };
};

const initialAsyncState = { isLoading: false, response: null, request: null };

export const createAsyncReducer = (
  actionType,
  actionHandlerKeyFuncs = {},
  initialState = initialAsyncState
) => {
  const startReducerFn = (state, action) => ({
    ...state,
    isLoading: true,
    request: action.request
  });

  const successReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    response: action.response
  });
  const errorReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  });

  return createReducer(initialState, {
    [`${actionType}_START`]: startReducerFn,
    [`${actionType}_SUCCESS`]: successReducerFn,
    [`${actionType}_ERROR`]: errorReducerFn,
    ...actionHandlerKeyFuncs
  });
};
