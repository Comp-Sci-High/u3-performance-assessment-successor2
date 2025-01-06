// Good luck!
const express = require('express')
const app = express()

const goalDiggersAdvisory = {
    advisoryPhoto: "https://example.com/advisory-photo.jpg",
    dailyTasks: [
      {
        Monday: "Set individual and group goals for the week.",
        Tuesday: "Collaborative brainstorming session on upcoming projects.",
        Wednesday: "Midweek check-in: review progress and make adjustments.",
        Thursday: "Work on personal development plans.",
        Friday: "Reflection on the week and feedback for improvements."
      }
    ],
    teachers: [
      {
        firstName: "Ben",
        lastName: "Ryan",
        photo: "https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1640112340639-X9UFE9FIHDU2LP7EMW7V/COMP+SCI+HI+STAFF+2021+%2818+of+43%29.jpg?format=500w",
        startYear: 2016,
        funFact: "Mr.Ryan is one of the founding teachers of this school!"
      },
      {
        firstName: "Tess",
        lastName: "Ytuarte",
        photo: "https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1640112465758-LMMID76PTFBH53BN1YU1/COMP+SCI+HI+STAFF+2021+%2838+of+43%29.jpg?format=500w",
        startYear: 2018,
        funFact: "Ms.Ytuarte was last to start advising the goal diggers!"
      },
      {
        firstName: "Roma",
        lastName: "Liani",
        photo: "https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1640112370801-AAUH9YPO4G1XQ066PP7H/COMP+SCI+HI+STAFF+2021+%2823+of+43%29.jpg?format=500w",
        startYear: 2020,
        funFact: "Ms.Liani has an article made about her, documenting her life!"
      }
    ]
  };
app.use((req, res, next) =>{
    console.log(req.method + " " + req.url)
    next();
  })

  app.get("/", (request, response) => {
    response.json("Welcome to the GoalDiggers API!" + <img src ="goalDiggersAdvisory.advisoryPhoto"></img>);
  });

  app.get("/doc", (request, response) => {
    response.json(goalDiggersAdvisory.dailyTasks);
  });






app.use((req, res, next) => {
    res.send("404 not found")
})

app.listen(3000, () => {
    console.log("Server running")
})

















































