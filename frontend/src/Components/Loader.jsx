import React from 'react'
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading">
           <input type="checkbox" id="check" />
           <label for="check" className='loader'>
          <div class="check-icon"></div>
          </label>
        </div>
  )
}

export default Loader