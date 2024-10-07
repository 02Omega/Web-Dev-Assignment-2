import React, { useState } from 'react';

const templates = ['Coffee Shop', 'Restaurant', 'Foodly'];

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * templates.length);
    setSelectedTemplate(templates[randomIndex]);
  };

  return (
    <div className="template-selector">
      <h3>Select a Template</h3>
      <button className="btn btn-primary" onClick={handleRandomSelect}>
        Randomly Select Template
      </button>
      {selectedTemplate && (
        <div className="mt-3">
          <h4>Selected Template: {selectedTemplate}</h4>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
