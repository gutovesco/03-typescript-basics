import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: 'Augusto', 
        email: 'guto.vesco@hotmail.com', 
        password: '123456',
        techs: ['Node.js', 'react', 'react-native', {title: 'JS', experience: 10}],
        projects: ['FSJ', 'CodeSearcher']
    });

    return response.json({message: 'Working'})
}