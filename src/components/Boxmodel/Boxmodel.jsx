import React from 'react'
import BoxmodelCss from './Boxmodel.module.css'
// Components
import RecordGen from './RecordGen'
import { Spinner } from '../spinner/spinner'

const Boxmodel = ({ users, toggleForm, isLoading }) => {
  return (
    <div className={BoxmodelCss.body}>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Degree_Title</th>
          <th>Year_of_Passing</th>
          <th>Institute_Attended</th>
          <th>Actions</th>
        </tr>
        {users.map((i, j) => (
          <RecordGen
            key={j}
            user={users[j]}
            counter={j + 1}
            toggleForm={toggleForm}
          />
        ))}
      </table>
      {isLoading ? <Spinner /> : null}
    </div>
  )
}

export default Boxmodel
