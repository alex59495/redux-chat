import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../components/message';
import { fetchMessage } from '../actions';
import MessageForm from './message_form';

class MessagesContainer extends Component {
  componentDidMount() {
    this.props.fetchMessage(this.props.selectedChannel);
    this.refresher = setInterval(() => { this.props.fetchMessage(this.props.selectedChannel); }, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="ml-3 flex-grow-1">
        <div className="channel-title">
          Channel #{this.props.selectedChannel}
        </div>
        <div className="message-container" ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => {
            return <Message message={message} key={Math.random() * 10000000000000000} />;
          })}
        </div>
        <div className="form">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    messages: state.messages,
    selectedChannel: state.selectedChannel
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessage }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(MessagesContainer);

