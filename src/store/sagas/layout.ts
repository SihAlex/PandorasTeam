import { fork, put, takeLatest } from 'redux-saga/effects';
import { OPEN_BLACKBOX_REQUEST } from '../../constants';
import { openBlackboxSuccess } from '../actions';

function* openBlackboxWorkerSaga(action: any) {
    localStorage.setItem('pandorasBoxOpened', '1');
    yield put(openBlackboxSuccess());
}

function* openBlackboxWatcherSaga() {
    yield takeLatest(OPEN_BLACKBOX_REQUEST, openBlackboxWorkerSaga);
}

export const layoutSagas = [fork(openBlackboxWatcherSaga)];
