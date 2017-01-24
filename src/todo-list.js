const state = ['Buy milk', 'Call Sarah', 'Pay bills']

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
        ${state.map(todo => `
          <li>
            <todo-item>${todo}</todo-item>
          </li>
        `).join('')}
      </ul>
    `
  }
})
