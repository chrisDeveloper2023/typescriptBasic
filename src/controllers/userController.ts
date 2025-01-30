import { Request, Response } from 'express';
import { createUserService, getUsersService, getUserByIdService, updateUserService, deleteUserService } from '../services/userServices';

export const createUser = async (req: Request, res: Response) => {
    const {nombre, email} = req.body;
    try {
        const user = await createUserService(nombre, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: 'Error interno al crear el usuario', error});)
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService();
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({message: 'Error de servidor al obtener usuarios', error})
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(Number(id));
        if (user) {
            res.status(200).json(user);  
          } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
          }
    } catch (error) {
        res.status(500).json({message: 'Error al consultar usuario', error});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    try {
        const updateUser = await updateUserService(Number(id), nombre, email);
        if(updateUser){
            res.status(200).json(updateUser);
        }
        else{
            res.status(404).json({message:'Usuario no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const success = await deleteUserService(Number(id)); 
      if (success) {
        res.status(204).end();  
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
  }