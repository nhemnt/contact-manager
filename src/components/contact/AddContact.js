import React, {Component} from 'react';
import {Consumer} from "../../context";
import uuid  from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    onSubmit = (dispatch, e) => {

        e.preventDefault();
        const {name, email, phone} = this.state;

        //check for errors
        if(name=== ''){ this.setState({errors: {name: 'Name is Required'}}); return}
        if(phone=== ''){ this.setState({errors: {phone: 'Phone Number is Required'}}); return }
        if(email=== ''){ this.setState({errors: {email: 'Email is Required'}}); return }

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
            phone: '',
            errors: {}
        })
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {name, email, phone, errors} = this.state;
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
                                                error = {errors.name}
                                            />
                                            <TextInputGroup
                                                label="Email"
                                                name="email"
                                                placeholder="Enter Email..."
                                                value={email}
                                                type="email"
                                                onChange={this.onChange }
                                                error = {errors.email}
                                            />
                                            <TextInputGroup
                                                label="Phone"
                                                name="phone"
                                                placeholder="Enter Phonenum..."
                                                value={phone}
                                                onChange={this.onChange}
                                                error = {errors.phone}
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