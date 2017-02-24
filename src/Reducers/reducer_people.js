import { FETCH_PERSON } from '../Actions/types';

const INITIAL_STATE = {
    people: [],
    person: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PERSON:
            return { ...state, person: action.payload };
        default:
            return state;
    }
}
