import React from 'react'
import './Form.css'

const QualificationGen = ({
  institute,
  handleChange,
  degree,
  year,
  counter,
}) => {
  return (
    <div>
      {counter > 0 ? <hr className="hr2" /> : null}
      <div className="row1">
        <label htmlFor="institute">
          <i className="fa fa-institution"></i> Institute Attended
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          placeholder="Type your institute here ..."
          value={institute}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <div className="col-50">
          <label htmlFor="egree">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i> Degree
            Title
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Type your degree title here ..."
            value={degree}
            onChange={handleChange}
          />
        </div>
        <div className="col-50">
          <label htmlFor="year">
            <i className="fa fa-calendar" aria-hidden="true"></i> Year of
            Passing
          </label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Type your year of passing here ..."
            value={year}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default QualificationGen
