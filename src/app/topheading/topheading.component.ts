import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  articles:any = [];

  ngOnInit(): void {

    this._service.topHeading().subscribe((result => {
      this.articles = result.articles;
    }))
  }

}
