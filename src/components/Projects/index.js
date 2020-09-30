import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(({ data }) => setProjects(data));
  }, []);

  const handleAddProduct = () => {};

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li key={project.id}>
            {project.title} - {project.owner}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProduct}>
        Adicionar
      </button>
    </div>
  );
}
