import React, {Component} from 'react';
import {Consumer} from "../../context";
import uuid  from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;
        const newContact ={
            id: uuid(),
            name,
            email,
            phone
        }
        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        })
        //clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {name, email, phone} = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="rows">
                                <div className="card mb-3 col-8">
                                    <div className="card-header">Add Contact</div>
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                            <TextInputGroup
                                                label="Name"
                                                name="name"
                                                placeholder="Enter Name..."
                                                value={name}
                                                onChange={this.onChange}
                                            />
                                            <TextInputGroup
                                                label="Email"
                                                name="email"
                                                placeholder="Enter Email..."
                                                value={email}
                                                type="email"
                                                onChange={this.onChange }
                                            />
                                            <TextInputGroup
                                                label="Phone"
                                                name="phone"
                                                placeholder="Enter Phonenum..."
                                                value={phone}
                                                onChange={this.onChange}
                                            />
                                            <input type="submit" className="btn btn-light btn-block"
                                                   value="Add Contact "/>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                }
            </Consumer>
        )
    }
}

export default AddContact