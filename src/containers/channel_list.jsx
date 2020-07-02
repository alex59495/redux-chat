import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessage } from '../actions/index';

class ChannelList extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedChannel !== this.props.selectedChannel) {
  //     this.props.fetchMessage(nextProps.selectedChannel);
  //   }
  // }

  componentDidUpdate() {
    this.props.fetchMessage(this.props.selectedChannel);
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return (
      <div className="channel-list">
        {this.props.channels.map((channel) => {
          return (
            <div 
              onClick={ () => {this.handleClick(channel)}}
              key={channel}
              className={`channel ${channel === this.props.selectedChannel ? ' active' : null}`}
            >
              #{channel}
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessage, selectChannel }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ChannelList);
