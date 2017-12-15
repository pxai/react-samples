import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getNotesAsync, getNoteAsync, addNoteAsync, updateNoteAsync, deleteNoteAsync } from '../actions'
import Note from './Note'
import '../App.css';

class Notes extends Component {
  change = () => {
    console.log('Changed.');
    this.props.appChangeName(this.refs.name.value);
  }

  render() {
    return (
      <div className="App">
        <div>
        {
          this.props.notes.map((note) => 
            <Note note={note} key={note.id} delete={this.props.deleteNote} />
          ) 
        }
      </div>
      </div>
    );
  }
}

function mapStateToProps (state, props) {
  console.log('Notes.js', state)
  return {
    notes: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getNotes: () => dispatch(getNotesAsync()),
    getNote: (id) => dispatch(getNoteAsync(id)),
    addNote: (note) => dispatch(addNoteAsync(note)),
    updateNote: (note) => dispatch(updateNoteAsync(note)),
    deleteNote: (id) => dispatch(deleteNoteAsync(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
