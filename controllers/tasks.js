import { TaskModel } from "../models/task"

export const getAllTasks = (req, res) => {

    const tasks = await TaskModel.getAllTasks()
    res.json(tasks)
}

export const addTask = (req, res) => {

  const task = await TaskModel.addTask(req.body.description)
  res.json(task)
}

export const deleteTask = (req, res) => {
  try {
    await TaskModel.deleteTask(req.params.id)
    res.json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
