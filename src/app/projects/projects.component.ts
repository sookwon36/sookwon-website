import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sourcePath =
    "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf";
  fileName = "sample.pdf";

}
