import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic form';
  name="peter"
  disable=false;
  color="orange";
  data="submitted";
  display=true;
parentData = { hero: "vijay devarakonda", age: 34};

onDataChange(updatedData: any){
  this.parentData = updatedData;
}
  showContent: boolean = true; // Set this property based on your condition
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedDay: string = 'monday';
  today=Date();
  user={
    name: 'spurthi kommineni',
    age:27
  }
  getVal(item:any)
  {
    console.warn(item);
  }

  toggle()
  {
    this.display=!this.display;
  }
  city="Hyderabad";
  isactive:boolean=false;
  applyC1:boolean= false;
  updateCity(){
    this.city="banglore"
  }
  counter:number=0;


increement(){
  this.counter+=1
}
  updateColor()
{
  this.color="skyblue";
}
getData(data:NgForm)
{
  console.warn(data)
}
}

