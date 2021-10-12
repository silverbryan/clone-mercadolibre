import {
    TOGGLE_NAVBAR_MENU,
    TOGGLE_MODAL,
    MODAL_CONDITION,
    MODAL_PRICE,
    LOADING,
    LOADING_CATEGORIES,
    LOADING_PRODUCT,
} from '../constants';

const initialState = {
    toggleNavbar: false,
    toggleModal: false,
    isLoading: true,
    isLoadingCategories: true,
    isLoadingProduct: true,
    modalContent: {
        name: '',
        children: []
    }
}

function applicationPropertiesReducers(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_NAVBAR_MENU:
            return {
                ...state,
                toggleNavbar: !state.toggleNavbar,
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                toggleModal: !state.toggleModal,
            }
        case MODAL_CONDITION:
            return {
                ...state,
                modalContent: action.payload,
            }
        case MODAL_PRICE:
            return {
                ...state,
                modalContent: action.payload,
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case LOADING_CATEGORIES:
            return {
                ...state,
                isLoadingCategories: action.payload,
            }
        case LOADING_PRODUCT:
            return {
                ...state,
                isLoadingProduct: action.payload,
            }
        default:
            return state;
    }
}

export default applicationPropertiesReducers;