import { Request, Response } from "express";
import firebase from "../config/authFirebase";
import User from "../models/User";
import { IStatus } from "../types/IStatus";
import { FireDataBase } from "../types/IFirebase";

const database: FireDataBase = firebase.database();
const user : User = new User(database);

export const createUser = ( req : Request , res : Response) => {
    const parameters = req.body;
    const create = user.create(parameters, (status: IStatus) => {
        return res.json(status);
    });
    
    return create;
}

export const checkIfExists = ( req : Request , res : Response) => {
    const parameters = req.body;
    const exists =  user.checkIfExistUser(parameters, (status: IStatus) => {
        return res.json(status);
    });
    
    return exists;
}