import {UPDATE_CATEGORY} from "../constants";

export const updateCategory = (category) => ({
    type: UPDATE_CATEGORY,
    data: category
})