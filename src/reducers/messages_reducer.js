export default function(state = null, action) {
  switch (action.type) {
    case 'API_MESS':
      return action.payload.messages;
    default:
      return state;
  }
}
