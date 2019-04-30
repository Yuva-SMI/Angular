import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Aboutus',
        link: './aboutus',
        index: 1
      }, {
        label: 'Article',
        link: './article',
        index: 2
      }, {
        label: 'Contactus',
        link: './contactus',
        index: 3
      },
      {
        label: 'Block',
        link: './block',
        index: 4
      },{
        label: 'Contact',
        link: './contact/contact',
        index: 5
      },{
        label: 'Upload Files',
        link: './upfiles',
        index: 6
      },
      {
        label: 'Post',
        link: './post/list',
        index: 7
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
