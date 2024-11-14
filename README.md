video 41 = intro to mern stack

video 42 = create folder in project 3 as inotebook and backend. in inotebook we create react app. in backend install npm init and npm i express and create index.js file.  install mongoose.

-------backend ---------------

video 43 = in backend, create another folder db. in that db define connection string of mongodb(with help of mongoose) and create function to connect mongodb with nodejs. in index file we define that db function. use express hello word file. with the use of express we create server localhost 3000.  in thunderclient we use this this (http://localhost:3000/) and send request then we get hello word output.

video 44 = In backend, create 2 folders routes and models. in models we create 2 files Notes and User and create schema inside that files.
in routes create 2 files notes and auth and create sample routes inside them, in auth there is obj and in notes there is [].in index file we create two routes.(app.use('/api/auth', require('./routes/auth'))app.use('/api/notes', require('./routes/notes'))) whenever we go to that routes ex. /api/auth then we go to the page that auth file. 

video 45 = in auth file we remove sample data obj and use (console.log(req.body);res.send('hello')) and in index we use middleware(app.use(express.json())). in therderclient body we send name as harry and send request it print that name in node console becausee(req.body) and hello in response in therderclient and in broswer becasue(res.send(hello)).then we send user(user from User.js file) as req.body(const user = User(req.body) user.save()) and import it. then send ({"name": "harry2","email": "newemail@mail.com","password": "134fsrfg35"}) to thunderclient body it will print on node console and in mongodb.

  video 46 = when we send information to thunderclient as invalid then it gives that data but not a error so we use validator. install express-validator package. import it in app.js. create array after(router.post('/')). use error statement for catching error. after that when we send invalid data to thunderclient then it shows msg that we used in error statement and gives value as (body('name', 'Enter a valid name')). then we use( User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user))) instead of (res.send(req.body)). then we create new collection in db file and create new folder in Users file(mongodb://localhost:27017/inotebook) and (const User = mongoose.model('user'UserSchema)User.createIndexes()module.exports = User)  corresponding to email for when same data enter then it gives error. we use .catch in auth file for handling error.


  video 47(create collection in thunderclient) = create new endpoint /createuser instead of / in auth.js.  delete (User.createIndexes()) from User.js. delete .then and catch because we used async and when error occure it gives only error about email. in auth.js we create async function (async(req, res)) and await user.create and user.findOne. set port to 4000. In thunderclient we create new collection and new folder Authentication inside it, and create new request, in that request we send data as post request, if email is unique then it gives response but when email is already exist then it gives error message. with use of try and catch if another error occur(typeError or syntaxerror) instead of email then it catch in .catch.

  video 48 = theory of password hashing , salt and paper. 

  video 49 = install bcrypt. define in auth file. we use bcrypt for password authentication(const salt = await bcrypt.genSalt(10)
  secPass = await bcrypt.hash(req.body.password, salt)) and (password: secPass,) in auth file. using that our password converted to hash string then it stores to db.
  then we install jsonwebtoken(jsonwebtoken.io it is website for more info). define in auth file. create one secrete key (const JWT_SECRET = 'HarryisgoodB$oy') then instead of user (res.json(user)) we send (res.json(authtoken)).

  video 50 = here we create login functionality. we create another endpoint /login in auth file. we create whole function as async like createuser. after creating send post request using thunderclient when user exist it gives token but user does not exist it gives error message.

  video 51 = here we create another endpoint for gets the information of loged in users. if any user want his login information then it will get with the help of authentication token. we create new endpoing getuser in auth.js inside it we use another function fetchuser from file fetchuser.js. when we enter our token then fetchuser check if the token exist with that secrete key then it gives that user(id) otherwise it gives error message. Then in auth file the the async function find the user by its id then it gives it information except password.

  ---- we create auth file then we create notes file.

  video 52 = in thunderclient inside inotebook we create another folder notes in that we create one get request. in notes.js create on endpoing /fetchallnotes that fetches the notes of particular user. when we enter auth-token then it gives us notes. but here we does not yet save any notes so it gives []. then in notes file we create user as another object in notes schema to insure particular user with its notes and another user does not sees that notes. After that we create anothe enpoint //addnote inside notes.js for adding notes. in thunderclient we create post request for add note. in that header we add content-type:application.json and auth-token:(particular user authtoken) and in body set title, description and tag of note then send request so it gives that note data in response. in both enpoints we have to send auth-token because without token it does not add note and gives you note, because only login users can add note and get note . After we create note add it in addnote then we send request using /fetchallnotes then it gives all notes.

  video 53 = update the existing note. create another enpoint /updatenote/:id. create new object newNote to store updated value. in thunderclient in header we add authtoken of added person and add id of that person in url, in body we write updated value then send it gives updated value. when we fetch all notes then will get updated values.

  video 54 = create another enpoint /deletenote that delete particular note. create enpoint in thunderclient set the headers as content type and auth-token of particular user and set the url. in notes file we create /deletenoe function using try catch inside it first we check if user with given id and  then check user with given auth-token after all is well or id is match and auth-token is match then note will be deleted . after that we send request then will get the request will deleted from database.

-------------frontend -----------------
video 55 = in inotebook we install 2 packed npm i react-router-dom and concurrency. in inotebook packege.json we set both:npm start and nodemon index.js for concurrently run both the file in one command. when we run npm both then both backend and inotebook will be run.we delete some files from source folder.

video 56 = creating Navbar and Routes. we add bootstrap to index.html file. create component folder and Navbar, About and Home files into it. define these files in app file and use react-router to route them. in navbar file use navbar from bootstrap

video 57 =  theory of Context api(useContext).

video 58 = create new folder context in source folder. inside it create another folder notes inside it noteContext and noteState files.in notesContext we create a context, in noteState we create state then update it also use noteContext into it. in app file we define noteState. in About file use noteContext, usecontext for define noteContext and useEffect for update noteContext. when we click on About in Navbar then then text we define in noteState will be appear and update after 1 sec.

video 59 = change the name of navbar to iNotebook and delete state and update function from NoteState. delete usecontext, useeffect from about page. in navbar we want use active class when we click on home or about then we use use location. here we use useeffect and uselocation for getting location.pathname of specific route. then use ternary operator in Link of home and about when they are active then active class applied. in app file we use container after navbar. in home we use one form also create two div in main div, in first div we have heading and form and h2 in second div.

video 60 = in NoteState file we copy the sample note from thunderclient fetch all notes request. paste this note in notesInitial variable. define that notesInitial in usestate. in Home.js file we import notesContext, then use useContext , use destructuring to define context. then use notes with map method.

video 61 = create 2 new files in components Notes.js and  NoteItem.js. In home file we do some steps to create note so, cut that steps from home file and paste in Note.js file because we define notes in new file. In Notes file instead of return note.title we return NoteItem file and pass one prop as note. In NoteItem file we import one card from bootstrap. inside it we define prop as note. then use this note as note.title and note.description

video 62 =  we use delete and edit icons in NoteItem file. use d-flex for alignment. create new file in components Alert.js and use bootstrap alert inside it, define this Alert file in App.js.

video 63 = Adding functionalities. In NoteState we create three function addNote, deleteNote and editNote. In addNote we create a logic to add new note. From Home.js file we remove all content and create a new file AddNote.js and paste in it. define AddNote file in Notes file. In AddNote we make two functions handleClick and onChange, use useState and useContext, modify the bootstrap component(email and password to only text inputs).  

video 64 = we create functionality for delete note. In NoteItem file we use context and onclick function delete icon. In NoteState.js file we create deleteNote function with the use of filter.

video 65 = edit functionality and fetch notes. make function  editNote async function with fetch api and for loop in NoteState file. make function async to addNote use fetch api in it. install cors in backend/index.js file. Then delete sample notes from Notesinitial. create new async function getNotes to get all notes.

video 66 = In NoteState file use async await and fetch api in deleteNote function to delete note. Edit a note functionality. in Notes.js file send one function(updateNote) as prop to NoteItem file, in that we use useref. In NotesItem define that prop and used on edit icons. In Notes file we use bootstrap Modal for when we click on edit icon then modal display. in Notes.js we use form that we used in AddNote.js file also handleclick function, onclick function,  and useState. when we use these form in Notes file the we change titile(as etitle), description and tag.   create functionality when we click on edit icon then modal open then our notes data will be shown on that(we use value property on inputs), when we change that value then it will change using onchange function , when we click on update Note button then it will update using handleClick function which is used on update Note button. 

video 67 = Updating notes on edit. in Notes file, use id in useState and in updateNote function setNote(id: currentNote._id). create a note ref as refClose and define it in Close button. delete preventdefualt from handleClick function and use reclose instead it. then export editNote in context and define it in handleclick function. in NoteState function create new variable newNotes to parse notes then use this newNotes in for loop.

video 68 = in Notes file we use one validation that when note is empty then it displays one message. add min legth(update note and add note button) and required on input of AddNote file and Notes file. In NoteState file addNote function remove sample note from note variable and placed json to that variable. In AddNote file add setNote in handleClick function when we add note then inputs are empty  and use value attribute on inputs.

video 69 = Login functionality. In Navbar file we create delete search button and create two button login and signup. In components folder we create a new files, Login and Signup. IN app file we create route of login and signup. IN login file we create one form using bootstrap, in that we create onchange function, handleSubmit function and useState(credentials).In handleSubmit function if credentials are wrong then it gives alert but when correct it save authtoken to localStorage and navigate to home page.

video 70 = Adding signup component. In Signup file we use bootstrap form. In that file we create onchange function, handleSubmit function and usenavigate. 

video 71 = Adding alert to login, signup and notes component. we use alert componen TextUtils project so we use that code in our Alert file. then we use alert state and showalert function in app file and send props to Alert, Home, Login and Signup file. use this props in Login and Signup for when user enter details then check account creation, login or when user enter invalid details then it alerts error. In Home file define prop and then send this prop to Notes file.  In Notes file we fist send props in AddNote file and NoteItem file, then we use when we update note then alert will shown in handleClick function. In AddNote file we use prop as alert for delete note. in AddNote file use prop as alert for adding note.

video 72 = Fetching User Specific Notes. In NoteState file delete auth-token and write localStorage.getItem('token). In Notes file in useEffect we use if else for  localStorage.getItem , when token is present then getNotes() called but when it empty then it redirect to login page. In Navbar file we create Logout button, when user is present then logout button visible rather log in. in that  Navbar file we create a function handleLogout on logout button that says when user click on button then token will be remove and it redirect to login page. Then we add headings in login and signup page.