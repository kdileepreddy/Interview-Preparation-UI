import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-java8',
  templateUrl: './java8.component.html',
  styleUrls: ['./java8.component.scss']
})
export class Java8Component implements OnInit {
  
  public languageContentJson: any;
  public flip:boolean = false;
  constructor(private dataservice: DataService, private renderer: Renderer2,
    private el: ElementRef) { }

  ngOnInit(): void {
    this.dataservice.pagedata$.next('Java 8');
    this.languageContentJson = [
      {
        mainTitle: 'Streams',
        subtitlecontent: [
          {
            subtitle: 'Definition :',
            maincontent: [
              {
                subcontent: `Java provides a new additional package in Java 8 called java.util.stream.
                This package consists of classes, interfaces and enum to allow functional-style operations on the
                elements.`,
              },
              {
                subcontent: `Stream API is used to process collections of objects. A stream is a sequence of objects
                that supports various
                methods which can be pipelined to produce the desired result.`,
              },
            ],
          },
          {
            subtitle: 'Features :',
            maincontent: [
              {
                subcontent: `Stream is functional in nature. Operations performed on a stream does not modify it's
                source. For example,
                filtering a Stream obtained from
                a collection produces a new Stream without the filtered elements, rather than removing elements from the
                source collection.`,
              },
              {
                subcontent: `Stream does not store elements.
                It simply conveys elements from a source such as a data structure, an array, or an I/O channel,
                through a pipeline of computational operations.`,
              },
            ],
          },
        ],
        backcontent: {
          mainTitle: 'Streams(Additional Info)',
          subtitlecontent: [
            {
              subtitle: 'Methods :',
              maincontent: [],
              submaincontent: [
                {
                  subcontenttitle: 'map:',
                  subcontent: `The map method is used to returns a stream consisting of the results of applying the given function to the elements of this stream.
                List number = Arrays.asList(2,3,4,5);
                List square = number.stream().map(x->x*x).collect(Collectors.toList())`,
                },
                {
                  subcontenttitle: 'filter:',
                  subcontent: `The filter method is used to select elements as per the Predicate passed as argument.
                List names = Arrays.asList("Reflection","Collection","Stream");
                List result = names.stream().filter(s->s.startsWith("S")).collect(Collectors.toList())`,
                },
                {
                  subcontenttitle: 'sorted:',
                  subcontent: `The sorted method is used to sort the stream.
                List names = Arrays.asList("Reflection","Collection","Stream");
                List result = names.stream().sorted().collect(Collectors.toList())`,
                },
                {
                  subcontenttitle: 'collect:',
                  subcontent: `The collect method is used to return the result of the intermediate operations performed on the stream.
                List number = Arrays.asList(2,3,4,5,3);
                Set square = number.stream().map(x->x*x).collect(Collectors.toSet())`,
                },
                {
                  subcontenttitle: 'forEach:',
                  subcontent: `The forEach method is used to iterate through every element of the stream.
                List number = Arrays.asList(2,3,4,5);
                number.stream().map(x->x*x).forEach(y->System.out.println(y))`,
                },
                {
                  subcontenttitle: 'reduce:',
                  subcontent: `The reduce method is used to reduce the elements of a stream to a single value.
                The reduce method takes a BinaryOperator as a parameter.
                List number = Arrays.asList(2,3,4,5);
                int even = number.stream().filter(x->x%2==0).reduce(0,(ans,i)-> ans+i)`,
                },
              ],
            },
          ],
        },
      },
      {
        mainTitle: 'Streams',
        subtitlecontent: [
          {
            subtitle: 'Definition :',
            maincontent: [
              {
                subcontent: `Java provides a new additional package in Java 8 called java.util.stream.
                This package consists of classes, interfaces and enum to allow functional-style operations on the
                elements.`,
              },
              {
                subcontent: `Stream API is used to process collections of objects. A stream is a sequence of objects
                that supports various
                methods which can be pipelined to produce the desired result.`,
              },
            ],
          },
          {
            subtitle: 'Features :',
            maincontent: [
              {
                subcontent: `Stream is functional in nature. Operations performed on a stream does not modify it's
                source. For example,
                filtering a Stream obtained from
                a collection produces a new Stream without the filtered elements, rather than removing elements from the
                source collection.`,
              },
              {
                subcontent: `Stream does not store elements.
                It simply conveys elements from a source such as a data structure, an array, or an I/O channel,
                through a pipeline of computational operations.`,
              },
            ],
          },
        ],
        backcontent: {
          mainTitle: 'Streams(Additional Info)',
          subtitlecontent: [
            {
              subtitle: 'Methods :',
              maincontent: [],
              submaincontent: [
                {
                  subcontenttitle: 'map:',
                  subcontent: `The map method is used to returns a stream consisting of the results of applying the given function to the elements of this stream.
                List number = Arrays.asList(2,3,4,5);
                List square = number.stream().map(x->x*x).collect(Collectors.toList())`,
                },
                {
                  subcontenttitle: 'filter:',
                  subcontent: `The filter method is used to select elements as per the Predicate passed as argument.
                List names = Arrays.asList("Reflection","Collection","Stream");
                List result = names.stream().filter(s->s.startsWith("S")).collect(Collectors.toList())`,
                },
                {
                  subcontenttitle: 'sorted:',
                  subcontent: `The sorted method is used to sort the stream.
                List names = Arrays.asList("Reflection","Collection","Stream");
                List result = names.stream().sorted().collect(Collectors.toList())`,
                },
                {
                  subcontenttitle: 'collect:',
                  subcontent: `The collect method is used to return the result of the intermediate operations performed on the stream.
                List number = Arrays.asList(2,3,4,5,3);
                Set square = number.stream().map(x->x*x).collect(Collectors.toSet())`,
                },
                {
                  subcontenttitle: 'forEach:',
                  subcontent: `The forEach method is used to iterate through every element of the stream.
                List number = Arrays.asList(2,3,4,5);
                number.stream().map(x->x*x).forEach(y->System.out.println(y))`,
                },
                {
                  subcontenttitle: 'reduce:',
                  subcontent: `The reduce method is used to reduce the elements of a stream to a single value.
                The reduce method takes a BinaryOperator as a parameter.
                List number = Arrays.asList(2,3,4,5);
                int even = number.stream().filter(x->x%2==0).reduce(0,(ans,i)-> ans+i)`,
                },
              ],
            },
          ],
        },
      }
    ];
  }

  cardFlip(): void{
    this.flip = !this.flip;
  }
 
}
