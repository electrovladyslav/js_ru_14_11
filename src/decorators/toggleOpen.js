import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        //isOpen = {this.state.isOpen} -> {...this.state}
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}