import { auth } from "../firebase/admin";

async function run() {
  const user = await auth.createUser({
    email: "test@example.com",
    password: "password123",
    emailVerified: true,
  });

  console.log("Created user:", user.uid);
}

run().catch(console.error);


// FIREBASE_AUTH_EMULATOR_HOST=localhost:9099 npx ts-node src/firebase/test.ts