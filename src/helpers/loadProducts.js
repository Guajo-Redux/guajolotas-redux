import { db } from '../firebase/firebase-config';



export const loadProducts = async ( uid ) => {

    const taskStore = await db.collection(`${uid}/homework/task`).get();
    const tasks = [];

    taskStore.forEach( task => {
        tasks.push({
            id: task.id,
            ...task.data()
        })
    });
    
    return tasks;
}
