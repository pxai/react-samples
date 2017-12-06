import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostModal from './PostModal';
import { getByPostAsync } from '../actions/comment';

class Post extends Component {
  state = {
    postModalOpen: false
  }
  openPostModal = () => { this.setState(() => ({ postModalOpen: true})) }
  closePostModal = () => {
    this.setState(() => ({
      postModalOpen: false
    }))
  }

  getReadableDate (timestamp) {
    return new Date(timestamp).toISOString()
  }

  updatePost = (post) => {
    this.props.updatePost(post);
  }

  deletePost= () => {
    console.log('Delete this post: ' , this.props.post.id);
    this.props.deletePost(this.props.post.id);
  }

  componentDidMount() {
    this.props.getComments(this.props.post.id);
  }

  render() {
    const post = this.props.post;
    return (
      <div className='post'>
          <h2><Link to={`/post/${post.category}/${post.id}`}>{post.title}</Link></h2>
          <div className='category'><i className="fa fa-tag"></i>  {post.category}</div>
          <div className='body'>
           {post.body}
           <div className='postData'>
           <i className="fa fa-star"></i> {post.voteScore} - <i className="fa fa-user"></i> {post.author}  -  
           - <i className="fa fa-calendar"></i> {this.getReadableDate(post.timestamp)}
           <span className="span-button">
             <a  onClick={this.deletePost}><i className="fa fa-trash"></i> delete</a>
           </span>
           <span className="span-button">
             <a  onClick={() => (this.props.votePost(post.id,'upVote'))} title="vote up"><i className="fa fa-thumbs-o-up" aria-hidden="true" ></i>Up</a>
             <a  onClick={() => (this.props.votePost(post.id, 'downVote'))} title="vote down"><i className="fa fa-thumbs-o-down" aria-hidden="true" ></i>Down</a>
          </span>
          <span className="span-button">
             <a  onClick={this.openPostModal}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Update</a>
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
          isOpen={this.state.postModalOpen}
          onRequestClose={this.closePostModal}
          contentLabel='Modal'
        >
          <PostModal title="Update Post" onCreatePost={this.updatePost} categories={this.props.categories} post={post} closePostModal={this.closePostModal} />
        </Modal>
        </div>
    )
  }
}

// maps Redux state to our props
function mapStateToProps (state, props) {
  console.log('No comment: ', state.comment.comments);
  return {
    comments: state.comment.comments.filter(comment => comment.parentId === props.post.id )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => dispatch(getByPostAsync(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)

