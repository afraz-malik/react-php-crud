const initialUserState = {
  users: [],
  isLoading: false,
  error: null,
  message: null,
  oldUser: null,
}
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    //Start
    case 'FETCH_USER_START':
    case 'ADD_USER_IN_DB_START':
    case 'DELETE_USER':
      return Object.assign({}, state, {
        isLoading: true,
        error: null,
        oldUser: null,
      })
    //Success
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, {
        users: action.payload,
        isLoading: false,
        error: null,
        oldUser: null,
      })
    case 'ADD_USER_IN_DB_SUCCESS':
    case 'DELETE_USER_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        message: action.payload,
        error: null,
        oldUser: null,
      })

    //Failed
    case 'FETCH_USER_FAILED':
    case 'ADD_USER_IN_DB_FAILED':
    case 'DELTE_USER_FAILED':
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload,
        oldUser: null,
      })

    // old user Edit
    case 'EDIT_USER':
      return Object.assign({}, state, { oldUser: action.payload })
    case 'CANCEL_UPDATE':
      return Object.assign({}, state, { oldUser: null })
    default:
      return state
  }
}
