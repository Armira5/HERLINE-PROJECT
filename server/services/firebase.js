import admin from "firebase-admin";

import serviceAccount from "../credentials/vue-fire-auth-74f30-firebase-adminsdk-j7a3r-6e9ab305b0.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
  