import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interesting-facts',
  templateUrl: './interesting-facts.component.html',
  styleUrls: ['./interesting-facts.component.scss']
})
export class InterestingFactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  facts:any = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];
}
