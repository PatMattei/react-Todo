var React = require('react');

var AddTodo = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var todo = this.refs.todoText.value;

		if (todo.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todo);
		} else {
			this.refs.todoText.focus();
		}
	},
	render: function() {
		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.handleSubmit} className="add-todo">
					<input type="text" ref="todoText" placeholder="Add todo"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;