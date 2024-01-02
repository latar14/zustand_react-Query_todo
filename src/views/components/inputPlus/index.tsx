import React, {useState, useCallback} from 'react'
import styles from './index.module.scss'


interface InputPlusProps {
    onAdd: (title: string) => void;
}

 export const InputPlus: React.FC<InputPlusProps> = ({
    onAdd,
 }) => {

    const [value, setValue] = useState('');

    const addTodo = useCallback(() => {
        onAdd(value);
        setValue('')
    }, [value])


    return (
        <div className={styles.inputPlus}>
            <input
            type="text"
            className={styles.inputPlusValue}
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    addTodo();
                }
            }}
            placeholder='Type...'
            />
            <button onClick={addTodo}
            aria-label = "Add"
            className={styles.inputPlusButton}
            >

            </button>
        </div>
    );
};

export default InputPlus;