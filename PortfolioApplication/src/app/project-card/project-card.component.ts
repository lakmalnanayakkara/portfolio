import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetails } from '../shared/project-details';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project = {} as ProjectDetails;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openProjectModal() {
    const modalOption: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    };
    this.bsModalRef = this.modalService.show(
      ProjectModalComponent,
      modalOption
    );
  }
}
