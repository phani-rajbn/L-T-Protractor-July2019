import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.css']
})
export class SimpleExampleComponent implements OnInit {
  title : string; 
  info : string;
  constructor() { }


  ngOnInit() {
    this.title = "Simple Example";
    this.info = "Testing Paragraph for the example";
  }

}
