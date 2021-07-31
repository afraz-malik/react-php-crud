import React from 'react'
import TogglesCss from './Toggles.module.css'

const Toggles = ({ form, database, oldUser, toggleDatabase, toggleForm }) => {
  return (
    <div className={TogglesCss.toggles}>
      <button
        onClick={() => toggleForm()}
        style={
          form
            ? {
                background: 'linear-gradient(360deg, #BA54F5 0%, #E14ECA 100%)',
                color: 'white',
              }
            : null
        }
      >
        {!oldUser ? 'Add Faculty Member' : 'Update Faculty Member'}
      </button>
      <button
        onClick={() => toggleDatabase()}
        style={
          database
            ? {
                background: 'linear-gradient(360deg, #BA54F5 0%, #E14ECA 100%)',
                color: 'white',
              }
            : null
        }
      >
        {'Database'}
      </button>
    </div>
  )
}

export default Toggles
