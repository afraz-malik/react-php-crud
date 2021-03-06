import React from 'react'
import AppCss from './App.module.css'

// Redux
import { getUser } from './redux/action'
import { connect } from 'react-redux'

// Components
import Boxmodel from './components/Boxmodel/Boxmodel'
import Form from './components/Form/Form'
import Toggles from './components/Toggles/Toggles'
import TitleBar from './components/titlebar/Titlebar'

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  qual: state.userReducer.qual,
  oldUser: state.userReducer.oldUser,
  isLoading: state.userReducer.isLoading,
  success: state.userReducer.success,
})
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: false,
      form: true,
      searchValue: '',
    }
  }
  componentDidMount() {
    this.props.getUser()
  }
  toggleDatabase = () => {
    this.setState({
      database: !this.state.database,
      form: false,
      searchValue: '',
    })
  }
  toggleForm = () => {
    this.setState({
      database: false,
      form: !this.state.form,
    })
  }
  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }
  clearSearchValue = () => {
    this.setState({ searchValue: '' })
  }

  render() {
    const { form, database, searchValue } = this.state
    const { oldUser, users, isLoading, success } = this.props
    // console.log(users[0].qualification[0].degree_tittle)
    const filteredUsers = users.filter((users) => {
      return (
        users.fm_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        users.fm_address.toLowerCase().includes(searchValue.toLowerCase()) ||
        users.fm_designation
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        users.fm_salary.toLowerCase().includes(searchValue.toLowerCase()) ||
        users.qualification.includes(searchValue.toLowerCase()) ||
        users.qualification[0].degree_tittle
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        users.qualification[0].year_of_passing
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        users.qualification[0].institute_attended
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    })
    return (
      <div className={AppCss.App}>
        <div className={AppCss.container}>
          <Toggles
            form={form}
            database={database}
            oldUser={oldUser}
            toggleDatabase={this.toggleDatabase}
            toggleForm={this.toggleForm}
          />
          <div className={AppCss.container2}>
            <TitleBar
              database={database}
              form={form}
              searchValue={searchValue}
              onSearchChange={this.onSearchChange}
              clearSearchValue={this.clearSearchValue}
            />

            {database ? (
              <Boxmodel
                toggleForm={this.toggleForm}
                users={filteredUsers}
                isLoading={isLoading}
              />
            ) : null}
            {form ? (
              <Form
                oldUser={oldUser}
                toggleDatabase={this.toggleDatabase}
                isLoading={isLoading}
                success={success}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
