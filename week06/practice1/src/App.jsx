import { useContext, useState } from 'react';
import MyInput from './components/MyInput';
import MyButton from './components/MyButton';
import { TodoContext } from './context/TodoContext';


function App() {
  const { todos, setTodos, text, setText, editingId, setEditingId, editText, setEditText, handleSubmit, addTodo, deleteTodo, updateTodo } = useContext(TodoContext)


  return (
    <>
      <form onSubmit={handleSubmit} className='myForm'>
        <MyInput
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <MyButton type='submit' text="할 일 등록" />
      </form>
      <div >
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px' }} className='listItem'>
            {editingId !== todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <p>{todo.task}.</p>
              </div>
            )}
            {editingId === todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}</p>
                <MyInput
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <MyButton onClick={() => deleteTodo(todo.id)} text="삭제하기" />
            {editingId === todo.id ? (
              <MyButton onClick={() => updateTodo(editingId, editText)} text="수정 완료" />
            ) : (
              <MyButton onClick={() => {
                setEditingId(todo.id);
                setEditText(todo.task);
              }}
                text="수정 진행" />

            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;