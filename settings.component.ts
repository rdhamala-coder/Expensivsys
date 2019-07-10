import { Component, OnInit } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  item:any;
  budget:any;
  budgetdata: Array<any> = [];
  itemdata: Array<any> = [];
  items = [{name: 'bread'}, {name: 'bread'}, {name: 'bread'}];
  constructor(private router:Router) { 
    this.item = this.items[1];
  }

  ngOnInit() {
  }
  home_page(){
    this.router.navigate(['home'])
  }
  updtotalbudget(budget){
    this.budget=budget;
    this.budgetdata.push({ 'budget': this.budget})
    console.log("budgetinfo",JSON.stringify(this.budgetdata));
    localStorage.setItem("budgetinfo_info", JSON.stringify(this.budgetdata));  
  }
  additems(item){
    this.item=item;
    this.itemdata.push({ 'budget': this.item})
    console.log("item_info",JSON.stringify(this.itemdata));
    localStorage.setItem("item_info", JSON.stringify(this.itemdata)); 


  }

}
