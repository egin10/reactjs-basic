import React from 'react';

export class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.content}</h2>
        <p>It works! this's content text</p>
      </div>
    );
  }
}

Content.propTypes ={
    content: React.PropTypes.string
}

Content.defaultProps = {
    content: 'ContentNull'
}