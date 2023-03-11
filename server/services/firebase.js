import admin from "firebase-admin";

import serviceAccount from "../credentials/testt-ab297-firebase-adminsdk-hfp3h-1894019d33.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
  