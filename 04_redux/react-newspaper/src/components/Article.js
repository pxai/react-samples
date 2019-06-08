import React, { Component } from "react"
import Modal from "react-modal"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ArticleModal from "./ArticleModal";
import { getByArticleAsync } from "../actions/comment";

class Article extends Component {

	constructor (props) {
		super (props);
		this.state = {articleModalOpen: false};
	}

	openArticleModal () {
		this.setState ({articleModalOpen: true});
	}

	closeArticleModal () {
		this.setState ({articleModalOpen: false});
	}

	getReadableDate (timestamp) {
		return new Date (timestamp).toISOString ()
	}

	updateArticle (article) {
		this.props.updateArticle (article);
	}

	deleteArticle () {
		this.props.deleteArticle (this.props.article.id);
	}

	componentDidMount () {
		this.props.getComments (this.props.article.id);
	}

	render () {
		const article = this.props.article;
		return (
			<div className="article">
				<h2><Link to={`/article/${article.category}/${article.id}`}>{article.title}</Link></h2>
				<div className="category"><i className="fa fa-tag"></i> {article.category}</div>
				<div className="body">
					{article.body}
					<div className="articleData">
						<i className="fa fa-star"></i> {article.voteScore} - <i className="fa fa-user"></i> {article.author} -
						- <i className="fa fa-calendar"></i> {this.getReadableDate (article.timestamp)}
						<span className="span-button">
             <a onClick={this.deleteArticle.bind (this)}><i className="fa fa-trash"></i> delete</a>
           </span>
						<span className="span-button">
             <a onClick={() => (this.props.voteArticle (article.id, "upVote"))} title="vote up"><i
							 className="fa fa-thumbs-o-up" aria-hidden="true"></i>Up</a>
             <a onClick={() => (this.props.voteArticle (article.id, "downVote"))} title="vote down"><i
							 className="fa fa-thumbs-o-down" aria-hidden="true"></i>Down</a>
          </span>
						<span className="span-button">
             <a onClick={this.openArticleModal.bind (this)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Update</a>
          </span>
					</div>
				</div>
				<div className="comments">
					<strong><i className="fa fa-comment"></i> Comments: </strong>
					{this.props.comments.length}
				</div>
				<Modal
					className="modal"
					overlayClassName="overlay"
					isOpen={this.state.articleModalOpen}
					onRequestClose={this.closeArticleModal.bind (this)}
					contentLabel="Modal"
				>
					<ArticleModal title="Update Article" onCreateArticle={this.updateArticle.bind (this)}
												categories={this.props.categories} article={article}
												closeArticleModal={this.closeArticleModal.bind (this)}/>
				</Modal>
			</div>
		)
	}
}

// maps Redux state to our props
function mapStateToProps (state, props) {
	console.log ("No comment: ", state.comment.comments);
	return {
		comments: state.comment.comments.filter (comment => comment.parentId === props.article.id)
	}
}

function mapDispatchToProps (dispatch) {
	return {
		getComments: (id) => dispatch (getByArticleAsync (id))
	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
) (Article)

