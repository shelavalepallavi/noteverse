import React, { useState } from 'react';
import NoteContext from "./NoteContext";

const NoteState = (props) => {
 


  const host = process.env.REACT_APP_BACKEND_URL
  
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //get all  notes
  const getNotes = async () => {
    ///API CALL for fetch all notes
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json()
    setNotes(json)

  }

  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    ///API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json()
    setNotes(notes.concat(note))
  }

  
  // Delete a note
  const deleteNote = async (id) => {
    // API CALL
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
  
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }
  


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = await response.json()
   
    

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes)
  }



  return (
    // <NoteContext.Provider value={{state, update}}>
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
