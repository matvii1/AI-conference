import { ISchedule } from "./types/Schedule"

export const schedule: ISchedule[] = [
  {
    id: 1,
    startTime: "8:00",
    finishTime: "9:00",
    title: "Doors open and registration",
    shortDesc:
      "Attendees can check in and pick up their badges and conference materials.",
    fullDesc:
      "Doors are open, and attendees can register, pick up their badges and conference materials before the event starts. This is a great opportunity to connect with fellow attendees and network before the conference begins.",
    img: "timetable/open.jpg",
  },
  {
    id: 2,
    startTime: "9:00",
    finishTime: "9:30",
    title: "Opening remarks",
    shortDesc:
      "The conference organizers will deliver opening remarks and introduce the theme and goals of the event.",
    fullDesc:
      " The conference organizers will welcome attendees, deliver opening remarks, and introduce the theme and goals of the event. They will also acknowledge and thank the sponsors and partners who made the conference possible.",
    img: "timetable/open-remarks.jpg",
  },
  {
    id: 3,
    startTime: "9:30",
    finishTime: "10:30",
    title: "Mark Anderson: Introduction to AI",
    shortDesc:
      "AI expert Mark Anderson covers AI's history, current state, and future.",
    fullDesc:
      "Mark Anderson, an expert in artificial intelligence, will provide an overview of AI technology, including its history, current state, and future possibilities. This session is ideal for those who are new to AI and want to understand its basics.",
    img: "timetable/img-3.jpg",
  },
  {
    id: 4,
    startTime: "10:30",
    finishTime: "11:30",
    title: "Sarah Johnson: AI Applications in Healthcare",
    shortDesc:
      "Sarah Johnson discusses the transformative role of AI in healthcare.",
    fullDesc:
      "Sarah Johnson will discuss how AI is transforming healthcare, from medical diagnosis to patient care. She will highlight the benefits, challenges, and potential future impact of AI in healthcare.",
    img: "timetable/img-4.jpg",
  },
  {
    id: 5,
    startTime: "11:30",
    finishTime: "12:30",
    title: "Workshop 1: Developing AI Algorithms",
    shortDesc: "A hands-on workshop for developing AI algorithms.",
    fullDesc:
      "This workshop is a practical session where attendees will learn how to develop AI algorithms. The workshop will cover topics such as data preparation, model building, and testing. Participants will work on real-world problems and get feedback from the workshop leader.",
    img: "timetable/img-5.jpg",
  },
  {
    id: 6,
    startTime: "12:30",
    finishTime: "13:30",
    title: "Lunch",
    shortDesc: "Enjoy lunch and network with other attendees.",
    fullDesc:
      "Attendees can take a break from the conference and enjoy a catered lunch while networking with other attendees. This is a great opportunity to connect with like-minded individuals and discuss the morning sessions.",
    icon: "mug-hot",
    img: "timetable/lunch.jpg",
  },
  {
    id: 7,
    startTime: "13:30",
    finishTime: "14:30",
    title: "Jennifer Williams: Machine Learning",
    shortDesc: "Jennifer Williams explains the basics of machine learning.",
    fullDesc:
      "Jennifer Williams will provide an overview of machine learning, a subfield of AI that focuses on teaching machines to learn from data. She will discuss the different types of machine learning algorithms and their applications in real-world scenarios.",
    img: "timetable/machine-learning.jpg",
  },
  {
    id: 8,
    startTime: "14:30",
    finishTime: "15:30",
    title: "Andrew Smith: Natural Language Processing",
    shortDesc:
      "Andrew Smith discusses the challenges and opportunities of natural language processing.",
    fullDesc:
      "Andrew Smith will discuss natural language processing (NLP), a branch of AI that deals with the interaction between computers and humans using natural language. He will highlight the challenges and opportunities of NLP and how it is being used in various industries.",
    img: "timetable/nat-lang.jpg",
  },
  {
    id: 9,
    startTime: "15:30",
    finishTime: "16:30",
    title: "Workshop 2: Implementing AI in Business",
    shortDesc: "A practical workshop for implementing AI in business.",
    fullDesc:
      "This workshop is a practical session where attendees will learn how to implement AI in business. The workshop will cover topics such as selecting the right AI technology, integrating AI into business processes, and measuring its impact on business performance.",
    img: "timetable/buisiness.jpg",
  },
  {
    id: 10,
    startTime: "16:30",
    finishTime: "17:30",
    title: "Rebecca Jones: AI and the Future",
    shortDesc:
      "Rebecca Jones explores the potential of AI and its impact on the future.",
    fullDesc:
      "Rebecca Jones will discuss the potential of AI and its impact on various industries. She will explore the ethical and social implications of AI and how we can ensure that AI benefits everyone.",
    img: "timetable/future.jpg",
  },
  {
    id: 11,
    startTime: "17:30",
    finishTime: "18:00",
    title: "Closing remarks and networking",
    shortDesc:
      " The conference organizers will provide closing remarks, and attendees can network before leaving.",
    fullDesc:
      "The conference organizers will provide closing remarks, summarize the event highlights, and thank attendees, speakers, and sponsors for their contributions. This is also a",
    img: "timetable/closing.jpg",
  },
]
