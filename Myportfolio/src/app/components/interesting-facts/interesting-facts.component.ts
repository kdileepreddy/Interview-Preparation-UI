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
    {
      title: 'star',
      link: 'https://www.youtube.com/embed/MohKd8vSdBA',
      content: `Because stars are so far away, it takes years for their light to reach us. Therefore, when you
    look at a star, you are actually seeing what it looked like years ago. It is entirely possible
    that some of the stars you see tonight do not actually exist anymore.`,
    },
  ];
}
