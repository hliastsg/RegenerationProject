import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-auth',
  templateUrl: './about-auth.component.html',
  styleUrls: ['./about-auth.component.scss']
})
export class AboutAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
