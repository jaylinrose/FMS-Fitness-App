# Fitness Tracker App

// Inspiration

The inspirtation behind this project was being able to create an app that provides guidence, organization, and motivation to any user starting or well on their fitness journey. Tools as such we believe will help the community thrive and encourage them to reach their goals.

// Overview

Our app features users the ability to create workouts(Type, the load amount, and number of reps)upon login and a valid registration. Users will also be able to delete any workouts they no longer wish to keep. Users will only be able to see workouts created by them. Once satisfied, users can logout at any time while still having all their created workouts saved. Just log back in, and the user can resume right where they left off. 

// Technologies and Technical Information

Front End(into client directory) installation packages(npm i "package")

React-router-dom

Back End(into server directory) installation packages(npm i "package")

Bcrypt
Mongoose
Express
JsonWebToken
Dotenv

// Issues

Deployment for both frontend and backend are live but unfortunately does not render 

//API Endpoints

GET /workouts --> Gets all the workout documents
POST /workouts --> Creates a new workout document
GET /workouts/:id --> Gets a single workout document
DELETE /workouts/:id --> Deletes a single workout
PATCH /workouts/:id --> Updates a single workout

// Unfinished App functionality/goals

Hopefully in the future developement of this app users will be able to interact with other users. Whether it's seeing other workouts posted from other users or being able to leave comments on workouts and spreading ideas. "My Fitness Tracker" has a goal to spread positivty in the health and fitness community alike for users through the means of a social-online interaction. 

// Developers for this Project

Heriberto Delgado
Frank Ortiz
Jaylin Manuel

// Deployed Links

Front End:
(Live link) https://fitness-app-frontend-3cru.onrender.com/login
(dashboard) https://dashboard.render.com/web/srv-cl05hhqs1bgc73934jag/deploys/dep-cl6het9k857s73ctb2fg

Back End: 

(Live link) https://fitness-app-backend-0nwm.onrender.com/

(dashboard) https://dashboard.render.com/web/srv-cl05hhqs1bgc73934jag/deploys/dep-cl05qnqs1bgc73952i90
