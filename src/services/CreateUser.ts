interface CreateUserData {
    name?: string | boolean;
    email: String;
    password: string;
    techs: Array<string | TechObject>
    projects: string[]
}

interface TechObject {
    title: string;
    experience: number
}

export default function createUser({name = '', email, password}: CreateUserData){
    const user = {
        name,
        email,
        password
    }
    return user;
}