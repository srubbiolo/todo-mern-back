---BACK-END---
npm init --yes  (creates package.json)
npm i express --save (install express)
create server.js (basic)
execute server.js (just to test)
un-hardcode port 8080
install standard nodemon (for updating server on change)
set script lint to stardard (actually found node doesn't use commas for end of line of code, :) 
npm i dotenv --save 
npm i mongoose (to connect to mongo db)
connect mongoose
hide .env from git
handle connection to db errors
Create model, todo.js app.js
npm i body-parser --save
create controllers folder
npm i multer --save
images now can be uploaded to the app
all endpoints work, POST, GET, PUT. TODO: document using something like swagger, unit test and make GET smart
Upload all to GIT

To run:
1)download repo
2) 'npm install'
3) create .env file at base directory and set this vars
APP_PORT=8081
APP_HOST=http://localhost

DB_USER=gallardo
DB_PASSWORD=marcelo

4)'npm run start-dev'
5) ENJOY! )?
