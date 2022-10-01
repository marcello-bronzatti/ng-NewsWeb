import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  articles:any =[];  

  constructor(private _service : NewsapiserviceService) { }

  ngOnInit(): void {
    this._service.businessNews().subscribe((result=> {
      this.articles = result.articles;
    }));
  }

}
