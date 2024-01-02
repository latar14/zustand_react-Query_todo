import React from 'react'
import styles from './index.module.scss'
import { useTodoStore } from '../../data/stores/useTodoStore'
import { InputPlus } from '../components/inputPlus'
import InputTask from '../components/inputTask'


export const App: React.FC = () => {

    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useTodoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ])

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>
                <InputPlus onAdd={(title) => {
                    if(title) {
                        createTask(title)
                    }
                }}/>
            </section>
            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.article}>Задачи не найдены</p>
                )}
                {tasks.map((task) => (
                    <InputTask 
                    key={task.id}
                    id={task.id} 
                    title={task.title}
                    onDone={removeTask}
                    onEdited={updateTask}
                    onRemoved={removeTask}
                    />
                ))}
                
            </section>
        </article>
    )
}