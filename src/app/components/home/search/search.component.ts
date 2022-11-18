import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_CONST } from 'src/app/constants/pathConst';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{


constructor(
  private router:Router
){

}
  ngOnInit(): void {
  }
  public navigate(){
  this.router.navigate([PATH_CONST.INSERT + '/null']);
  }
}
