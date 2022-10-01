import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css'],
})
export class TechnewsComponent implements OnInit {
  articles: any = [];

  constructor(private _service: NewsapiserviceService) {}

  ngOnInit(): void {
    this._service.techNews().subscribe((result) => {
      this.articles = result.articles;
    });
  }
}
