/**
 * Array to store tasks.
 * @type {Array<Object>}
 */
 let tasks = []

 /**
  * ID for the next task. Increments each time a new task is added.
  * @type {number}
  */
 let currentId = 1
 
 /**
  * Model class representing a task.
  * @class
  */
 export class TaskModel {
   /**
    * Fetches all tasks.
    * @name TaskModel.getAllTasks
    * @static
    * @returns {Array<Object>} Array of tasks.
    */
   static async getAllTasks () {
     return tasks
   }
 
   /**
    * Adds a new task to the list.
    * @name TaskModel.addTask
    * @static
    * @param {string} description - The description of the task.
    * @returns {Object} The new task object.
    */
   static async addTask (description = '') {
     if (!description) {
       return {}
     }
 
     const task = {
       id: currentId,
       description
     }
 
     currentId++
 
     tasks.push(task)
 
     return task
   }
 
   /**
    * Deletes a task from the list by its ID.
    * @name TaskModel.deleteTask
    * @static
    * @param {number} id - The ID of the task to delete.
    */
   static async deleteTask (id = 0) {
     const removeTask = tasks.filter((task) => task.id !== Number(id))
     tasks = removeTask
     return tasks
   }
 }