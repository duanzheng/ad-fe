/**
 * Created by Tony on 2017/3/17.
 */
export const ADD_TODO = 'add_todo';

export function addTodo(desc) {
    return {
        type: ADD_TODO,
        desc
    }
}