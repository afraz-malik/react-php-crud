import React from 'react'
import './Form.css'
import QualificationGen from './QualificationGen'
import { connect } from 'react-redux'
import { updateUser, cancelUpdate, addUser } from '../../redux/action'
import update from 'react-addons-update'

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  updateUser: (user) => dispatch(updateUser(user)),
  cancelUpdate: () => dispatch(cancelUpdate()),
})
const initialQual = {
  institute_attended: '',
  degree_tittle: '',
  year_of_passing: '',
}
class Form extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.oldUser) {
      this.state = {
        ...this.props.oldUser,
        counter: this.props.oldUser.qualification.length,
      }
    } else {
      this.state = {
        fm_name: '',
        fm_salary: '',
        fm_address: '',
        fm_designation: '',
        qualification: [initialQual],
        counter: 1,
      }
    }
  }
  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }
  handleQual = (event, index) => {
    this.setState(
      update(this.state, {
        qualification: {
          [index]: {
            $set: {
              ...this.state.qualification[index],
              [event.target.name]: event.target.value,
            },
          },
        },
      })
    )
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)

    this.props.oldUser
      ? this.props.updateUser(this.state)
      : this.props.addUser(this.state)
    this.setState({
      fm_name: '',
      fm_salary: '',
      fm_address: '',
      fm_designation: '',
      qualification: [initialQual],
      counter: 1,
    })
  }
  cancelUpdate = () => {
    if (this.props.oldUser) {
      this.props.cancelUpdate()
      this.props.toggleDatabase()
    } else {
      this.setState({
        fm_name: '',
        fm_salary: '',
        fm_address: '',
        fm_designation: '',
        qualification: [initialQual],
        counter: 1,
      })
    }
  }
  addCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
    this.setState((prevState) => ({
      qualification: [...prevState.qualification, initialQual],
    }))
  }

  render() {
    return (
      <div className="container">
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-50">
              <h3>Personal Information</h3>
              <label htmlFor="name">
                <i className="fa fa-user"></i> Full Name
              </label>
              <input
                type="text"
                id="name"
                name="fm_name"
                placeholder="Type your name here ..."
                value={this.state.fm_name}
                onChange={this.handleChange}
              />
              <label htmlFor="address">
                <i className="fa fa-address-card-o"></i> Address
              </label>
              <input
                type="text"
                id="address"
                name="fm_address"
                placeholder="Type your address here ..."
                value={this.state.fm_address}
                onChange={this.handleChange}
              />
              <label htmlFor="designation">
                <i className="fa fa-briefcase"></i> Designation
              </label>
              <input
                type="text"
                id="designation"
                name="fm_designation"
                placeholder="Type your designation here ..."
                value={this.state.fm_designation}
                onChange={this.handleChange}
              />
              <label htmlFor="salary">
                <i className="fa fa-usd" aria-hidden="true"></i> Salary
              </label>
              <input
                type="text"
                id="salary"
                name="fm_salary"
                placeholder="PKR"
                value={this.state.fm_salary}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-50 second">
              <div className="qualification">
                <h3>Qualification</h3>
              </div>

              {[...Array(this.state.counter)].map((i, j) => (
                <QualificationGen
                  key={j}
                  institute_attended={
                    this.state.qualification[j].institute_attended
                  }
                  degree_tittle={this.state.qualification[j].degree_tittle}
                  year_of_passing={this.state.qualification[j].year_of_passing}
                  handleQual={this.handleQual}
                  counter={j}
                />
              ))}
              <div className={'addmore'}>
                <span
                  className="span"
                  style={{ color: 'lightgrey' }}
                  onClick={() => this.addCounter()}
                >
                  &#65291;
                </span>
                <span className="span2" onClick={() => this.addCounter()}>
                  Add More
                </span>
                <hr className="hr" onClick={() => this.addCounter()} />
              </div>
            </div>
          </div>
          <label>
            <input type="checkbox" name="sameadr" required />{' '}
            <span>
              I hereby verified the above information is correct and verified as
              per Terms & Conditions of Faculty Directory of Multi University
            </span>
          </label>
          {!this.props.oldUser ? (
            <div className="cancel">
              <input
                type="submit"
                value={`Save In database`}
                className="btn "
              />
              <button
                className="btn cancelbtn"
                type="button"
                onClick={() => this.cancelUpdate()}
              >
                Clear All
              </button>
            </div>
          ) : (
            <div className="cancel">
              <input
                type="submit"
                value={`Update In database`}
                className="btn "
              />
              <button
                className="btn cancelbtn"
                type="button"
                onClick={() => this.cancelUpdate()}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Form)
