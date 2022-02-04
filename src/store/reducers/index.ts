import { layout, LayoutState } from './layout';
import { combineReducers } from 'redux';

export interface RootState {
    layout: LayoutState;
}

const rootReducer = combineReducers({ layout });

export default rootReducer;
