import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_CONST } from 'src/app/constants/pathConst';
//template driven collega una variabile al campo input

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  //messa nel html per associare il valore del campo inputa qst variabile
  public search: string = '';

  @Output() emitSendSearch: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}
  ngOnInit(): void {}
  public navigate() {
    this.router.navigate([PATH_CONST.INSERT + '/null']);
  }

  public research() {
    this.emitSendSearch.emit(this.search);
  }
}
