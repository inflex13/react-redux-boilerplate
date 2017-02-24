import axios from 'axios';
import { BASE_URL, URI_PEOPLE, FETCH_PERSON } from './types';

export function fetchPerson(person) {
    const uri = `${BASE_URL}${URI_PEOPLE}${person}`;
    const req = axios.get(uri);

    return (dispatch) => {
        req.then(({ data }) => {
            dispatch({ type: FETCH_PERSON, payload: data });
        });
    };
}
