# Fast-Secure-Task-Tracker

 Objective :
 Build a secure task tracker web application with user authentication (login), user
 registration (signup), and basic task management features using Vue.js (frontend) and
 Nest.js (backend) with MongoDB for data storage. Deploy the application on Netlify and
 Heroku.
 Frontend (Vue.js):
 Create Vue Components:
 ● Login.vue: Display a login form with fields for username and password.
 ● Signup.vue: Display a signup form with fields for username, password, and password
 confirmation.
 ● TaskList.vue: Display a list of tasks for authenticated users.
 ● TaskForm.vue: Allow users to add a new task.
 Implement Authentication Workflow:
 ● UseVueRouter to create routes for the login, signup, and task list pages.
 ● Create a Vuex store to manage user authentication state.
 ● Implement login functionality using Axios to communicate with the backend.
 ● Implement signup functionality to register new users.
 Basic Task Management:
 ● Display a list of tasks from MongoDB in TaskList.
 ● Implement TaskForm to allow users to add new tasks to MongoDB.
 Backend (Nest.js with MongoDB):
 Set Up Nest.js Server:
 ● Initialize a basic Nest.js server.
 ● Setupaconnection to MongoDB Atlas.
 Implement Authentication Endpoints:
 ● Create an endpoint for user login.
 ● Validate user credentials and return a JWT token upon successful login.
 ● Create an endpoint for user signup.
 ● Hashthepassword securely before storing it in MongoDB.
 Task Management Endpoints:
 ● Implement endpoints to:
 ● Get tasks for an authenticated user from MongoDB.
● Addanewtaskto MongoDB.
 Deploy Backend to Heroku:
 ● Pushyour Nest.js project to a GitHub repository.
 ● Signupfor a Heroku account.
 ● Create a newHeroku app linked to your GitHub repository.
 ● Deploy the Nest.js app to Heroku.
 Deploy Frontend to Netlify:
 ● Pushyour Vue.js project to a GitHub repository.
 ● Signupfor a Netlify account.
 ● SetupanewNetlify project linked to your Vue.js repository.
 ● Configure the deployment settings.
 Security Measures:
 ● UseHTTPSforsecure communication.
 ● Implement CORS to control cross-origin requests.
 ● UseJWTforsecure authentication.
 Code Quality and Documentation:
 ● Write clean and well-organized code.
 ● Include comments explaining important sections of the code.
 ● Provide basic documentation for running the Nest.js server.
 Testing (Optional):
 ● Write a basic test for the login, signup, and task management endpoints
