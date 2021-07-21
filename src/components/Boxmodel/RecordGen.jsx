import React from 'react'
import BoxmodelCss from './Boxmodel.module.css'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/action'
import { oldUser } from '../../redux/action'

const RecordGen = ({ counter, user, toggleForm }) => {
  const dispatch = useDispatch()
  const triggerDelete = () => {
    var answer = window.confirm('Are you sure you want to delete?')
    if (answer) {
      dispatch(deleteUser(user))
    } else {
      //some code
    }
  }
  const triggerEdit = () => {
    dispatch(oldUser(user))
    toggleForm()
  }
  return (
    <tr>
      <td>{counter}</td>
      <td>{user.fm_name}</td>
      <td>{user.fm_address}</td>
      <td>{user.fm_designation}</td>
      <td>{user.fm_salary}</td>
      <td>{user.degree_tittle}</td>
      <td>{user.year_of_passing}</td>
      <td>{user.institute_attended}</td>
      <td>
        <button className={BoxmodelCss.btn} onClick={() => triggerDelete()}>
          <i className="fa fa-trash"></i>
        </button>
        <button className={BoxmodelCss.btn} onClick={() => triggerEdit()}>
          <i className="fa fa-pencil"></i>
        </button>
      </td>
    </tr>
  )
}

export default RecordGen
