import User from '../models/userModel';

export const createUser = async (nombre: string, email: string) => {
    const user = await User.create({ nombre, email });
    return user;
}

export const getUsers = async () => {
    const users = await User.findAll();
    return users;

}

export const getUserById = async(id: number) => {
    const userById = await User.findByPk(id);
    return userById;
}

export const updateUser = async(id: number, nombre: string, email: string) => {
    const user = await User.findByPk(id);
    if(user){
        user.nombre = nombre;
        user.email = email;
        await user.save();
        return user;
    }
    return null;
}

export const deleteUser = async (id: number) => {
    const user = await User.findByPk(id);
    if(user){
        user.destroy();
        return true;
    }
    return false;
}