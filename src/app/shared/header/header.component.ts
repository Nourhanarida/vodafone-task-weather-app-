import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  linkurl  :any
  constructor(private router:Router ,private url:LocationStrategy) {
  
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (this.url.path() === "/") {
        this.linkurl = "/";
        console.log('yes')
      } else {
        this.linkurl = "";
      }
    });
  }

}
