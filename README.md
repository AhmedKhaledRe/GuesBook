# GuestBook

    => live On Heroku 

    using MERN Stack ( React / NodeJS / Express / MongoDB)

To Run This Project : 

    - First Install dependencies package.json ( npm install )  in ( Package.json in src Root) && ( Package.json in client Root)
    - Second run ( npm run dev ) in ( src root ) => that run ( Backend Server on PORT 5000 && FrontEnd Server on PORT 3000 ) concurrently
    - Third open Browser and type ( localhost:3000/ )

About the GuestBook :

    The users able to:
        - Create an account
        - Log in
        - Write/Edit/Delete Messages
        - And reply to messages

- project Divided into two Steps (Client / Server) :

    - client/
    
    - server files in src/ root
        - two roots ( users and messages )
        - two models ( users and messages )
        - controllers folder ( contain routes)
        - helpers folder ( contain mongoosse normalizeErrors)
        - data.json contain test data
        - fake-db.js to load data.json data to mongoDB
