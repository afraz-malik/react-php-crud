import toast from 'cogo-toast'
const phpUrl = 'http://localhost'
// const phpUrl = 'http://192.168.10.7'
export const getUser = () => (dispatch) => {
  dispatch({ type: 'FETCH_USER_START' })
  fetch(`${phpUrl}/php-crud/get_users.php`)
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
      toast.success('Fetching Success...')
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_USER_FAILED', payload: err })
      console.log(err)
      toast.error('Fetching Failed')
      toast.info(err.message, 5000)
    })
}
export const addUser = (user) => (dispatch) => {
  console.log(user)
  dispatch({ type: 'ADD_USER_IN_DB_START' })
  fetch(`${phpUrl}/php-crud/add_user.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      toast.success('Added Data in Database')
      dispatch({ type: 'ADD_USER_IN_DB_SUCCESS', payload: res })
      fetch(`${phpUrl}/php-crud/get_users.php`)
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
          console.log(err)
          window.location.reload()
        })
    })
    .catch((err) => {
      dispatch({ type: 'ADD_USER_IN_DB_FAILED', payload: err })
      console.log(err)
      toast.error('Adding Data Failed')
      toast.info(err.message, 20)
    })
}
export const deleteUser = (user) => (dispatch) => {
  console.log(user)
  dispatch({ type: 'DELETE_USER' })
  fetch(`${phpUrl}/php-crud/delete_user.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      dispatch({ type: 'DELETE_USER_SUCCESS', payload: res })
      toast.success('Successfully Deleted')
      dispatch({ type: 'FETCH_USER_START' })
      fetch(`${phpUrl}/php-crud/get_users.php`)
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
          console.log(err)
          dispatch({ type: 'FETCH_USER_FAILED', payload: err })
          toast.error('Auto Fetching Failed. Refreshing Now...')
          window.location.reload()
        })
    })
    .catch((err) => {
      console.log(err)

      toast.error('Deleting User Failed')
      toast.info(err.message)
      dispatch({ type: 'DELETE_USER_FAILED', payload: err })
    })
}
export const oldUser = (oldUser) => ({
  type: 'EDIT_USER',
  payload: oldUser,
})
export const updateUser = (payload) => (dispatch) => {
  dispatch({ type: 'UPDATE_USER' })
  fetch(`${phpUrl}/php-crud/update_user.php`, {
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
      fetch(`${phpUrl}/php-crud/get_users.php`)
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
          console.log(err)

          dispatch({ type: 'FETCH_USER_FAILED', payload: err })
          toast.error('Auto Fetching Failed. Refreshing Now...')
          window.location.reload()
        })
    })
    .catch((err) => {
      console.log(err)

      toast.error('Update Failed')
      dispatch({ type: 'UPDATE_USER_FAILED', payload: err })
    })
}
export const cancelUpdate = () => {
  toast.info('Cancelled')
  return { type: 'CANCEL_UPDATE' }
}
