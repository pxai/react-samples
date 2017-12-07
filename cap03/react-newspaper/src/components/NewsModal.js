import React, { Component } from 'react'
import serializeForm from 'form-serialize';
import  {uniqueId}  from '../utils/uuid'

class NewsModal extends Component {
  handleSubmit =  (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash: true});
    values.timestamp = +Date.now();   // + makes valueOf to be returned
    values.id = this.props.news?this.props.news.id:uniqueId();
    if (this.props.onCreateNews)
        this.props.onCreateNews(values);

    this.props.closeNewsModal();
  }

  render() {
    console.log('Loaded news', this.props.news);
    const news = this.props.news || {id: 0, title: '', author: '', category: '', body: ''}
    const categories = this.props.categories;
    return (
      <div>
      <h3 className='subheader'>
        {this.props.title}
      </h3>
      <form onSubmit={this.handleSubmit}>
        <div >
            <label htmlFor="title">Title</label>
            <input className="u-full-width" placeholder="News title here..." name="title" id="title" defaultValue={news.title} type="text" />
        </div>
        <div className={ (news.id!==0)?'hidden-input':''}>
            <label htmlFor="author">Author</label>
            <input className="u-full-width" placeholder="Put yout name" name="author" id="author" defaultValue={news.author} type="text"  />
        </div>
        <div className={ (news.id!==0)?'hidden-input':''}>
              <label htmlFor="categoryName">Category</label>
              <select className="u-full-width" id="categoryName" name="category">
              {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
        </div>
        <div>
            <label htmlFor="body">News body</label>
            <textarea className="u-full-width" placeholder="I'm Batman, I'm awesome..." id="body" name="body"  defaultValue={news.body}></textarea>
        </div>
        <div>
        <button>{this.props.title}</button>
        </div>
</form>

    </div>
    )
  }
}


export default NewsModal;
