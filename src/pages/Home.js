import React, { useEffect } from 'react';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {loadTodo} from '../actions/todoAction'
import TodoList from '../components/TodoList';

function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTodo())
    }, [dispatch])

    const {all, active, completed} = useSelector((state) => state.todos)

    // console.log(all)

    return (
        <div>
            <Header all={all} />
            <TodoList all={all}/>
            {/* {all.map((item) =>
                <div key={item.text}>
                    <p>{item.text}</p>
                </div>
                
            )} */}
        </div>
    )
}



export default Home