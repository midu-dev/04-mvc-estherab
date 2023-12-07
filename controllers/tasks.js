// importar modelo
import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = async (req, res) => {
  const task = await TaskModel.addTask(req.body.description)
  res.json(task)
}

export const deleteTask = (req, res) => {
  TaskModel.deleteTask(req.params.id)
  res.json({ message: 'Task deleted' })
}
