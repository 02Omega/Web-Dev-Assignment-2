import React, { useState } from 'react';

const templates = ['Coffee Shop', 'Restaurant', 'Foodly'];

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleRandomSelection = () => {
    const randomIndex = Math.floor(Math.random() * templates.length);
    setSelectedTemplate(templates[randomIndex]);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Select a Random Template</h2>
          <button className="btn btn-primary" onClick={handleRandomSelection}>
            Select Random Template
          </button>
          {selectedTemplate && (
            <div className="mt-3 alert alert-info">
              Selected Template: <strong>{selectedTemplate}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
