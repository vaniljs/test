import {OPEN_MODAL, CLOSE_MODAL, CHECK_THE_PASS} from "../actions/actionsType";

const initialState = {
    modal: false,
    isCheckThePass: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modal: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: false,
                isCheckThePass: false
            }
        case CHECK_THE_PASS:
            return {
                ...state,
                isCheckThePass: true,
                modal: true
            }
        default:
            return state
    }
}