import { 
    ADD_AUTHOR,
DELETE_AUTHOR,
UPDATE_AUTHOR,
GET_AUTHOR,
RESET_VAL
} from './authorTypes';


const initialState = {
    authors: [],
    loading  : true,
    error : null,
    isUpdated : false,
    isInserted : false,
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
                isInserted: true,
                isUpdated: false,
                authors : [...state.authors,action.payload]

            }
        case UPDATE_AUTHOR:
            return{
                ...state,
                isUpdated: true,
                isInserted: false,
                authors : state.authors.map(author => author.id === action.payload.id ? action.payload : author)
            }
        case DELETE_AUTHOR:
            return{
                ...state,
                isUpdated : false,
                isInserted : false,
                authors : state.authors.filter(author => author.id !== action.payload)
            }
        case RESET_VAL:
                return{
                    ...state,
                    isUpdated : false,
                    isInserted : false,
                }
            
        
        default: return state
    }

}



export default authorReducer;