import { all } from "redux-saga/effects";
import { watcherCounter, watcherDec } from "./counterSaga";
import { userwatcher } from "./userSaga";

export function* rootSaga()
{

    yield all([watcherCounter(),watcherDec(),userwatcher()])
}