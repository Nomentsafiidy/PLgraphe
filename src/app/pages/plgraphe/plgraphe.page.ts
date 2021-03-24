import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plgraphe',
  templateUrl: './plgraphe.page.html',
  styleUrls: ['./plgraphe.page.scss'],
})
export class PlgraphePage implements OnInit {
  public var1: string;
  public var2: string;

  constructor() {}

  ngOnInit(): void {}

  public contrainteChange(event: any) {
    console.log('event', event);
    console.log('event value', event.target.value);
  }
}
