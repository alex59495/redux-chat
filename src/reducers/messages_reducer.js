export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESS':
      return action.payload.messages;
    // eslint-disable-next-line no-case-declarations
    case 'SEND_MESS':
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
