import React  from 'react'
import Article from './ArticleOld'

function ArticleList(props) {
    const { articles } = props

    const articleItems = articles.map(article => <li key = {article.id}><Article article = {article} /></li>)

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

export default ArticleList