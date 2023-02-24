import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({

  selector:'app-property-card',
  //template:'<h1>hello zidan</h1>'
  templateUrl:'Property-Card.Component.html',
  //styles :[' h1 {font-size:20px}']
  styleUrls:['Property-Card.Component.css']

})
export class PropertyCardComponent implements OnInit{


  ngOnInit(): void {

  }


  property:any = {
    'ID':1,
    'Name':'Zidan House',
    'Type':'house',
    'Price':'12000'
  }


}
