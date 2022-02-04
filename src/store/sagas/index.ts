import { layoutSagas } from './layout';
import { all } from 'redux-saga/effects';

export default function* rootSaga(): Generator<any> {
    yield all([...layoutSagas]);
}
