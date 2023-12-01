# CONTACT API

FarmByte Contact is a backend API service that deals with CRUD in handling user contact. Using primarily Node.js, Express.js, as well as TypeScript as its backbone language and mongoDB as database. Moreover, the API is also
using [Prisma](https://www.prisma.io/) to help establish connection with the database and [Yup](https://www.npmjs.com/package/yup) to handle query or body validation. The program will be running on port 9000 however you are able to modify in `app.ts`. I have also intentionally attached `.env` in this repo to make it easier to run.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all the dependencies.

```bash
npm install
```
## Notes
In case any failure in connecting with the database, please create new database from [Mongo Atlas](https://www.mongodb.com/atlas/database) and copy your connection string into `DATABASE_URL` in `.env` file


## Seeding user data
```javascript
//in terminal console, make sure you are directed at contact directory and run: 
npx prisma db seed
```

## Postman
Please download and import this [Postman](https://drive.google.com/file/d/1m_w4sE_JdeCInN6O6BHNnVPFm7vKndwa/view?usp=sharing) collection to run and test the API.



## Samples

Index:
![Screen Shot 2023-12-02 at 12 54 21 am](https://github.com/keyzafirstanto/contact/assets/82820858/dce1d557-22f4-4c26-9aac-7b8f8e17517d)

![Screen Shot 2023-12-02 at 12 54 38 am](https://github.com/keyzafirstanto/contact/assets/82820858/ca10b6e0-9b06-45f2-a7ea-e29455dfe7e4)



Create:
![Screen Shot 2023-12-02 at 12 55 46 am](https://github.com/keyzafirstanto/contact/assets/82820858/f036d98f-7c6c-4458-998a-6be8612cca52)


Update:
![Screen Shot 2023-12-02 at 12 56 04 am](https://github.com/keyzafirstanto/contact/assets/82820858/73469f39-685e-441a-9767-8ad734b567bf)


Delete:
![Screen Shot 2023-12-02 at 12 56 13 am](https://github.com/keyzafirstanto/contact/assets/82820858/52dfee5b-4fd0-41f9-aa59-9954e513c063)




Thanks,

Keyza R. Firstanto
