import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {eachBlog} = this.props
    const {id, imageUrl, topic, title, avatarUrl, author} = eachBlog
    return (
      <Link to={`/blog/${id}`} className="item-link">
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <p className="item-title">{title}</p>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default BlogItem
