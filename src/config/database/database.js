import { Sequelize } from "sequelize";
import { envs } from "../environments/environments.js";

export const sequelize = new Sequelize(envs.DB_URI, {
    logging: false
})

export async function authenticate(){
    try {
        await sequelize.authenticate()
        console.log('Connection has been established succesfully 👻')
    } catch (error) {
        console.error(error)
    }
}

export async function syncUp(){
    try {
        await sequelize.sync()
        console.log('Connection has been synced succesfully 😊')
    } catch (error) {
        
    }
}