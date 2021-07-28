import { TodoList } from './components/TodoList';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  addTask(event) {
    if (event.keyCode !== 13) return;
    const newTask = event.target.value;
    this.setState({ tasks: [...this.state.tasks, newTask] });
    event.target.value = '';
  }

  render() {
    return (
      <div>
        <h4>My To Do List - Tiago Gerevini Yoshioka</h4>
        <TodoList
          onAddTask={event => this.addTask(event)}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
