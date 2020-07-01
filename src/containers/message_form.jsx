import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUsername, this.state.value);
    // Clean the input field
    this.setState({ value: '' });
  }

  render() {
    return (
      <form>
        <input type="text" name="name" id="message-content" value={this.state.value} ref={(input) => { this.messageBox = input; }} onChange={this.handleChange} />
        <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUsername: state.currentUsername,
    selectedChannel: state.selectedChannel
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(MessageForm);
