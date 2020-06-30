import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../components/message';
import fetchMessage from '../actions';

class MessagesContainer extends Component {
  componentWillMount() {
    this.props.fetchMessage('general');
  }

  render() {
    return (
      console.log(this.props.messages),
      <div className="message-container">
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    messages: state.messages
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessage }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(MessagesContainer);

