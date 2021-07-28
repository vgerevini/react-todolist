import React, { Component } from 'react';

export class TodoList extends Component {
  render() {
    return (
      <div>
        <label>
          Nova tarefa:
          <input onKeyUp={this.props.onAddTask} autoFocus type="text" />
        </label>
        <p>Minhas tarefas:</p>
        <ul>
          {this.props.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}
