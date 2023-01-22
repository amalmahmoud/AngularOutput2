import { Component } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {
  Courses = [
    {
      id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'assets/courses/course-image-1.jpeg',
      description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step'
    },
    {
      id: 102, name: 'Angular for beginners', author: 'Mark Vought', duration: 28, type: 'Premium',
      price: 129.00, ratings: 4.5, image: 'assets/courses/course-image-2.jpeg',
      description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'
    },
    {
      id: 103, name: 'React for beginners', author: 'Steve Smith', duration: 18.5, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'assets/courses/course-image-3.jpeg',
      description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step'
    },
    {
      id: 104, name: 'Advance Angular Course', author: 'Steve Smith', duration: 19.5, type: 'Premium',
      price: 145.50, ratings: 4.8, image: 'assets/courses/course-image-4.jpeg',
      description: 'In this course you will learn all the concepts of Angular from basic to advance. This course will start teaching you from basics of Angular and as you progress, you will learn all the advance concepts.'
    },
    {
      id: 105, name: 'Advance JavaScript Course', author: 'John Heikela', duration: 60, type: 'Premium',
      price: 150.00, ratings: 4.5, image: 'assets/courses/course-image-5.jpeg',
      description: 'In this course you will learn the complete modern JavaScript step by step. This course is purely designed for beginners and teaches you all the concepts of javascript from beginner to advance level.'
    },
    {
      id: 106, name: 'Angular with .NET Core', author: 'Mark Vought', duration: 68, type: 'Premium',
      price: 129.00, ratings: 4.5, image: 'assets/courses/course-image-6.jpeg',
      description: 'In this course you will learn the fundamentals of Angular framework with .NET Core. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step and how to use it with back-end framework like .NET Core.'
    },
    {
      id: 107, name: 'Advance React Course', author: 'Merry Smith', duration: 18.5, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'assets/courses/course-image-7.jpeg',
      description: 'In this course you will learn the fundamentals and advance concepts of React. This course is purely designed for beginners and teaches you all the concepts of React step by step'
    },

  ]


  Movies = [
    {
      id: 101, name: 'Titanic', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'assets/movies/image1.jfif',
      description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step'
    },
    {
      id: 102, name: 'Boss Baby', author: 'Mark Vought', duration: 28, type: 'Premium',
      price: 129.00, ratings: 4.5, image: 'assets/movies/image2.jfif',
      description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'
    },
    {
      id: 103, name: 'Mulan', author: 'Steve Smith', duration: 18.5, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'assets/movies/image3.jpg',
      description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step'
    },
    {
      id: 104, name: 'Cinderella', author: 'Steve Smith', duration: 19.5, type: 'Premium',
      price: 145.50, ratings: 4.8, image: 'assets/movies/cinderella.jpg',
      description: 'In this course you will learn all the concepts of Angular from basic to advance. This course will start teaching you from basics of Angular and as you progress, you will learn all the advance concepts.'
    },
    {
      id: 105, name: 'Smile', author: 'John Heikela', duration: 60, type: 'Premium',
      price: 150.00, ratings: 4.5, image: 'assets/movies/image4.jpg',
      description: 'In this course you will learn the complete modern JavaScript step by step. This course is purely designed for beginners and teaches you all the concepts of javascript from beginner to advance level.'
    },
    {
      id: 106, name: 'Butterfly Tale', author: 'Mark Vought', duration: 68, type: 'Premium',
      price: 129.00, ratings: 4.5, image: 'assets/movies/image5.jfif',
      description: 'In this course you will learn the fundamentals of Angular framework with .NET Core. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step and how to use it with back-end framework like .NET Core.'
    },
  

  ]
  getTotalCourses() {
    return this.Courses.length;
  }
  
  getTotalMovies() {
    return this.Movies.length;
  }
  courseCountRadioButton: string = 'Courses';

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
  }
  getType()
  {
    if(this.courseCountRadioButton === 'Courses')
    {
      return this.Courses;
    }
    else return this.Movies;
  }
  searchText: string = '';

  onTextChange(data: string) {
    this.searchText = data;
  }

}
