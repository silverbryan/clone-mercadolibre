import {
    TOGGLE_MODAL,
    TOGGLE_NAVBAR_MENU,
    MODAL_PRICE,
    MODAL_CONDITION,
    PRECIO_MEDIO,
    PRECIO_REGULAR,
    FILTER_LOW_PRICE,
    FILTER_HIGH_PRICE,
    FILTER_NEW,
    FILTER_USED,
    FILTER_PRICE,
} from '../constants';

export const toggleNavbarMenu = () => {
    return {
        type: TOGGLE_NAVBAR_MENU,
    }
}

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL,
    }
}

export const setModalPrice = () => {
    return {
        type: MODAL_PRICE,
        payload: {
            type: MODAL_PRICE,
            name: 'Filtrar por precio',
            children: [
                {
                    id: PRECIO_MEDIO,
                    name: 'Hasta $3000'
                }, {
                    id: PRECIO_REGULAR,
                    name: 'Mas de $5000'
                }, {
                    id: FILTER_LOW_PRICE,
                    name: 'Precio Mas Bajo',
                }, {
                    id: FILTER_HIGH_PRICE,
                    name: 'Precio Mas Alto',
                }]
        }
    }
}

export const setModalCondition = () => {
    return {
        type: MODAL_CONDITION,
        payload: {
            type: MODAL_CONDITION,
            name: 'Filtrar por condicion',
            children: [
                {
                    id: FILTER_NEW,
                    name: 'Nuevo',
                }, {
                    id: FILTER_USED,
                    name: 'Usado',
                }]
        }
    }
}

export const filterByPrice = () => {
    return {
        type: FILTER_PRICE,
        payload: PRECIO_REGULAR,
    }
}

export const filterByMediumPrice = () => {
    return {
        type: FILTER_PRICE,
        payload: PRECIO_MEDIO,
    }
}