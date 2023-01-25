import { Button } from 'bootstrap'
import React, { useState } from 'react'


function form(props) {
    /*const [title, setTitle] = useState(props.article.title)
    const [description, setDescription] = useState(props.article.description)
    <input type="text" className="form-control" id="title" placeholder ="Please Enter the title"
            value={title}/>*/
  return (
    <div>
      {props.article ? (
        <div className='mb-3'>
            <label htmlFor ="title" className='form-label'>Title</label>
            <input type="text" className="form-control" id="title" placeholder ="Please Enter the title"
             />
            <label htmlFor ="title" className='form-label'>Description</label>
            <textarea className='form-control' id="description" rows="5"></textarea>
            <br>
            </br>
            <button className='btn btn-success'>Update Article</button>
            </div>

      ) : null}
    </div>
  )
}

export default form

