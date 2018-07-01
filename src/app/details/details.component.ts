import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: String
  user: Object

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => this.userId = params.id
    )
  }

  ngOnInit() {
    this.data.getUserDetails(this.userId).subscribe(
      data => this.user = data
    )
  }

}
