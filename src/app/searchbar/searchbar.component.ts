import { Component, OnInit } from '@angular/core';
import { EvenementserviceService } from '../Service/evenementservice.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  Zoekopdracht: string;
  Search: number;
  random: string;

  constructor(private service: EvenementserviceService) { }

  ngOnInit() {
  }

  findByID(id: number){
    this.service.findById(this.Search).subscribe(data => {
      this.random = data.naamEvent;
    })

  }
}
