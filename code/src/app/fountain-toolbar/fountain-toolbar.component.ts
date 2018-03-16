import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NgRedux} from 'ng2-redux';
import {RETURN_TO_ROOT} from '../actions';
import {IAppState} from '../store';

@Component({
  selector: 'app-fountain-toolbar',
  templateUrl: './fountain-toolbar.component.html',
  styleUrls: ['./fountain-toolbar.component.css']
})
export class FountainToolbarComponent implements OnInit {
  @Output() detailsToggle = new EventEmitter<boolean>();

  public toggleDetails(){
    this.detailsToggle.emit(true);
  }

  public returnToRoot(){
    this.ngRedux.dispatch({type: RETURN_TO_ROOT})
  }

  constructor(
    private dialog: MatDialog,
    private ngRedux: NgRedux<IAppState>
  ) { }


  ngOnInit() {
  }

}