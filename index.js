// Good luck!
const express = require('express')
const app = express()

const goalDiggersAdvisory = {
    advisoryPhoto: "https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fjpeg&attachment_token=AOo0EEVxYw7lD7%2BvBbadsEnG6IwPEhbqd16zPMggbNYjI9QPiviknUz8U7lADvD5t48788eslcmvbWd%2FdRN4anq1nrGFbL8l7PmwhPG47AdPzNrqKIpCY4dPSyeVCkZv0A9FBtkPMsQ0J%2BhvTloL4j6r5TgfmiiROjfD3KNlLRw31mMb%2Bg6NjbgiobJKzoDhYr4HJNGxYkxFKvLjQwCtLyyc4TprRoj%2Fbf6o0x759%2FS%2FqjBX4NrN4t98ogA1p4nbn2GU5%2BfTvNTMPe3NXWQFYRA%2B24OznYGkVTMBgUGZyDIzD%2B9PzbnV4rLsBUJimmI0J8rupwoy1OqixW8et9cB636IhvzjBsqL5J8KW3DO93qzMGh3DiBTer2tubqesCD7uOyE5PZwHbaR76T%2FeNU%2F0SkXw045VafVSveSKVVFbhX7DcyMn6jZ%2BgM9SOPR%2FGIbCWVD99jAFe9NwFlABiO6HiCQ7F6m%2BhyO1Fd47Ld38nuZgiLrAUeBGMQQ02yz8U1FUbJR0YmsuY%2FgoRNDsdtnXX2zapaLG2LW%2BKwtDVW%2B24q1F7C7itT%2F%2Fd%2BJGf303nBWQG6UyX6LZDKT%2BR%2BcuzaUmpVvmFPTj%2BY%3D&allow_caching=true&sz=w1920-h877",
    dailyTasks: [
      {
        Monday: "Work Time",
        Tuesday: "No Tech Tuesday",
        Wednesday: "Circle",
        Thursday: "Midweek check-in: review progress and make adjustments.",
        Friday: "Reflection on the week and feedback for improvements."
      }
    ],
    teachers: [
      {
        firstName: "Ben",
        lastName: "Ryan",
        photo: "https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1640112340639-X9UFE9FIHDU2LP7EMW7V/COMP+SCI+HI+STAFF+2021+%2818+of+43%29.jpg?format=500w",
        funFact: "Mr.Ryan is one of the founding teachers of this school!"
      },
      {
        firstName: "Tess",
        lastName: "Ytuarte",
        photo: "https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1640112465758-LMMID76PTFBH53BN1YU1/COMP+SCI+HI+STAFF+2021+%2838+of+43%29.jpg?format=500w",
        funFact: "Ms.Ytuarte was last to start advising the goal diggers!"
      },
      {
        firstName: "Roma",
        lastName: "Liani",
        photo: "https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1640112370801-AAUH9YPO4G1XQ066PP7H/COMP+SCI+HI+STAFF+2021+%2823+of+43%29.jpg?format=500w",
        funFact: "Ms.Liani has an article made about her, documenting her life!"
      }
    ]
  };
app.use((req, res, next) =>{
    console.log(req.method + " " + req.url)
    next();
  })

  app.get("/", (request, response) => {
    response.status(200).send("<h1>Welcome to the GoalDiggers API!</h1><img src =" + goalDiggersAdvisory.advisoryPhoto + "></img>");
  });

  app.get("/doc", (request, response) => {
    response.status(200).send("Go to /api/advisory/tasks to learn abour our daily advisory task and /api/teachers/:id to learn about my different advisors. 0 Mr.Ryan, 1 Ms.Ytuate, 2 Ms.Liani");
  });

  app.get("/api/teachers/:id", (req, res) =>{
    const id = req.params.id
    res.status(200).json(goalDiggersAdvisory.teachers[id])
})


  app.get("/api/advisory/tasks", (request, response) => {
    response.status(200).json(goalDiggersAdvisory.dailyTasks);
  });



app.use((req, res, next) => {
    res.status(200).send("404 not found")
})

app.listen(3000, () => {
    console.log("Server running")
})
