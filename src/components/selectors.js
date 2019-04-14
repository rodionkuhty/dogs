import { createSelector } from "reselect";
import { getDogRequestAJAX } from "./service";

const dogSelector = state => state.dog;
// const statusSelector = state => state.loaded;

const getDog = createSelector(
  dogSelector,
  dog => dog
);

export default getDog;
