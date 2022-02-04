import { OPEN_BLACKBOX_SUCCESS } from '../../constants';

export interface LayoutState {
    blackboxIsOpened: boolean;
}

const initialState: LayoutState = {
    blackboxIsOpened: !!localStorage.getItem('pandorasBoxOpened') || false
};

export const layout = (state = initialState, action: any) => {
    switch (action.type) {
        case OPEN_BLACKBOX_SUCCESS:
            return {
                ...state,
                blackboxIsOpened: true
            };
        default:
            return {
                ...state
            };
    }
};
