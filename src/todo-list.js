customElements.define('todo-item', class extends HTMLElement {
  constructor() {
    super()
    const root = this.attachShadow({mode: 'open'})

    root.innerHTML = `
      <label>
        <input type=checkbox>
        <slot></slot>
      </label>
    `
  }
})

customElements.define('todo-list', class extends HTMLElement {
  constructor() {
    super()
    const root = this.attachShadow({mode: 'open'})

    root.innerHTML = `
      <ul>
        ${this.renderTasks()}
      </ul>
    `

    this.elList = root.querySelector('ul')
  }

  get tasks() {
    return JSON.parse(this.getAttribute('tasks'))
  }

  set tasks(newTasks) {
    this.elList.innerHTML =  this.renderTasks(JSON.parse(newTasks))
  }

  renderTasks(tasks = this.tasks) {
    return `
      ${tasks.map((todo, index) => `
        <li>
          <todo-item index=${index}>
            ${todo}
          </todo-item>
        </li>
      `).join('')}
    `
  }
})
