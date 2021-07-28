import React, { Component } from 'react';

export class TodoList extends Component {
  render() {
    return (
      <div>
        <label>
          New:
          <input onKeyUp={this.props.onAddTask} autoFocus type="text" />
        </label>
        <p>My tasks:</p>
        <ul>
          {this.props.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}
