const initialState = {
  name: 'Zarema',
  tasks: ['First', 'Second', 'Third'],
}

const name = (state = initialState.name, action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return action.value
  default:
    return state
  }
}

const tasks = (state = initialState.tasks, action) => {
  switch (action.type) {
  case 'TASK_DONE':
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1),
    ]
  default:
    return state
  }
}

const {combineReducers, createStore} = Redux

let store = createStore(combineReducers({
  name,
  tasks,
}))


document.getElementById('hello').innerHTML = `<hello-message name=${store.getState().name}></hello-message>`
document.getElementById('todoList').innerHTML = `<todo-list tasks=${JSON.stringify(store.getState().tasks)}></todo-list>`

store.subscribe(() => {
  console.log(store.getState().name, ' ', JSON.stringify(store.getState().tasks))
  document.querySelector('#hello hello-message').setAttribute('name', store.getState().name)
  document.querySelector('#todoList todo-list').setAttribute('tasks', JSON.stringify(store.getState().tasks))
})

setTimeout(() => {
  store.dispatch({
    type: 'CHANGE_NAME',
    value: 'Anna',
  })

  store.dispatch({
    type: 'TASK_DONE',
    index: 1,
  })
}, 3000)
