import { call, put, takeEvery } from "redux-saga/effects";
import * as DogConstants from "./constants";
import * as DogActions from "./actions";
import { getDogRequestAJAX } from "./service";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* workerSaga() {
  try {
    const response = yield call(getDogRequestAJAX);
    const dog = response.data.message;
    // yield put(DogActions.makeSuccess, dog);
    yield put({ type: DogConstants.API_CALL_SUCCESS, dog });
  } catch (error) {
    yield put({ type: DogConstants.API_CALL_FAILURE, error });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watcherSaga() {
  yield takeEvery(DogConstants.API_CALL_REQUEST, workerSaga);
}

export default watcherSaga;
