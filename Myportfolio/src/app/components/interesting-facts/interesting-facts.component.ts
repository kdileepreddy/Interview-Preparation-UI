import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-interesting-facts',
  templateUrl: './interesting-facts.component.html',
  styleUrls: ['./interesting-facts.component.scss'],
})
export class InterestingFactsComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  facts: any = [
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
    {
      title: 'Internet',
      link: 'https://www.youtube.com/embed/8wa8q8wRZyU',
      content: `Every time you visit a web page or send an email, data is being sent and received through an 
      cable system that stretches around the globe. The ocean is home to more than 700,000 miles of 
      submarine cables that carry the internet worldwide`,
    },
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
  ];
}
