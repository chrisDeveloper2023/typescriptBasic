import { Router } from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);
