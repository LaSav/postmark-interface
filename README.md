# A Local Interface to Manage Your Subscriptions and Send Emails with Postmark and Node.js

This is a REST API built to be used locally on your machine to manage subscribers from your mailing list (MongoDB) and send Broadcast Emails using the Postmark API.

## Features

- Retrieve Subscribers List from MongoDB.
- Send Preview Email to one Address. Could be your own, or postmark's test address.
- Send Broadcast Email to all Subscribers of MongoDB List.

## Built with

- Vanilla JavaScript
- HTML
- Bootstrap
- Axios
- Express
- Mongoose
- MongoDB
- Node.js
- Postmark

## Usage

### Install Dependencies and Run

```
git clone https://github.com/LaSav/postmark-interface
npm install
npm run server
```

### Env Variables

Create a .env file in the root directory and add the variables:

```
NODE_ENV = development
PORT = 3000
MONGO_URI = Your MongoDB URI
POSTMARK_KEY = Your Postmark API key
```

## Status: In Progress

## Checklist:

1. Backend

- GET Subscribers :ok_hand:
- POST Broadcast :ok_hand:
- GET Broadcasts :ok_hand:
- PUT Unsubscribe

2. Frontend

- GET Subscribers :ok_hand:
- POST Broadcast :ok_hand:
- GET Broadcasts :ok_hand:
- Errors :ok_hand:
- Send Preview :ok_hand:
- Select Preview Address
- Input Template Number
- Select between subscriber lists

## Additional Resources

[Postmark Developer Guide](https://postmarkapp.com/developer)

#### Need to Store Subscribers and Send Transactional Emails? Check out:

[REST API to Send Transactional Emails With Postmark and Node.js](https://github.com/LaSav/postmark-transactional-form)
