import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            comments: PropTypes.array,
            text: PropTypes.string
        }).isRequired
    }

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments} />
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article