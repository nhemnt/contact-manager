import React, {Component} from 'react';
import {Consumer} from "../../context";
// import uuid  from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    onSubmit =async (dispatch, e) => {

        e.preventDefault();
        const {name, email, phone} = this.state;

        //check for errors
        if(name=== ''){ this.setState({errors: {name: 'Name is Required'}}); return}
        if(phone=== ''){ this.setState({errors: {phone: 'Phone Number is Required'}}); return }
        if(email=== ''){ this.setState({errors: {email: 'Email is Required'}}); return }

        const newContact ={
            name,
            email,
            phone
        }
        const res =await axios.post('https://jsonplaceholder.typicode.com/users', newContact)

        dispatch({type: 'ADD_CONTACT', payload: res.data})

        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/');
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