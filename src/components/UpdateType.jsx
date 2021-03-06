import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { updateTypes } from "../store/actions/typeAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};

class UpdateType extends Component {
  state = {
    title: "",
    color: "",
    is_active: true,
    isOpen: false,
  };

  componentDidMount() {
    this.setState({
      title: this.props.types.title,
      color: this.props.types.color,
      is_active: this.props.types.is_active,
    });
  }

  chagneHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.updateTypes(this.props.types.id, this.state);
    this.props.close();
    console.log("Update");
  };

  render() {
    let { title, color, is_active } = this.state;
    return (
      <Modal
        style={customStyles}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
      >
        <form onSubmit={this.submitHandler}>
          <h4 className="card-title">Update new Type</h4>
          <div className="form-group">
            <label htmlFor="title">Enter Type Title</label>
            <input
              className="form-control"
              placeholder="Enter contact type"
              name="title"
              type="text"
              id="title"
              value={title}
              onChange={this.chagneHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Enter Color Name</label>
            <input
              className="form-control"
              placeholder="Enter color name"
              name="color"
              id="color"
              type="text"
              value={color}
              onChange={this.chagneHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Status</label>
            <input
              name="is_active"
              value={is_active}
              onChange={this.chagneHandler}
              type="checkbox"
            />
          </div>
          <button type="submit" className="btn btn-success btn-sm">
            Save
          </button>
        </form>
      </Modal>
    );
  }
}

export default connect(null, { updateTypes })(UpdateType);
