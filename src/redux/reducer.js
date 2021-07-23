const initialUserState = {
  users: [],
  isLoading: false,
  error: null,
  message: null,
  oldUser: null,
  success: false,
}
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    //Start Cases
    case 'FETCH_USER_START':
      return Object.assign({}, state, {
        error: null,
        oldUser: null,
        success: false,
      })
    case 'ADD_USER_IN_DB_START':
    case 'DELETE_USER':
    case 'UPDATE_USER_START':
      return Object.assign({}, state, {
        isLoading: true,
        error: null,
        oldUser: null,
        success: false,
      })
    //Success Cases
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, {
        users: action.payload,
        isLoading: false,
        error: null,
        oldUser: null,
        success: false,
      })
    case 'ADD_USER_IN_DB_SUCCESS':
    case 'DELETE_USER_SUCCESS':
    case 'UPDATE_USER_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        message: action.payload,
        error: null,
        oldUser: null,
        success: true,
      })

    //Failed Cases
    case 'FETCH_USER_FAILED':
    case 'ADD_USER_IN_DB_FAILED':
    case 'DELTE_USER_FAILED':
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload,
        oldUser: null,
        success: false,
      })

    // Edit Case
    case 'EDIT_USER':
      return Object.assign({}, state, { oldUser: action.payload })
    case 'CANCEL_UPDATE':
      return Object.assign({}, state, { oldUser: null })
    default:
      return state
  }
}
