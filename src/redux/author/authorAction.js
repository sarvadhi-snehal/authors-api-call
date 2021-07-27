import { 
    ADD_AUTHOR,
DELETE_AUTHOR,
UPDATE_AUTHOR,
GET_AUTHOR,
RESET_VAL
} from './authorTypes';
import axios from 'axios'
const api = axios.create({baseUrl: "https://reqres.in/api/users/" })

export const addAuthor = (author) =>{
    axios.post("https://reqres.in/api/users/",author).then((response) => {
        console.log(response)
    }).catch(error => console.log(error));
    return {
    type : ADD_AUTHOR,
    info : "adding new author",
    payload : author
    }
}


export const updateAuthor = (author) => {
    axios.put(`https://reqres.in/api/users/${author.id}`,author).then((response) => {
        console.log(response)
    }).catch(error => console.log(error));
    return {
        type : UPDATE_AUTHOR,
        info : "Updating author's details",
        payload : author
        }
}

export const deleteAuthor = (id) =>{
    axios.delete(`https://reqres.in/api/users/${id}`,).then((response) => {
        console.log(response)
    }).catch(error => console.log(error));
    return {
        type: DELETE_AUTHOR,
        info : "deleting author",
        payload : id
    }
}

export const getAuthor = (authors) =>{
    return {
        type : GET_AUTHOR,
        info: 'getting authorlist from server',
        payload: authors
    }
}
 export const getData = () => (dispatch) =>{
        axios.get("https://reqres.in/api/users/").then((response) => {
            const data = response.data.data.map(a => a ? {...a, bookId: 2 * a.id}: a);
            console.log(data)
            dispatch(getAuthor(data))
        }).catch(error => console.log(error))

}


export const resetVal = () =>{
    return {
        type :RESET_VAL,
        info :"reset validation"
    }
}

