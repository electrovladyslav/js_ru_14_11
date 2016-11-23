import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        openArticleId: null
    }

    render() {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
        //isOpen = {this.state.isOpen} -> {...this.state}
    }

    openArticle = id => ev => {

        this.setState({
            openArticleId: id
        })
    }
    /*  openArticle = function(id) {
            return function (ev) {
              some logic
            };
        };
    */
}