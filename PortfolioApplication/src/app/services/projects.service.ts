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
      description:
        'This is an E-Commerce web site which include customer, seller, administrator parts \
         I included all the basic functionalities of a E-Commerce site including creating an account, cart option, order history and payments.\
         I mostly acquired with full-stack development from it. I used react for frontend development and nodeJS and expressJS for server side development.\
         and I used mongoDB as my database.\
         I implemented a payment gateway(paypal) and I wish to add analytics using graphs.',
      projectLink: 'https://github.com/lakmalnanayakkara/amazona',
      technologies: [Tag.MONGODB, Tag.EXPRESS, Tag.REACT, Tag.NODEJS],
      images: [
        '../../assets/amazona/image1-i.png',
        '../../assets/amazona/image1-ii.png',
        '../../assets/amazona/image2.png',
        '../../assets/amazona/image3.png',
        '../../assets/amazona/image4-i.png',
        '../../assets/amazona/image4-ii.png',
        '../../assets/amazona/image5.png',
        '../../assets/amazona/image6.png',
        '../../assets/amazona/image7.png',
        '../../assets/amazona/image8.png',
        '../../assets/amazona/image9.png',
        '../../assets/amazona/image10.png',
        '../../assets/amazona/image11.png',
      ],
    },
    {
      id: 2,
      name: 'Sales POS backend project',
      summary:
        'This is an backend project with SpringBoot and I used MySQL as database.',
      description:
        'This is an ongoing backend project with SpringBoot.\
         In here I wish to gain about backend side operations and fundamentals of SpringBoot framework. \
         I already used postman for testing and I wish to use swagger UI for further testing.\
         As well as I wish to create a frontend for this using reactJS.',
      projectLink:
        'https://github.com/lakmalnanayakkara/SalesPOSsystem-backend-SpringBoot',
      technologies: [Tag.SPRING_BOOT, Tag.MYSQL],
      images: [],
    },
    {
      id: 3,
      name: 'CRUD Application React SpringBoot',
      summary:
        'This is a CRUD operation application with  React, SpringBoot with MySQL.',
      description:
        'This is a CRUD operation application with frontend and backend.\
         React used to front end and SpringBoot for backend.\
         Primarily I gained knowledge about some react hooks, react mapping, react bootstarp, handler mappings in SpringBoot.\
         As well as I used MySQL for create database.',
      projectLink:
        'https://github.com/lakmalnanayakkara/SpringBoot-backend-With-React-Front-End',
      technologies: [Tag.SPRING_BOOT, Tag.REACT, Tag.MYSQL],
      images: [
        '../../assets/CRUD_1/image1.png',
        '../../assets/CRUD_1/image2.png',
        '../../assets/CRUD_1/image3.png',
        '../../assets/CRUD_1/image4.png',
        '../../assets/CRUD_1/image5.png',
      ],
    },
    {
      id: 4,
      name: 'CRUD Application React .NET',
      summary:
        'This is a CRUD operation application with  React, .NET with MSSQL.',
      description:
        'This is a CRUD operation application with front end and backend.\
         React used to frontend and .NET for backend. Here also I gained knowledge about some react hooks, react mapping, react bootstarp and handler mappings in .NET.\
         As well as I used Microsoft SQL Server for create database and I used SQL server management tool for access it .',
      projectLink:
        'https://github.com/lakmalnanayakkara/.NET-backend-With-React-Front-End',
      technologies: [Tag.DOT_NET, Tag.REACT, Tag.MSSQL],
      images: [
        '../../assets/CRUD_2/image1.png',
        '../../assets/CRUD_2/image2.png',
        '../../assets/CRUD_2/image3.png',
        '../../assets/CRUD_2/image4.png',
        '../../assets/CRUD_2/image5.png',
      ],
    },
    {
      id: 5,
      name: 'Login Application',
      summary:
        'This is a login application which is being developed by using MERN stack.',
      description:
        'This is an ongoing login web application. \
         In here I wish to implement user login, user registration, user profile update, reset password with email verification.\
         As well as I wish to use JWT for security purposes in this application.',
      projectLink: 'https://github.com/lakmalnanayakkara/Login_App-MERN-stack',
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
