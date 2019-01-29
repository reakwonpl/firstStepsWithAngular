import { Component, OnInit } from '@angular/core';
import {DataService} from '../../Services/data.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//name = 'RkW';
name:string;
age:number;
email:string;
address:Address;
//{
  // street:string,
  // city:string,

//};
//hobbies:string[];
hobbies:any[];
hello:any;
posts:Post[];
isEdit:boolean = false;
  constructor(private _dataService:DataService) { 
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name = "RKW";
    this.age = 23;
    this.email = 'rkw@mail.com';
    this.address = {
      street:'HajDuszaBoslo',
      city: 'Andrzeju'
    };
    this.hobbies = ['Write Code','Playing games','Listen to music'];
    this.hello ="Ohayo mastah";

    this._dataService.getPosts().subscribe((posts) =>
    {
      // console.log(posts);
      
    this.posts  = posts as any;
   
    })
  }

  onClick()
  {
   this.name = 'rkw';  
  }

  addHobby(hobby)
  {
    //unshift to samo co push ale dodaje na poczatek a nie na koniec
    this.hobbies.unshift(hobby);
    
    return false;
  }
  deleteHobby(hobby)
  {
    for(let i = 0; i< this.hobbies.length;i++)
    {
      if(this.hobbies[i] == hobby)
      {        
        this.hobbies.splice(i,1);
      }
    }
    return false;
  }

  toggleEdit()
  {
    this.isEdit = !this.isEdit;
    
  }

}

interface Address{
  street:string,
  city:string,
}

interface Post
{
userId:number,
id:number,
title:string,
body:string
};
