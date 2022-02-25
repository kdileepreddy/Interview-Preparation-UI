import { Component, HostListener, Inject, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-interesting-facts',
  templateUrl: './interesting-facts.component.html',
  styleUrls: ['./interesting-facts.component.scss'],
})
export class InterestingFactsComponent implements OnInit {
  private window: any;
  public NumberOfCards:number=3;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    private dataservice: DataService
  ) {
    this.window = this.document.defaultView;
  }
  // @HostListener('mouseover') onMouseOver() {
  //   console.log(event);
  // }

  // @HostListener('mouseout') onMouseOut() {
  //   this.display = true;
  // }
  ngOnInit(): void {
    this.dataservice.pagedata$.next('Interesting Facts');
    this.dataservice.carddata.subscribe((data)=>{
      this.NumberOfCards = data;
    });
  }
  display: boolean = true;
  facts: any = [
    {
      id: true,
      imglink: '/assets/star.png',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
      like_count: 0,
      share_count: 0,
    },
    {
      id: true,
      imglink: '/assets/Submarinecablemap.png',
      link: 'https://www.youtube.com/embed/8wa8q8wRZyU',
      content: `Every time you visit a web page or send an email, data is being sent and received through an
      cable system that stretches around the globe. The ocean is home to more than 700,000 miles of
      submarine cables that carry the internet worldwide`,
      like_count: 0,
      share_count: 0,
    },
    {
      id: true,
      imglink: '/assets/jwst.png',
      link: 'https://www.youtube.com/embed/4P8fKd0IVOs',
      content: `The James Webb Space Telescope is the world's largest, most complex space science telescope ever built. Webb will solve mysteries in our solar system, look beyond to distant worlds around other stars, and origins of our universe`,
      like_count: 0,
      share_count: 0,
    },
    {
      id: true,
      imglink: '/assets/star.png',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
      like_count: 0,
      share_count: 0,
    },
    {
      id: true,
      imglink: '/assets/star.png',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
      like_count: 0,
      share_count: 0,
    },
    {
      id: true,
      imglink: '/assets/star.png',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
      like_count: 0,
      share_count: 0,
    },
    {
      id: true,
      imglink: '/assets/star.png',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
      like_count: 0,
      share_count: 0,
    },
  ];
  public show(i: any): void {
    this.facts[i].id = false;
  }
  public hide(i: any): void {
    this.facts[i].id = true;
  }
  increaseLikeCount(i: any): void {
    this.facts[i].like_count++;
  }
  whatsappshare(i: number): void {
    this.window.open(
      'https://web.whatsapp.com/send?text=' + this.facts[i].link
    );
  }
  facebookshare(i: number): void {
    this.window.open(
      'http://www.facebook.com/sharer.php?u=' + this.facts[i].link
    );
  }
  twittershare(i: number): void {
    this.window.open('http://twitter.com/share?url=' + this.facts[i].link);
  }
}
