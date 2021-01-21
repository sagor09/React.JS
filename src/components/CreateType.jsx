import React, { Component } from 'react';
import Modal from 'react-modal';




const customStyles = {
  content : {
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom: 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    width: "500px"
  }
};

class CreateType extends Component {

    state = {
        title: '',
        color: '',
        is_active: false,
        isOpen: false
    }

    chagneHandler = event => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }


    render() {
        let {title, color, is_active} = this.state
        return (
            <Modal
                style={customStyles}
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
            >
                <form>
                    <h4 className="card-title">Create new Type</h4>
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
                            type="checkbox" />
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Save</button>
                </form>
            </Modal>
        )
    }
}

export default CreateType
