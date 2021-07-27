import React from 'react'
import  AuthorsList from '../components/AuthorsList/AuthorsList';
import {Link } from 'react-router-dom'
import  '../scss/Authors.scss'
function authors() {
    return (
        <section>
            <h1>Authors </h1>
            <button className="btn"><Link to="/addauthor">Add Author</Link></button>
           <AuthorsList />
        </section>
    )
}

export default authors
