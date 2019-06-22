import React, { Component } from "react";
import { connect } from "react-redux"
import { getNotesAsync, deleteNoteAsync } from "../actions"
import Note from "./Note"
import "../App.css";

class Notes extends Component {
	componentWillMount = () => {
		this.props.getNotes ()
	}

	render () {
		return (
			<div className="App">
				<div>
					{
						this.props.notes.map ((note) =>
							<Note note={note} key={note.id} delete={this.props.deleteNote}/>
						)
					}
				</div>
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
		getNotes: () => dispatch (getNotesAsync ()),
		deleteNote: (id) => dispatch (deleteNoteAsync (id)),
	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
) (Notes);
