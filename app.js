var todos = [{
	id: '_1',
	name: 'Buy sum milk',
	done: true
}, {
	id: '_2',
	name: 'Birthday present to Alice',
	done: false
}];

var Todo = React.createClass({
	render: function() {
		var todo = this.props.todo;
		return (<li>{todo.name}<button>Done</button></li>);
	}
});

var TodoList = React.createClass({
	render: function() {
		var rows = this.props.todos.filter(function(todo) {
			return !todo.done;
		}).map(function(todo) {
			return (<Todo key={todo.id} todo={todo}></Todo>);
		});
		return (
			<div className="active-todos">
				<h2>Active</h2>
				<ul>{rows}</ul>
			</div>
		);
	}
});

var TodoForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var name = this.refs.todoName.getDOMNode().value.trim();
		if (name) {
			alert(name);
			this.refs.todoName.getDOMNode().value = '';
		}
	},
	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input ref="todoName"></input><input type="submit"></input>
			</form>)
	}
})

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>My Todo</h1>
				<TodoList todos={todos}/>
				<TodoForm onSubmitTodo={this.handleSubmit}/>
			</div>
		);
	}
});

React.render(
	<App></App>,
	document.getElementById('app-container')
);


