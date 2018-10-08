import React, {Component} from 'react';

class Test extends Component {
    state = {
        test: 'test'
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    // componentWillMount() {
    //     console.log('component will mount');
    //     console.log('this is first')
    // }
    //
    // componentDidUpdate() {
    //     console.log('component did update');
    //     console.log('on update, this will run second');
    // }
    //
    // componentWillUpdate() {
    //     console.log('component will update');
    //     console.log('on update, this will run first');
    // }
    //
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('component will recieve props');
    //     console.log('this is run when component recieves new props')
    // }
    //
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     //The function is used when a component is updated but also when it is mounted, right after the constructor was called,
    //     // so you no longer need to use constructor or class property form of state if you want to set initial state from props.
    //     console.log('must return a state or a null');
    //     console.log('you cant use setState , rather than you must return new state');
    //     // return null;
    //     return {
    //         test: 'getDerivedStateFromProps '
    //     }
    // }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     //It is usable mostly if you need to read the current DOM state,
    //     // for example you have an application in which new messages are added to the top of the screen — if a user scrolled down,
    //     // and a new message is added the screen could move and make the UI harder to use.
    //     // By adding getSnapshotBeforeUpdate you can calculate current scroll position and maintain it through the DOM update.
    //     console.log('this will run when dom is updated or mutated')
    // }

    render() {
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}

export default Test
