import React, { Component } from 'react'
import Comment from './Comment'

class CommentBloc extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,

        }
    }

    render() {
        const { comments } = this.props

        const commentList = comments ?
            comments.map(comment =>
                <li key = {comment.id}><Comment comment = {comment} /></li>
            )
            : <li>Комментариев нет</li>

        const body = this.state.isOpen ? <ul>{commentList}</ul> : null

        const buttonText = this.state.isOpen ? 'Скрыть комментарии' : 'Показать комментарии'

        return (
            <section>
                <button onClick = {this.handleClick}>{buttonText}</button>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentBloc