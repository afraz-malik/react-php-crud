import React from 'react'
import TogglesCss from './Toggles.module.css'
const Toggles = ({ form, database, oldUser, toggleDatabase, toggleForm }) => {
  return (
    <div className={TogglesCss.toggles}>
      <button
        onClick={() => toggleForm()}
        style={form ? { backgroundColor: '#04aa6d', color: 'white' } : null}
      >
        {!oldUser ? 'Add Faculty Member' : 'Update Faculty Member'}
      </button>
      <button
        onClick={() => toggleDatabase()}
        style={database ? { backgroundColor: '#04aa6d', color: 'white' } : null}
      >
        Database
      </button>
    </div>
  )
}

export default Toggles
