import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNote, addNote, updateNote } from '../actions'
import '../App.css';

class NoteForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      note: {
        content : '',
        timestamp: Date.now(), 
        id: props.match.params.id,
      }
    }
  }
  
  handleContentChange = (event) => {
    this.setState({ 
      note : { ...this.state.note, 
                  content: event.target.value}
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.note.id === undefined) 
      this.props.addNote(this.state.note);
    else
      this.props.updateNote(this.state.note);
  }

  componentDidMount = () => {
    const id = this.props.match.params.id || '';
   // this.props.getNote(id);
    if (id) {
     /* this.props.getNote(id).then( (note) =>
      this.setState({
        content: note.content
      })
    );*/
    }
    console.log('Mount with ', id, ' and ', this.state);
  }

  render() {
    const note = this.props.note;
    return (
          <div className="NoteForm">
          <form onSubmit={this.handleSubmit}>
            <div><label>Task</label></div>
            <div>
              <textarea 
              name="content" 
              value={this.state.content}
              onChange={this.handleContentChange}></textarea> 
            </div>
            <div>
             <input type="submit" value="Add Note" />
            </div>
            </form>
          </div>
    );
  }
}
function mapStateToProps (state, props) {
  return {
    notes: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getNote: (id) => dispatch(getNote(id)),
    addNote: (note) => dispatch(addNote(note)),
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);

