import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getData, deleteAuthor} from '../../redux/index'
import {useHistory} from 'react-router-dom'
import './AuthorList.scss'
function AuthorsList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {authors, loading} = useSelector(state => state.authors);
    useEffect(() => {
        dispatch(getData());
    },[history])

    const handleClick = (author) => {
        history.push({
            pathname : '/addauthor',
            state : {author}
        })
    }


        
    return (
        <div className="authorList">
            {loading ? <h1>Loading...</h1> :
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    {authors.map((author) => {
                    return (
                        <tbody className="author" key={author.id}>
                            <tr>
                                <td>{author.id}</td>
                                <td>{author.bookId}</td>
                                <td>{author.first_name}</td>
                
                                <td>{author.last_name}</td>

                             
                                <td><button className="btn btn-del" 
                                        className="btn"
                                        onClick={()=> dispatch(deleteAuthor(author.id))}
                                        >Delete</button>
                                     <button className="btn btn-upd" onClick={()=>handleClick(author)}>Update</button>
                                </td>
                               
                               
                            </tr>
                        </tbody>
                    )
                })}
            </table>
           
            }
        </div>
    )
}

export default AuthorsList
