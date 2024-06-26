import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { ProjectDetails } from '../shared/project-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  project: ProjectDetails = {
    id: 0,
    name: '',
    summary: '',
    description: '',
    projectLink: '',
    images: [],
    technologies: [],
  };
  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Pasindu Lakmal - Home');
  }

  ngOnInit(): void {
    this.project = this.projectsService.getProjectById(1);
  }
}
