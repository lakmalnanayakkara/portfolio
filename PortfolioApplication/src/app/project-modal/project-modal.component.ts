import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectDetails } from '../shared/project-details';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
})
export class ProjectModalComponent {
  project = {} as ProjectDetails;
  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {}
}
