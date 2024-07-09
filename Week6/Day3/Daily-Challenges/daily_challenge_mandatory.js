// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1) Create a class named Video. The class should be constructed with the following parameters:
//      - title (a string)
//      - uploader (a string, the person who uploaded it)
//      - time (a number, the duration of the video - in seconds)
// 2)Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// 3) Instantiate a new Video instance and call the watch() method.
// 4) Instantiate a second Video instance with different values.
// 5) Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// 6) Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    return `${this.uploader} watched all ${this.title} of ${this.time}!`;
  }
}

const videoData = [
  { title: "Lord of the Rings", uploader: "Charlie", time: 180 },
  { title: "Harry Potter", uploader: "Dave", time: 120 },
  { title: "Finding Nemo", uploader: "Eve", time: 140 },
  { title: "Jason Bourne", uploader: "Frank", time: 90 },
  { title: "Toy Story", uploader: "Grace", time: 95 },
];

const videos = videoData.map(
  (video) => new Video(video.title, video.uploader, video.time)
);

videos.forEach((video) => console.log(video.watch()));
