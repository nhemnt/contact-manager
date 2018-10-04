import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
            ;
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
                ;
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'hemant',
                email: 'heamnt@gmail.com',
                phone: '8802830421'
            },
            {
                id: 2,
                name: 'bhavna',
                email: 'bhavna@gmail.com',
                phone: '8803240421'
            },
            {
                id: 3,
                name: 'kiran',
                email: 'kiran@gmail.com',
                phone: '8812330421'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
