import { 
    ADD_AUTHOR,
DELETE_AUTHOR,
UPDATE_AUTHOR,
GET_AUTHOR
} from './authorTypes';


const initialState = {
    authors: [],
    loading  : true,
    error : null
}

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHOR:
            return{
                ...state,
            loading : false,
            authors: [...action.payload]
            }
        case ADD_AUTHOR:
            return{
                ...state,
                authors : [...state.authors,action.payload]
            }
        case UPDATE_AUTHOR:
            return{
                ...state,
                authors : state.authors.map(author => author.id === action.payload.id ? action.payload : author)
            }
        case DELETE_AUTHOR:{
            return{
                ...state,
                authors : state.authors.filter(author => author.id !== action.payload)
            }
        }
        default: return state
    }

}



export default authorReducer;