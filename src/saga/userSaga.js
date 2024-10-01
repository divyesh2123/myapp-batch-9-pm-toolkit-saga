import {call, delay, put, takeLatest} from 'redux-saga/effects'
import { UserError, UserRequest, UserSuc } from '../slice/userslice'
import { getUser } from '../service/userservice'
 function* userasnyc()
 {

    try
    {
  let d=  yield call(getUser);

  yield put(UserSuc(d));

    }
    catch(error)
    {
        yield put(UserError(error));
    }
  

 }

export function* userwatcher()
{
    yield takeLatest(UserRequest().type,userasnyc)

}