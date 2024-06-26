import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetails } from '../shared/project-details';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project = {} as ProjectDetails;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}
}
