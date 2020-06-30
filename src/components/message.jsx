import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <div className="d-flex">
        <div className="author">
          {props.message.author}
        </div>
        <div className="date">
          {props.message.created_at}
        </div>
      </div>
      <div className="content">
        {props.message.content}
      </div>
    </div>
  );
}

export default Message;