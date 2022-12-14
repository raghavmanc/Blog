import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from 'react';

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className="content">
          <input type="text" placeholder='Title'></input>
          <div className="editorContainer">
          <ReactQuill className='editor'  theme="snow" value={value} onChange={setValue} />
          </div>
      </div>

      <div className='menu'>
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status: </b>Draft</span>
          <span><b>Visibility: </b>Public</span>
          <input style={{display:'none'}}  type="file" name='' id='file' />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className='cat'><input type="radio" name="cat" value='art' id='art' />
          <label htmlFor="art">Art</label></div>
          <div className='cat'><input type="radio" name="cat" value='music' id='music' />
          <label htmlFor="music">Music</label></div>
          <div className='cat'><input type="radio" name="cat" value='poker' id='poker' />   
          <label htmlFor="poker">Poker</label></div>
          <div className='cat'><input type="radio" name="cat" value='football' id='football' />
          <label htmlFor="football">Football</label></div>
        </div>
      </div>
    </div>
  )
}

export default Write