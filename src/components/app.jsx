import React from 'react';
import MessagesContainer from '../containers/messages_container';
import ChannelList from '../containers/channel_list';


const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessagesContainer />
    </div>
  );
};

export default App;
