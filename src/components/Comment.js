import React, { PropTypes } from 'react'

function Comment(props) {
    const { title, text, user } = props.comment
    const header = title && <h4>{title}</h4>
    return (
        <div>
            {header}
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}


Comment.propTypes = {
    comment: PropTypes.shape({
        id:     PropTypes.number,
        text:   PropTypes.string,
        user:   PropTypes.string
    }).isRequired
}

export default Comment