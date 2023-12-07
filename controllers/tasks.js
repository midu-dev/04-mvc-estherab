// importar modelo
import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = async ({ body }, res) => {
  const task = await TaskModel.addTask(body.description)
  res.json(task)
}

export const deleteTask = ({ params }, res) => {
  TaskModel.deleteTask(params.id)
  res.json({ message: 'Deleted successfully' })
}
