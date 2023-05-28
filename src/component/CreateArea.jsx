import React, { useState } from "react";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';



function CreateArea(props) {

  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [click , setclick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  function gotClick()
  {
     setclick(true);
    
  //  CreateArea();
  }

  return (
    <div>
      <form className="create-note">
     {  click && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />) }

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick = {gotClick}
          rows={ click?"3":"1"}
        />
        <Zoom in ={ click ? true:false }>
       <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
