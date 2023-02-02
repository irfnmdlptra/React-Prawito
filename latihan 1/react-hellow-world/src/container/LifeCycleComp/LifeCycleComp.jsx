import React, {Component} from "react";
import './LifeCycleComp.css';

class LiveCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1,
            name:'ippams'
        } 
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                        name:'ippm'
                    })
        }, 3000)
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <button className="btn">Component Button {this.state.name}</button>
        )
    }
}


export default LiveCycleComp;