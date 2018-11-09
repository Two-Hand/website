import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input() email : String;
  @Input() password: String;

  constructor() { }

  ngOnInit() {
  }

}
