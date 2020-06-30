import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../components/message';

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

class MessagesContainer extends Component {
  render() {
    return (
      <div className="message-container">
        {this.props.messages.map((message) => {
          return <Message message={message} />
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(MessagesContainer);

