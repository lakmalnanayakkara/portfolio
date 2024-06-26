import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectDetails } from '../shared/project-details';
import { Tag } from '../utils/Tag';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: ProjectDetails[] = [];
  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Pasindu Lakmal - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
