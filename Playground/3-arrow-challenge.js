//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

// My code
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        let i = 0
        const uncompleted = this.tasks.filter(() => {
            if (this.tasks[i].completed === true) {
                i++
                return false
            }else {
                i++
                return true
            }
        })
        console.log(uncompleted)
    }
}

console.log(tasks.getTasksToDo())

// Instructors code

// const tasks = {
//     tasks: [{
//         text: 'Grocery shopping',
//         completed: true
//     },{
//         text: 'Clean yard',
//         completed: false
//     }, {
//         text: 'Film course',
//         completed: false
//     }],
//     getTasksToDo() {
//         return this.tasks.filter((task) => task.completed === false)
//     }
// }

// console.log(tasks.getTasksToDo())