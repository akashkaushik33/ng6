import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl : String

  constructor(private route: Router) { 
    console.log('ROUTE', this.route)
    this.route.events.subscribe(
      ( _ : NavigationEnd) => {this.currentUrl = _.url; console.log("URLRLLL", _)}
    )
    this.currentUrl = this.route.url
  }

  ngOnInit() {
  }

}
