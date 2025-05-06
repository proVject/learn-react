import {type CSSProperties, type JSX, useState} from 'react';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoItemProps {
    todoItem: Todo,
    onChangeItem: (newTodoItem: Todo) => void
    onDelete: (id: number) => void
}

interface NewTodoProps {
    onAddItem: (newTodo: Todo) => void
}

const containerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px'
}

const TodoItem = ({todoItem, onChangeItem, onDelete}: TodoItemProps): JSX.Element => {
    const onChange = (isComplete: boolean): void => {
        onChangeItem({ ...todoItem, completed: isComplete })
    }

    const containerStyles: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px'
    }

    return (
        <div style={containerStyles}>
            <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={(e) => onChange(e.target.checked)}
            />
            <h3>{todoItem.title}</h3>
            <button onClick={() => onDelete(todoItem.id)}>delete</button>
        </div>
    )
}

const NewTodo = ({ onAddItem }: NewTodoProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('')

    const onAdd = () => {
        onAddItem({
            id: Math.random(),
            title: inputValue,
            completed: false
        })
        setInputValue('')
    }

    return (
        <div style={containerStyles}>
            <span>Title: </span>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

const TodoList = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, title: "first", completed: false},
        {id: 2, title: "second", completed: true },
    ])

    const onChangeItem = (newTodoItem: Todo): void => {
        const newTodos = [...todos]
        const idx = newTodos.findIndex(i => i.id === newTodoItem.id)
        if (idx < 0) return
        newTodos.splice(idx, 1, newTodoItem)
        setTodos(newTodos)
    }
    const onDeleteItem = (id: number): void => {
        const newTodos = [...todos].filter(i => i.id !== id)
        setTodos(newTodos)
    }

    const onAdd = (newTodo: Todo): void => {
        const newTodos = [...todos]
        newTodos.push(newTodo)
        setTodos(newTodos)
    }

    return (
        <div>
            <h3>New Item</h3>
            <NewTodo onAddItem={onAdd} />
            <h3>List</h3>
            {
                todos.map(t => (
                    <TodoItem key={t.id} todoItem={t} onChangeItem={onChangeItem} onDelete={onDeleteItem} />
                ))
            }
        </div>
    );
};

export default TodoList;