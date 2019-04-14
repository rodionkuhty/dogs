import * as DogConstants from "./constants";

export const makeRequest = () => ({
  type: DogConstants.API_CALL_REQUEST
});
export const makeSuccess = dog => ({
  type: DogConstants.API_CALL_SUCCESS,
  dog: dog
});

export const makeFail = error => ({
  type: DogConstants.API_CALL_FAILURE,
  error: error
});
