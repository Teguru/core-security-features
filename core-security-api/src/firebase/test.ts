import { auth } from "./admin";

const test = async () => {
    const user = await auth.getUser()
}