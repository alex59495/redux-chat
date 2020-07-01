import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessage } from '../actions/index';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      console.log(this);
      this.props.fetchMessage(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return (
      <div>
        <div className="channel-list">
          <ul>
            {this.props.channels.map((channel) => {
              return (
                <li
                  onClick={ () => {this.handleClick(channel)}}
                  key={channel}
                  className={channel === this.props.selectedChannel ? 'active' : null}
                >
                  {channel}
                </li>
              );
            })}
          </ul>
        </div>
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
