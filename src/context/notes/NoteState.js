import React, { useState } from 'react';
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // const s1 = {
  //   "name": "Harry",
  //   "class": "5b"
  // };
  // const [state, setState] = useState(s1)
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       "name": "cherry",
  //       "class": "10b"
  //     })
  //   }, 1000)

  // }


  const host = "http://localhost:4000"
  // const notesInitial = [
  //   {
  //     "_id": "66c9335064698b73f3a27f3b",
  //     "user": "66c87bd45ffa751c14479040",
  //     "title": "My title updated",
  //     "description": "Please wake up early updaated",
  //     "tag": "Browse",
  //     "date": "2024-08-24T01:11:44.424Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "66d1b3cd78533a1a1019i78bd7f",
  //     "user": "66c87bd45ffa751c14479040",
  //     "title": "welcome",
  //     "description": "Please wake up early",
  //     "tag": "personal",
  //     "date": "2024-08-30T11:58:05.442Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "66d1b3cd7853q2343a1a1019bd7f3",
  //     "user": "66c87bd45ffa751c14479040",
  //     "title": "welcome",
  //     "description": "Please wake up early",
  //     "tag": "personal",
  //     "date": "2024-08-30T11:58:05.442Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "66d1b3cd7138533a1a101qr9bd7f",
  //     "user": "66c87bd45ffa751c14479040",
  //     "title": "welcome",
  //     "description": "Please wake up early",
  //     "tag": "personal",
  //     "date": "2024-08-30T11:58:05.442Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "66d1b3cd78533a1a1019rqrbd7564f",
  //     "user": "66c87bd45ffa751c14479040",
  //     "title": "welcome",
  //     "description": "Please wake up early",
  //     "tag": "personal",
  //     "date": "2024-08-30T11:58:05.442Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "66d1b3cd78533a12341a101fawr9bd7f",
  //     "user": "66c87bd45ffa751c14479040",
  //     "title": "welcome",
  //     "description": "Please wake up early",
  //     "tag": "personal",
  //     "date": "2024-08-30T11:58:05.442Z",
  //     "__v": 0
  //   }

  // ]
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
    ///API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json);
    
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
    console.log(json);
    

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
