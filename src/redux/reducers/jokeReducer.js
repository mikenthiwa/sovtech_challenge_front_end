import {UPDATE_CATEGORY} from "../constants";

const initialState = {
    category: '',
}

export default (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY:
            return {...state, category: action.data}
        default:
            return {...state}
    }
}