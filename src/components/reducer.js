import * as DogConstants from "./constants";

const initState = {
  dog: null,
  loaded: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case DogConstants.API_CALL_REQUEST:
      return { ...state, loaded: true };
    case DogConstants.API_CALL_SUCCESS:
      return { ...state, dog: action.dog, loaded: false };
    case DogConstants.API_CALL_FAILURE:
      return { ...state, dog: null, loaded: false, error: action.error };
    default:
      return state;
  }
};
