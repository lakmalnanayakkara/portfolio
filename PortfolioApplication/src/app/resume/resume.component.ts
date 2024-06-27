import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isWorkExperienceOpen = false;
  isEducationOpen = false;
  isSkillsOpen = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Pasindu Lakmal - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/P99.png');
    link.setAttribute('download', 'P99.png');
    link.click();
    link.remove();
  }
}
