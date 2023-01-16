import React from "react";
import "../App.css";

class AddTask extends React.Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else return alert("Too short description of the task");
  };

  render() {
    const maxDate = this.minDate.slice(0, 4);
    return (
      <div className="Form">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleText}
          placeholder="add task"
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">Select date:</label>
        <input
          type="date"
          value={this.state.date}
          onChange={this.handleDate}
          min={this.minDate}
          max={maxDate}
        />
        <br />
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

export default AddTask;