import { Injectable } from '@angular/core';
import { ProjectDetails } from '../shared/project-details';
import { Tag } from '../utils/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: ProjectDetails[] = [
    {
      id: 1,
      name: 'E-Commerce Web-Application',
      summary:
        'This is an E-Commerce web application which was developed by using MERN stack.',
      description: '',
      projectLink: '',
      technologies: [Tag.MONGODB, Tag.REACT, Tag.NODEJS],
      images: [],
    },
    {
      id: 2,
      name: 'Sales POS backend project',
      summary:
        'This is an backend project with SpringBoot and I used MySQL as database.',
      description: '',
      projectLink: '',
      technologies: [Tag.SPRING_BOOT, Tag.MYSQL],
      images: [],
    },
    {
      id: 3,
      name: 'CRUD Application React SpringBoot',
      summary:
        'This is a CRUD operation application with  React, SpringBoot with MySQL.',
      description: '',
      projectLink: '',
      technologies: [Tag.SPRING_BOOT, Tag.REACT, Tag.MYSQL],
      images: [],
    },
    {
      id: 4,
      name: 'CRUD Application React .NET',
      summary:
        'This is a CRUD operation application with  React, .NET with MySQL.',
      description: '',
      projectLink: '',
      technologies: [Tag.DOT_NET, Tag.REACT, Tag.MYSQL],
      images: [],
    },
    {
      id: 5,
      name: 'Login Application',
      summary:
        'This is a login application which is being developed by using MERN stack.',
      description: '',
      projectLink: '',
      technologies: [Tag.MONGODB, Tag.REACT, Tag.NODEJS],
      images: [],
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): ProjectDetails {
    let project = this.projects.find((project) => project?.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id ' + id);
    }
    return project;
  }
}
