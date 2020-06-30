// TODO: add and export your own actions

export default function fetchMessage(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: "API_MESS",
    payload: promise,
  };
}
