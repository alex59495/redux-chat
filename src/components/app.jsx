import React from 'react';
import MessagesContainer from '../containers/messages_container';
import ChannelList from '../containers/channel_list';


const App = () => {
  return (
    <div className="app d-flex">
      <div className="left-bar">
        <img className="logo-LW" src="https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-fe76916e1b923ade71e253ae6dc031d936e5e8eebac4e26b0fbac650ea6ee360.png" alt="logo" />
      </div>
      <ChannelList />
      <MessagesContainer />
    </div>
  );
};

export default App;
