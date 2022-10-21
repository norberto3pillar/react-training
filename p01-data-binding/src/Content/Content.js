import React, { useState } from "react";
import "./Content.style.css";

var showEditor = true;

const publicationState = {
  title: "Title",
  content: "Contenido primario",
};

const visibleState = {
  isVisible: true
}

function Content() {
  const [publication, setPublication] = useState(publicationState);
  const [visibility, setVisibility] = useState(visibleState);

  const showHide = (e) =>
  {
    showEditor = !showEditor;
    
    setVisibility((current) => ({
      ...current,
      ...{ isVisible: showEditor },
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPublication((current) => ({
      ...current,
      ...{ [name]: value },
    }));
  };

  return (
    <div className="container">
      <div>
        <button onClick={showHide}>{visibility.isVisible ? "Ocultar" : "Mostar"}</button>
      </div>
      {visibility.isVisible && (
        <div className="card editor">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={publication.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea title="Algo"
              rows={7}
              name="content"
              value={publication.content}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      <div className="card content">
        <h3>{publication.title}</h3>
        <p>{publication.content}</p>
      </div>
    </div>
  );
}

export default Content;
