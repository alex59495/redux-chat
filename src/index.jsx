// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import MesagesReducer from './reducers/messages_reducer';
import ChannelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUsernameReducer from './reducers/current_username_reducer';

// log the actions
const middlewares = applyMiddleware(logger, reduxPromise);

// intial state
const initialState = {
  messages: [],
  channels: ['general', "react", "paris"],
  selectedChannel: 'general',
  currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

// State and reducers
const reducers = combineReducers({
  messages: MesagesReducer,
  channels: ChannelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
