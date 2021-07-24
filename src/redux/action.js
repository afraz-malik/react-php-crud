import toast from 'cogo-toast'
// const server = 'http://localhost/faculty_directory/php_files/'
const server = 'https://react-php-crud.herokuapp.com/php_files'

export const getUser = () => (dispatch) => {
  toast.loading('Connecting to database ...')
  dispatch({ type: 'FETCH_USER_START' })
  fetch(`${server}get_users.php`)
    .then((data) => data.json())
    .then((data) => {
      let fm = []
      for (let x = 0; x < data.fm.length; x++) {
        fm.push({ ...data.fm[x], qualification: [] })
        for (let y = 0; y < data.qual.length; y++) {
          if (data.fm[x].fm_id === data.qual[y].fm_id)
            fm[x].qualification.push(data.qual[y])
        }
      }
      dispatch({
        type: 'FETCH_USER_SUCCESS',
        payload: fm,
      })
      toast.success('Database Connected')
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_USER_FAILED', payload: err })
      toast.error('Database Connecting Failed')
      toast.info(err.message, 5000)
    })
}
export const addUser = (user) => (dispatch) => {
  toast.loading('Adding information in database ...')
  dispatch({ type: 'ADD_USER_IN_DB_START' })
  fetch(`${server}add_user.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      toast.success('Successfully added in Database')
      dispatch({ type: 'ADD_USER_IN_DB_SUCCESS', payload: res })
      fetch(`${server}get_users.php`)
        .then((data) => data.json())
        .then((data) => {
          let fm = []
          for (let x = 0; x < data.fm.length; x++) {
            fm.push({ ...data.fm[x], qualification: [] })
            for (let y = 0; y < data.qual.length; y++) {
              if (data.fm[x].fm_id === data.qual[y].fm_id)
                fm[x].qualification.push(data.qual[y])
            }
          }
          dispatch({
            type: 'FETCH_USER_SUCCESS',
            payload: fm,
          })
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_USER_FAILED', payload: err })
          toast.error('Auto Fetching Failed. Refreshing Page...')
          window.location.reload()
        })
    })
    .catch((err) => {
      dispatch({ type: 'ADD_USER_IN_DB_FAILED', payload: err })
      toast.error('Adding Data Failed')
      toast.info(err.message, 20)
    })
}
export const deleteUser = (user) => (dispatch) => {
  toast.loading('Deleting information from database...')
  dispatch({ type: 'DELETE_USER' })
  fetch(`${server}delete_user.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: 'DELETE_USER_SUCCESS', payload: res })
      toast.success('Successfully Deleted')
      dispatch({ type: 'FETCH_USER_START' })
      fetch(`${server}get_users.php`)
        .then((data) => data.json())
        .then((data) => {
          let fm = []
          for (let x = 0; x < data.fm.length; x++) {
            fm.push({ ...data.fm[x], qualification: [] })
            for (let y = 0; y < data.qual.length; y++) {
              if (data.fm[x].fm_id === data.qual[y].fm_id)
                fm[x].qualification.push(data.qual[y])
            }
          }
          dispatch({
            type: 'FETCH_USER_SUCCESS',
            payload: fm,
          })
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_USER_FAILED', payload: err })
          toast.error('Auto Fetching Failed. Refreshing Now...')
          window.location.reload()
        })
    })
    .catch((err) => {
      toast.error('Deleting User Failed')
      toast.info(err.message)
      dispatch({ type: 'DELETE_USER_FAILED', payload: err })
    })
}
export const oldUser = (oldUser) => {
  console.log(oldUser)
  return { type: 'EDIT_USER', payload: oldUser }
}
export const updateUser = (payload) => (dispatch) => {
  toast.loading('Updating informtion in database...')
  dispatch({ type: 'UPDATE_USER_START' })
  fetch(`${server}update_user.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      dispatch({ type: 'UPDATE_USER_SUCCESS', payload: res })
      toast.success('Information Updated')
      dispatch({ type: 'FETCH_USER_START' })
      fetch(`${server}get_users.php`)
        .then((data) => data.json())
        .then((data) => {
          let fm = []
          for (let x = 0; x < data.fm.length; x++) {
            fm.push({ ...data.fm[x], qualification: [] })
            for (let y = 0; y < data.qual.length; y++) {
              if (data.fm[x].fm_id === data.qual[y].fm_id)
                fm[x].qualification.push(data.qual[y])
            }
          }
          dispatch({
            type: 'FETCH_USER_SUCCESS',
            payload: fm,
          })
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_USER_FAILED', payload: err })
          toast.error('Auto Fetching Failed. Refreshing Now...')
          window.location.reload()
        })
    })
    .catch((err) => {
      toast.error('Update Failed')
      dispatch({ type: 'UPDATE_USER_FAILED', payload: err })
    })
}
export const cancelUpdate = () => {
  toast.info('Cancelled')
  return { type: 'CANCEL_UPDATE' }
}
