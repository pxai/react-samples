import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsModal from './NewsModal';
import { getByNewsAsync } from '../actions/comment';

class News extends Component {
  state = {
    newsModalOpen: false
  }
  openNewsModal = () => { this.setState(() => ({ newsModalOpen: true})) }
  closeNewsModal = () => {
    this.setState(() => ({
      newsModalOpen: false
    }))
  }

  getReadableDate (timestamp) {
    return new Date(timestamp).toISOString()
  }

  updateNews = (news) => {
    this.props.updateNews(news);
  }

  deleteNews= () => {
    console.log('Delete this news: ' , this.props.news.id);
    this.props.deleteNews(this.props.news.id);
  }

  componentDidMount() {
    this.props.getComments(this.props.news.id);
  }

  render() {
    const news = this.props.news;
    return (
      <div className='news'>
          <h2><Link to={`/news/${news.category}/${news.id}`}>{news.title}</Link></h2>
          <div className='category'><i className="fa fa-tag"></i>  {news.category}</div>
          <div className='body'>
           {news.body}
           <div className='newsData'>
           <i className="fa fa-star"></i> {news.voteScore} - <i className="fa fa-user"></i> {news.author}  -
           - <i className="fa fa-calendar"></i> {this.getReadableDate(news.timestamp)}
           <span className="span-button">
             <a  onClick={this.deleteNews}><i className="fa fa-trash"></i> delete</a>
           </span>
           <span className="span-button">
             <a  onClick={() => (this.props.voteNews(news.id,'upVote'))} title="vote up"><i className="fa fa-thumbs-o-up" aria-hidden="true" ></i>Up</a>
             <a  onClick={() => (this.props.voteNews(news.id, 'downVote'))} title="vote down"><i className="fa fa-thumbs-o-down" aria-hidden="true" ></i>Down</a>
          </span>
          <span className="span-button">
             <a  onClick={this.openNewsModal}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Update</a>
          </span>
           </div>
          </div>
            <div className="comments">
            <strong><i className="fa fa-comment"></i> Comments: </strong>
              { this.props.comments.length}
              </div>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.state.newsModalOpen}
          onRequestClose={this.closeNewsModal}
          contentLabel='Modal'
        >
          <NewsModal title="Update News" onCreateNews={this.updateNews} categories={this.props.categories} news={news} closeNewsModal={this.closeNewsModal} />
        </Modal>
        </div>
    )
  }
}

// maps Redux state to our props
function mapStateToProps (state, props) {
  console.log('No comment: ', state.comment.comments);
  return {
    comments: state.comment.comments.filter(comment => comment.parentId === props.news.id )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => dispatch(getByNewsAsync(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
