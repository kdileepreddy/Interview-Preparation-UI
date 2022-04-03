import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import vanillaTilt from 'vanilla-tilt';
// declare var VanillaTilt:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public radioValue!:any;
  public radioValue1!:any;
  public radioValue2!:any;
  @ViewChild('card') card!: ElementRef;
  constructor(private dataservice: DataService) {}
  public document:Document | undefined; 
  ngOnInit(): void {
    this.dataservice.pagedata$.next('Profile');
    vanillaTilt.init(document.querySelectorAll('.tilt') as any);
    
    const prevBtn:any = document.querySelector("#prev-btn");
const nextBtn:any = document.querySelector("#next-btn");
// const prevBtn1:any = document.querySelector(".book .paper #prev-btn1");
// const nextBtn1:any = document.querySelector(".book .paper #next-btn1");
// const prevBtn2:any = document.querySelector("#prev-btn2");
// const nextBtn2:any = document.querySelector("#next-btn2");

const book:any = document.querySelector("#book");

const paper1:any = document.querySelector("#p1");
const paper2:any = document.querySelector("#p2");
const paper3:any = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
// prevBtn1.addEventListener("click", goPrevPage);
// nextBtn1.addEventListener("click", goNextPage);
// prevBtn2.addEventListener("click", goPrevPage);
// nextBtn2.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning:any) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}



  }
  toHome() :void{
    document.getElementById("home")?.scrollIntoView({behavior:'smooth'});
  }
  toResume(): void{
    document.getElementById("resume")?.scrollIntoView({behavior:'smooth'});
    this.radioValue1='resume'; 
    
  }
  toProjects(): void{
    document.getElementById("projects")?.scrollIntoView({behavior:'smooth'});
   
    this.radioValue='projects';
    
  }
  toContact(): void{
    document.getElementById("contact")?.scrollIntoView({behavior:'smooth'});
    
     this.radioValue2='contact';
  }
}
