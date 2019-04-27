import React, { Component } from "react";
import Modal from "react-modal"
import { connect } from "react-redux";
import Article  from "./components/Article";
import ArticleModal from "./components/ArticleModal";
import "./App.css";
import  { getArticlesAsync, addArticleAsync, voteArticleAsync, updateArticleAsync, deleteArticleAsync, getArticlesByCategory }  from "./actions/article";
import  { getCategoriesAsync }  from "./actions/category";
import AlertContainer from "react-alert"

class ArticleList extends Component {
  state = {
    category: "",
    articles: {},
    articleModalOpen: false,
    sortByDate: 0,
    sortByVotes: 0
  }

  alertOptions = {
    offset: 14,
    position: "bottom left",
    theme: "dark",
    time: 3000,
    transition: "scale"
  }

  openArticleModal = () => { this.setState(() => ({ articleModalOpen: true})) }

  setSortByDate (e) {
    e.preventDefault();
    this.setState({ sortByVotes: 0}); 
    const newValue = this.state.sortByDate===0?true:!this.state.sortByDate;
    this.setState({ sortByDate: newValue}); 
  }
  
  setSortByVotes (e) {
    e.preventDefault();
    this.setState({ sortByDate: 0}); 
    const newValue = this.state.sortByVotes===0?true:!this.state.sortByVotes;
    this.setState({ sortByVotes: newValue});
  }

  closeArticleModal = () => {
    this.setState(() => ({
      articleModalOpen: false
    }))
  }


  addArticle = (article) => {
    article.voteScore = 1;
    this.props.addArticle(article);
    this.showMsg("Article successfully created!");
  }
  
  updateArticle = (article) => {
    this.props.updateArticle(article);
    this.showMsg("Article updated");
  }

  voteArticle = (id, vote) => {
    let option = {option: vote};
    this.props.voteArticle(id, option);
  }

  deleteArticle = (id) => {
    console.log("Delete article: " , id);
    this.props.deleteArticle(id);
    this.showMsg("Article was deleted!");
  }

  showMsg (msg) {
    this.msg.show(msg, { time: 2000, type: "success"});
  }
  
  getByCategory = (e,category) => {
    e.preventDefault();
   // this.props.getArticlesByCategory(category);
    this.setState({category: category});
  }

  componentWillMount() {
    this.props.getCategories()
    this.props.getArticles()
   console.log("Coming back with...",this.props.match);
  }

  componentDidMount() {
    if (this.props.match.url === "/deleted") {
      this.showMsg("Article deleted!");
    }
  }

  render() {
    var articleListByCategory = {};
    const currentCategory = this.props.match.params.category;
    var tmpArticleList = {};
    const emptyArticle = {id: 0, title: "", author: "", category: "", body: ""};

    if (!this.props.match.params.category) {
      articleListByCategory = this.props.articles;
    } else {
      articleListByCategory = this.props.articles.filter(article => article.category === this.props.match.params.category);
    }

    if (this.state.sortByDate !== 0) {
      if (this.state.sortByDate) {
        tmpArticleList = articleListByCategory.sort((a, b) => a.timestamp < b.timestamp);
      } else {
        tmpArticleList = articleListByCategory.sort((a, b) => a.timestamp > b.timestamp);
      }
    } else if (this.state.sortByVotes !== 0) {
      if (this.state.sortByVotes) {
        tmpArticleList = articleListByCategory.sort((a, b) => a.voteScore < b.voteScore);
      } else {
        tmpArticleList = articleListByCategory.sort((a, b) => a.voteScore > b.voteScore);
      }
    } else {
      tmpArticleList = articleListByCategory;
    }
    
    const articleList = tmpArticleList;
    const voidMsg = (!articleList.length)?`No articles for category ${currentCategory}`:"";
   
    return (
      <div className="app">
          <div>
            <h2>Articles {this.state.category}</h2>
            <div className="row">
              <div className="three columns">
              <button
                className="buttton-primary"
                onClick={this.openArticleModal}>
                 + Add Article
              </button>
              </div>
              <div className="categories four columns">Sort by:  
                <span className="span-button">  <a className="category" href="" onClick={(e) => this.setSortByDate(e)}>By date</a> </span>
                <span className="span-button">  <a className="category" href="" onClick={(e) => this.setSortByVotes(e)}>By votes</a> </span>
             </div>
              <div className="categories five columns">Categories: 
                { 
                   this.props.categories.map((category) =>
                   (
                        <span key={category.name}>
                          <a className="category" href={category.name} >
                            <span>{category.name}</span>
                           </a>
                        </span>

                   ))}         
              </div>
              </div>     
              <div className="articles">
                {voidMsg}
              { 
                   articleList.map((article) =>
                   (
                    <Article  key={article.id} article={article} categories={this.props.categories}  voteArticle={this.voteArticle} updateArticle={this.updateArticle} deleteArticle={this.deleteArticle} />
                   ))
                   }    

              </div>
            
          </div>
      

        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={this.state.articleModalOpen}
          onRequestClose={this.closeArticleModal}
          article={emptyArticle}
          contentLabel="Modal"
        >
          <ArticleModal  title="Create Article" onCreateArticle={this.addArticle} categories={this.props.categories} closeArticleModal={this.closeArticleModal} />
        </Modal>

        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}

// maps Redux state to our props
function mapStateToProps (state, props) {
  return {
    articles: state.article.articles,
    categories: state.category.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getCategoriesAsync()),
    getArticles: () => dispatch(getArticlesAsync()),
    getArticlesByCategory: (category) => dispatch(getArticlesByCategory(category)),
    addArticle: (article) => dispatch(addArticleAsync(article)),
    deleteArticle: (id) => dispatch(deleteArticleAsync(id)),
    voteArticle: (id, vote) => dispatch(voteArticleAsync(id,vote)),
    updateArticle: (article) => dispatch(updateArticleAsync(article))
  }
}
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList)

