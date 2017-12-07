import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Modal from 'react-modal'
import { connect } from 'react-redux';
import CommentModal from './CommentModal';
import NewsModal from './NewsModal';
import  { getByNewsAsync, addCommentAsync, deleteCommentAsync, voteCommentAsync, updateCommentAsync  }  from '../actions/comment';
import  { getNewsAsync, voteNewsAsync, updateNewsAsync, deleteNewsAsync }  from '../actions/news';
import  { getCategoriesAsync }  from '../actions/category';
import Comment from './Comment';
import AlertContainer from 'react-alert'

class News extends Component {

  state = {
    newsModalOpen: false,
    commentModalOpen: false,
    news: {},
    comment: {},
    commentUpdate: false,
    redirectAfterDelete: false
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 2000,
    transition: 'scale'
  }

  constructor ({match}) {
    super();
  }

  openNewsModal = () => {
    this.setState(() => ({
      newsModalOpen: true
    }))
  }

  closeNewsModal = () => {
    this.setState(() => ({
      newsModalOpen: false
    }))
  }


  openCommentModal = (comment, isUpdate) => {
    this.setState(() => ({
      commentModalOpen: true,
      comment,
      commentUpdate: isUpdate
    }))
  }

  closeCommentModal = () => {
    this.setState(() => ({
      commentModalOpen: false,
      comment: {},
      commentUpdate: false
    }))
  }

  addComment = (comment) => {
    if (this.state.commentUpdate) {
      this.props.updateComment(comment);
      this.showMsg('Comment updated');
    } else {
      comment.voteScore = 1;
      this.props.addComment(comment);
      this.showMsg('Comment added');
    }
  }

  showMsg (msg) {
    this.msg.show(msg, { time: 2000, type: 'success'});
  }

  deleteComment = (id) => {
    this.props.deleteComment(id);
    this.showMsg('Comment deleted');
  }

  updateNews = (news) => {
    this.props.updateNews(news);
    this.showMsg('News updated');
  }

  deleteNews = (id) => {
    this.props.deleteNews(id);
    console.log('Deleted...', id);
    this.setState({redirectAfterDelete: true});
  }

  voteNews = (vote) => {
    let option = {option: vote};
    this.props.voteNews(this.props.newss[0].id, option);
  }

  voteComment = (id, vote) => {
    let option = {option: vote};
    this.props.voteComment(id, option);
  }

  getReadableDate (timestamp) {
    return new Date(timestamp).toISOString()
  }


  componentWillMount() {
    this.props.getCategories()
    this.props.getNews(this.props.match.params.id);
  }

  componentDidMount() {
    console.log('In Did mount ');
  }

  render() {

    if (this.state.redirectAfterDelete) {
      return <Redirect push to="/deleted"/>;
    }

    if (this.props.newss.length === 0) {
      return <Redirect push to="/404"/>;
    }

    const news = this.props.newss[0];
    const comments = this.props.comments;

    return (

      <div className='news'>
          <h2>{news.title}</h2>
          <div className='category'><i className="fa fa-tag"></i>  {news.category}</div>
          <div className='body'>
           {news.body}
           <div className='newsData'>
           <i className="fa fa-star"></i> {news.voteScore} - <i className="fa fa-user"></i> {news.author}  -
           - <i className="fa fa-calendar"></i> {this.getReadableDate(news.timestamp)}
           <span className="span-button"><a  onClick={() => this.deleteNews(news.id)}><i className="fa fa-trash"></i> delete</a></span>
           <span className="span-button">
             <a  onClick={() => (this.voteNews('upVote'))} title="vote up"><i className="fa fa-thumbs-o-up" aria-hidden="true" ></i>Up</a>
             <a  onClick={() => (this.voteNews('downVote'))} title="vote down"><i className="fa fa-thumbs-o-down" aria-hidden="true" ></i>Down</a>
          </span>
          <span className="span-button">
             <a  onClick={this.openNewsModal}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Update</a>
          </span>
           </div>

          </div>

              <h4><i className="fa fa-comment"></i> Comments ({comments.length})</h4>
              <button
                className="button primary-button"
                onClick={() => this.openCommentModal({},false)}>
                <i className="fa fa-comments-o"></i>+ Add Comment
              </button>
              <div className="comments">
                {   comments.map((comment) =>
                  (
                      <Comment key={comment.id} comment={comment} deleteComment={this.deleteComment} openCommentModal={(comment) => this.openCommentModal(comment, true)} voteComment={this.voteComment} />
                ))}
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

          <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.state.commentModalOpen}
          onRequestClose={this.closeCommentModal}
          contentLabel='Modal'
        >
         <CommentModal news={news} comment={this.state.comment} onCreateComment={this.addComment} closeCommentModal={this.closeCommentModal} />
        </Modal>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        </div>
    )
  }
}

// maps Redux state to our props
function mapStateToProps (state, props) {
  console.log('In map state to props', state.news.newss);
  return {
    newss: state.news.newss,
    comments: state.comment.comments.filter(p => p.parentId === props.match.params.id),
    categories: state.category.categories
  }
}

function mapDispatchToProps (dispatch) {
  console.log('In dispatc to props');
  return {
    getCategories: () => dispatch(getCategoriesAsync()),
    getNews: (id) => dispatch(getNewsAsync(id)),
    getByNews: (id) => dispatch(getByNewsAsync(id)),
    addComment: (comment) => dispatch(addCommentAsync(comment)),
    updateComment: (comment) => dispatch(updateCommentAsync(comment)),
    deleteComment: (id) => dispatch(deleteCommentAsync(id)),
    deleteNews: (id) => dispatch(deleteNewsAsync(id)),
    voteNews: (id, vote) => dispatch(voteNewsAsync(id,vote)),
    voteComment: (id, vote) => dispatch(voteCommentAsync(id,vote)),
    updateNews: (news) => dispatch(updateNewsAsync(news))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
