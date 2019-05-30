import React, { Component } from "react"
import { Redirect } from "react-router";
import Modal from "react-modal"
import { connect } from "react-redux";
import CommentModal from "./CommentModal";
import ArticleModal from "./ArticleModal";
import  { getByArticleAsync, addCommentAsync, deleteCommentAsync, voteCommentAsync, updateCommentAsync  }  from "../actions/comment";
import  { getArticleAsync, voteArticleAsync, updateArticleAsync, deleteArticleAsync }  from "../actions/article";
import  { getCategoriesAsync }  from "../actions/category";
import Comment from "./Comment";
import AlertContainer from "react-alert"

class Article extends Component {
  constructor ({match}) {
    super();        
    this.state = {
      articleModalOpen: false,
      commentModalOpen: false,
      article: {},
      comment: {},
      commentUpdate: false,
      redirectAfterDelete: false
    }

    this.alertOptions = {
      offset: 14,
      position: "bottom left",
      theme: "dark",
      time: 2000,
      transition: "scale"
    };
  }

  openArticleModal() { 
    this.setState({ articleModalOpen: true});
  }

  closeArticleModal() { 
    this.setState({ articleModalOpen: false});
  }


  openCommentModal (comment, isUpdate) {
    this.setState({
      commentModalOpen: true,
      comment,
      commentUpdate: isUpdate
    });
  }

  closeCommentModal () {
    this.setState({
      commentModalOpen: false,
      comment: {},
      commentUpdate: false
    });
  }

  addComment(comment) {
    if (this.state.commentUpdate) {
      this.props.updateComment(comment);
      this.showMsg("Comment updated");
    } else {
      comment.voteScore = 1;
      this.props.addComment(comment);
      this.showMsg("Comment added");
    }
  }  

  showMsg (msg) {
    this.msg.show(msg, { time: 2000, type: "success"});
  }
  
  deleteComment (id) {
    this.props.deleteComment(id);
    this.showMsg("Comment deleted");
  }

  updateArticle (article) {
    this.props.updateArticle(article);
    this.showMsg("Article updated");
  }

  deleteArticle(id) {
    this.props.deleteArticle(id);
    console.log("Deleted...", id);
    this.setState({redirectAfterDelete: true});
  }

  voteArticle (vote) {
    let option = {option: vote};
    this.props.voteArticle(this.props.articles[0].id, option);
  }

  voteComment (id, vote) {
    let option = {option: vote};
    this.props.voteComment(id, option);
  }

  getReadableDate (timestamp) {
    return new Date(timestamp).toISOString()
  }


  componentWillMount() {
    this.props.getCategories()
    this.props.getArticle(this.props.match.params.id);
  }
  
  componentDidMount() {
    console.log("In Did mount ");
  }

  render() {

    if (this.state.redirectAfterDelete) {
      return <Redirect push to="/deleted"/>;
    }

    if (this.props.articles.length === 0) {
      return <Redirect push to="/404"/>;
    }

    const article = this.props.articles[0];
    const comments = this.props.comments;

    return (

      <div className="article">
          <h2>{article.title}</h2>
          <div className="category"><i className="fa fa-tag"></i>  {article.category}</div>
          <div className="body">
           {article.body}
           <div className="articleData">
           <i className="fa fa-star"></i> {article.voteScore} - <i className="fa fa-user"></i> {article.author}  -
           - <i className="fa fa-calendar"></i> {this.getReadableDate(article.timestamp)}
           <span className="span-button"><a  onClick={() => this.deleteArticle(article.id)}><i className="fa fa-trash"></i> delete</a></span>
           <span className="span-button">
             <a  onClick={() => (this.voteArticle("upVote"))} title="vote up"><i className="fa fa-thumbs-o-up" aria-hidden="true" ></i>Up</a>
             <a  onClick={() => (this.voteArticle("downVote"))} title="vote down"><i className="fa fa-thumbs-o-down" aria-hidden="true" ></i>Down</a>
          </span>
          <span className="span-button">
             <a  onClick={this.openArticleModal}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Update</a>
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
          className="modal"
          overlayClassName="overlay"
          isOpen={this.state.articleModalOpen}
          onRequestClose={this.closeArticleModal}
          contentLabel="Modal"
        >
         <ArticleModal title="Update Article" onCreateArticle={this.updateArticle} categories={this.props.categories} article={article} closeArticleModal={this.closeArticleModal} />
        </Modal>

          <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={this.state.commentModalOpen}
          onRequestClose={this.closeCommentModal}
          contentLabel="Modal"
        >
         <CommentModal article={article} comment={this.state.comment} onCreateComment={this.addComment} closeCommentModal={this.closeCommentModal} />
        </Modal>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        </div>
    )
  }
}

// maps Redux state to our props
function mapStateToProps (state, props) {
  console.log("In map state to props", state.article.articles);
  return {
    articles: state.article.articles,
    comments: state.comment.comments.filter(p => p.parentId === props.match.params.id),
    categories: state.category.categories
  }
}

function mapDispatchToProps (dispatch) {
  console.log("In dispatc to props");
  return {
    getCategories: () => dispatch(getCategoriesAsync()),
    getArticle: (id) => dispatch(getArticleAsync(id)),
    getByArticle: (id) => dispatch(getByArticleAsync(id)),
    addComment: (comment) => dispatch(addCommentAsync(comment)),
    updateComment: (comment) => dispatch(updateCommentAsync(comment)),
    deleteComment: (id) => dispatch(deleteCommentAsync(id)),
    deleteArticle: (id) => dispatch(deleteArticleAsync(id)),
    voteArticle: (id, vote) => dispatch(voteArticleAsync(id,vote)),
    voteComment: (id, vote) => dispatch(voteCommentAsync(id,vote)),
    updateArticle: (article) => dispatch(updateArticleAsync(article))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)

