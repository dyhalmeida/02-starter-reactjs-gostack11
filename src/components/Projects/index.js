import React, { useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState(['Node JS', 'Angular']);

  const handleAddProduct = () => {
    setProjects([...projects, `React JS ${Date.now()}`]);
  };

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProduct}>
        Adicionar
      </button>
    </div>
  );
}
