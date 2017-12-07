import React, { Component } from 'react';
import Modal from 'react-modal'
import { connect } from 'react-redux';
import News  from './components/News';
import NewsModal from './components/NewsModal';
import './App.css';
import  { getNewssAsync, addNewsAsync, voteNewsAsync, updateNewsAsync, deleteNewsAsync, getNewssByCategory }  from './actions/news';
import  { getCategoriesAsync }  from './actions/category';
import AlertContainer from 'react-alert'

class NewsList extends Component {
  state = {
    category: '',
    news: {},
    newsModalOpen: false,
    sortByDate: 0,
    sortByVotes: 0
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 3000,
    transition: 'scale'
  }

  openNewsModal = () => { this.setState(() => ({ newsModalOpen: true})) }

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

  closeNewsModal = () => {
    this.setState(() => ({
      newsModalOpen: false
    }))
  }


  addNews = (news) => {
    news.voteScore = 1;
    this.props.addNews(news);
    this.showMsg('News successfully created!');
  }

  updateNews = (news) => {
    this.props.updateNews(news);
    this.showMsg('News updated');
  }

  voteNews = (id, vote) => {
    let option = {option: vote};
    this.props.voteNews(id, option);
  }

  deleteNews = (id) => {
    console.log('Delete news: ' , id);
    this.props.deleteNews(id);
    this.showMsg('News was deleted!');
  }

  showMsg (msg) {
    this.msg.show(msg, { time: 2000, type: 'success'});
  }

  getByCategory = (e,category) => {
    e.preventDefault();
   // this.props.getNewssByCategory(category);
    this.setState({category: category});
  }

  componentWillMount() {
    this.props.getCategories()
    this.props.getNewss()
   console.log('Coming back with...',this.props.match);
  }

  componentDidMount() {
    if (this.props.match.url === '/deleted') {
      this.showMsg('News deleted!');
    }
  }

  render() {
    var newsListByCategory = {};
    const currentCategory = this.props.match.params.category;
    var tmpNewsList = {};
    const emptyNews = {id: 0, title: '', author: '', category: '', body: ''};

    if (!this.props.match.params.category) {
      newsListByCategory = this.props.news;
    } else {
      newsListByCategory = this.props.news.filter(news => news.category === this.props.match.params.category);
    }

    if (this.state.sortByDate !== 0) {
      if (this.state.sortByDate) {
        tmpNewsList = newsListByCategory.sort((a, b) => a.timestamp < b.timestamp);
      } else {
        tmpNewsList = newsListByCategory.sort((a, b) => a.timestamp > b.timestamp);
      }
    } else if (this.state.sortByVotes !== 0) {
      if (this.state.sortByVotes) {
        tmpNewsList = newsListByCategory.sort((a, b) => a.voteScore < b.voteScore);
      } else {
        tmpNewsList = newsListByCategory.sort((a, b) => a.voteScore > b.voteScore);
      }
    } else {
      tmpNewsList = newsListByCategory;
    }

    const newsList = tmpNewsList;
    const voidMsg = (!newsList.length)?`No news for category ${currentCategory}`:"";

    return (
      <div className="app">
          <div>
            <h2>Newss {this.state.category}</h2>
            <div className="row">
              <div className="three columns">
              <button
                className="buttton-primary"
                onClick={this.openNewsModal}>
                 + Add News
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
              <div className="news">
                {voidMsg}
              {
                   newsList.map((news) =>
                   (
                    <News  key={news.id} news={news} categories={this.props.categories}  voteNews={this.voteNews} updateNews={this.updateNews} deleteNews={this.deleteNews} />
                   ))
                   }

              </div>

          </div>


        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.state.newsModalOpen}
          onRequestClose={this.closeNewsModal}
          news={emptyNews}
          contentLabel='Modal'
        >
          <NewsModal  title="Create News" onCreateNews={this.addNews} categories={this.props.categories} closeNewsModal={this.closeNewsModal} />
        </Modal>

        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}

// maps Redux state to our props
function mapStateToProps (state, props) {
  return {
    news: state.news.news,
    categories: state.category.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getCategoriesAsync()),
    getNewss: () => dispatch(getNewssAsync()),
    getNewssByCategory: (category) => dispatch(getNewssByCategory(category)),
    addNews: (news) => dispatch(addNewsAsync(news)),
    deleteNews: (id) => dispatch(deleteNewsAsync(id)),
    voteNews: (id, vote) => dispatch(voteNewsAsync(id,vote)),
    updateNews: (news) => dispatch(updateNewsAsync(news))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList)
