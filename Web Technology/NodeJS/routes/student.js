import express from 'express';

import { getStudents, createStudent, getStudent, deleteStudent, updateStudent } from '../controllers/students.js'

const router = express.Router();

router.get('/', getStudents);

router.post('/', createStudent);

router.get('/:id', getStudent);

router.delete('/:id', deleteStudent);

router.patch('/:id', updateStudent);

export default router;