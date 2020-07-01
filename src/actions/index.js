// TODO: add and export your own actions

export function fetchMessage(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: "FETCH_MESS",
    payload: promise,
  };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: "SEND_MESS",
    payload: promise,
  };
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel,
  };
}
