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
        ${this.tasks.map((todo, index) => `
          <li>
            <todo-item index=${index}>
              ${todo}
            </todo-item>
          </li>
        `).join('')}
      </ul>
    `
  }

  get tasks() {
    return JSON.parse(this.getAttribute('tasks'))
  }
})
