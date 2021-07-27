import React, { useState, useEffect } from "react";
import "./AddForm.scss";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { addAuthor, updateAuthor } from "../../redux/index";
import { useLocation, useHistory } from "react-router-dom";

function AddForm() {
  const [id, setId] = useState("");
  const [bookId, setBookId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isUpdate, setIsUpdate] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
   
    e.preventDefault();

    let author = {
      id: parseInt(id),
      bookId: bookId,
      first_name: firstName,
      last_name: lastName,
    };
    if (isUpdate === true) {
      console.log("post")
  
      dispatch(addAuthor(author));
    }else{
      console.log("put")
      dispatch(updateAuthor(author))
    }
   
    setId("");
    setBookId("");
    setFirstName("");
    setLastName("");
    setIsUpdate(true);
    history.push({
      pathname: '/authors'
    })
  };

  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      let {author} = location.state;
     
      setId(author.id);
      setBookId(author.bookId);
      setFirstName(author.first_name);
      setLastName(author.last_name);
      setIsUpdate(false)

    }

  }, [location]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="id">Id</label>
        <input required={true}
          type="number"
          name="id"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book-id">Book Id</label>
        <input required={true}
          type="text"
          name="book-id"
          id="book-id"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input required={true}
          type="text"
          name="name"
          id="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input required={true}
          type="text"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button 
            type="submit"
            className="btnAdd"
            
            aria-label="submit"
          >{isUpdate ? "save" : "update"}</button>
    </form>
  );
}

export default AddForm;
