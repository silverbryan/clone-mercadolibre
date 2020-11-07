import {
    TOGGLE_NAVBAR_MENU,
} from '../constants';

const initialState = {
    toggleNavbar: false,
}

function applicationPropertiesReducers(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_NAVBAR_MENU:
            return {
                ...state,
                toggleNavbar: !state.toggleNavbar,
            }
        default:
            return state;
    }
}

export default applicationPropertiesReducers;