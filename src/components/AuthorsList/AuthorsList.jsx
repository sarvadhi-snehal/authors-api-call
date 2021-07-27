import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, deleteAuthor, resetVal } from "../../redux/index";
import { useHistory } from "react-router-dom";
import { GrUpdate} from 'react-icons/gr'
import { FaThumbsUp, FaTrash} from 'react-icons/fa'
import "./AuthorList.scss";
function AuthorsList() {
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);
  const [upd, setUpd] = useState(false);
  const [ins, setIns] = useState(false);

  const history = useHistory();
  const { authors, loading, isUpdated, isInserted } = useSelector(
    (state) => state.authors
  );

  useEffect(() => {
    dispatch(getData());
    setUpd(isUpdated);
    setIns(isInserted);
    dispatch(resetVal());
  }, []);

  const handleClick = (author) => {
    history.push({
      pathname: "/addauthor",
      state: { author },
    });
  };

  const delHandler = (id) => {
    dispatch(deleteAuthor(id));
    setDel(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDel(false);
      setUpd(false);
      setIns(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [del, upd, ins]);

  return (
    <div className="authorList">
          {del && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert" >
                  <strong>
                    <FaTrash /> Author has been deleted successfully.
                  </strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}


      {upd && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong> < GrUpdate />Author has been updated successfully.</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {ins && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong><FaThumbsUp />Author has been added successfully.</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {loading ? (
        <h1>Loading...</h1>
      ) : (
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

                  <td>
                   
                    <button
                      className="btn btn-del"
                      className="btn"
                      onClick={(event) => delHandler(author.id, event)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-upd"
                      onClick={() => handleClick(author)}
                    >
                      Update
                    </button>
                  </td>
                  
                </tr>
              </tbody>
              
            );
          })
          
          }
        </table>
      )}


    </div>
  );
}

export default AuthorsList;
