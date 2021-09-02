import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
    isLoader: true,
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const responseData = await fetch('https://apis.ccbp.in/blogs')
    const data = await responseData.json()
    const formatData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: formatData, isLoader: false})
  }

  render() {
    const {blogData, isLoader} = this.state
    return (
      <div className="blog-list-container">
        {isLoader ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogData.map(eachItems => (
            <BlogItem key={eachItems.id} eachBlog={eachItems} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
