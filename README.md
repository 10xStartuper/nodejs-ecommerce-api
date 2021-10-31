# nodejs-ecommerce-api
Nodejs eCommerce API is the way to go out of wordpress woocommerce world and to start actual backend based apps, this was inspired by lamadevs videos on YpuTube. Feel free to use my codebase as your next ecommerce backend, or you can use the frontend that I have made using the lamadev videos...

## Installation

You can install the application in 4 main steps:

### Step 1: 

`git clone the repo` to your projects folder:

```bash
git clone git@github.com:MrAbdurakhimov/nodejs-ecommerce-api.git
```

### Step 2:

`npm install` to get all the necessary packages:

```bash
npm install
```

### Step 3

You need to edit the `.env` configurations, for that you should just create `.env` file and edit the following keys: 
- `PORT` - the application port. if you do not spesify this the application port will automatically be 4000;
- `DB_URL` - this helps the application to connect your mongo db cluster. for that go to cloud.mongodb.com.

### Step 4

#### Run the application: 

##### On development mode

This will run the application using `nodemon`

```bash
npm run dev
```

##### On production mode

This will run the application using `node` itself

```bash
npm run start
```

This are all from myseide for now!

> happy hacking!!!
