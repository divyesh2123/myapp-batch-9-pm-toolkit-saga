import {delay, put, takeLatest} from 'redux-saga/effects'
import { dec, inc } from '../slice/counterslice';

function* asyccounter()
{

    yield delay(4000);

    yield put(inc())

}

export function* watcherCounter()
{
    yield takeLatest('Counter_Asnyc_INC',asyccounter)

}

function* asycDecrement()
{

    yield delay(4000);

    yield put(dec())

}

export function* watcherDec()
{
    yield takeLatest('Counter_Asnyc_DEC',asycDecrement)

}