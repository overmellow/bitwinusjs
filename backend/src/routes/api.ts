import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import User from '@src/models/User';
import UserRoutes from './UserRoutes';

var nodemailer = require('nodemailer');


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// **** Auth0 **** //

const { auth } = require('express-oauth2-jwt-bearer');

const authConfig = require("../../auth_config.json");

const port = process.env.API_PORT || 5173;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: authConfig.audience,
  issuerBaseURL: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});


// ** Add UserRouter ** //

const userRouter = Router();
// Get all users
userRouter.get(
  Paths.Users.Get,
  checkJwt,
  UserRoutes.getAll,
);

userRouter.get("/email", (req, res) => {
    console.log(req)
    var transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 587,
      auth: {
        user: 'morteza_faraji@yahoo.com',
        pass: 'fdhofjokrjgypglw'
      }
    });

    var mailOptions = {
      from: 'morteza_faraji@yahoo.com',
      to: 'morteza_faraji@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function(error: any, info: any){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
   res.send("email")
  }
);

// Add one user
userRouter.post(
  Paths.Users.Add,
  // validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
