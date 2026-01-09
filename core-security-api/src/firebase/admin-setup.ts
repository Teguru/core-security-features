import dotenv from 'dotenv'
import { initializeApp, getApps } from "firebase-admin/app";
import { getAuth } from 'firebase-admin/auth'
import {getFirestore} from 'firebase-admin/firestore'
dotenv.config()

if (!getApps().length)
    initializeApp({
        projectId: process.env.GOOGLE_CLOUD_PROJECT
    })


export const auth = getAuth()
export const db = getFirestore()



