import { OPEN_BLACKBOX_REQUEST, OPEN_BLACKBOX_SUCCESS } from '../../constants';

export const openBlackboxRequest = () => ({
    type: OPEN_BLACKBOX_REQUEST
});

export const openBlackboxSuccess = () => ({
    type: OPEN_BLACKBOX_SUCCESS
})
