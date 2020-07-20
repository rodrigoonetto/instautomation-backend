# Instautomated! is a web-app to help with automatic follows and unfollows on Instagram.

#### **Update 20/07/20:** It´s already deployed and fully working: [Instautomation!](https://instautomated.herokuapp.com/)

##### Fullstack development proyect designed, developed, tested and deployed from scratch.

###### Features:
- Script generator tool to automatize the following/unfollowing process on Instagram.
- Human actions simulation to avoid Instagram spam/bot bans.
- Fully parametrizable automation scrips: Delay between actions, uses to process limit, users to star from, user exceptions list.
- Profile with parameters/settings saved in DB for a quick script generation.

###### Development Stack:

- **Frontend:** React - React-strap - React-router.
- **Backend:** Node.js - Express - Mongoose -  Bcrypt - Axios.
- **DB:** MongoDB.
- **Automation Scripts:** Vanilla Javascript.

###### Development Tools/Techniques:

- **Coding:** Visual Studio Code.
- **API tests:** Insomnia.
- **DB tests:** Robo3T.
- **Sketchs**: Adobe XD.
- **Graphic design**: Adobe Photoshop/Illustrator.
- **CI/CD:** Configuration of automatic deployment from Visual Studio Code to GitHub and Heroku.

###### Modules:
- User registration.
- User login.
- User settings.
- Script generator.

###### API endpoints:
- baseURL: https://instautomated-api.herokuapp.com
- **GET /test:** Status.
- **POST /login:** Login.
- **POST /user/register:** Register.
- **POST /user/modify/:userId :** User settings modify.
- **POST /user/addexception/:userId :** User exception add.
- **POST /user/deleteexception/:userId :** User Exception delete.



