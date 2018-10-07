import React, {Component} from 'react';

class AddContact extends Component {
    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
    }
    static defaultProps = {
        name: 'heamnt',
        email: 'hemant300@gmail.com',
        phone: '8802830053'
    }

    render() {
        const {name, email, phone} = this.props;
        return (
            <div className="rows">
                <div className="card mb-3 col-8">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name"
                                       defaultValue={name}
                                       className="form-control form-control-lg"
                                        ref={this.nameInput}
                                       placeholder="Enter Name..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email"
                                       defaultValue={email}
                                       className="form-control form-control-lg"
                                       ref={this.emailInput}
                                       placeholder="Enter Email..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone"
                                       defaultValue={phone}
                                       className="form-control form-control-lg"
                                       ref={this.phoneInput}
                                       placeholder="Enter Phone..."/>
                            </div>
                            <input type="submit" className="btn btn-light btn-block" value="Add Contact "/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact