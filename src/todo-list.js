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

    root.querySelector('input').addEventListener('click', () => {
      this.dispatchEvent(new Event('change'))
    })
  }

  get index() {
    return this.getAttribute('index')
  }

  get checked() {
    return this.querySelector('input[type=checkbox]').hasAttribute('checked')
  }
})

customElements.define('todo-list', class extends HTMLElement {
  constructor() {
    super()
    const root = this.attachShadow({mode: 'open'})

    root.innerHTML = `
      <ul></ul>
    `

    this.elList = root.querySelector('ul')
    this.renderTasks()
  }

  get tasks() {
    return JSON.parse(this.getAttribute('tasks'))
  }

  set tasks(newTasks) {
    this.renderTasks(JSON.parse(newTasks))
  }

  renderTasks(tasks = this.tasks) {
    this.elList.innerHTML = `
      ${tasks.map((todo, index) => `
        <li>
          <todo-item index=${index}>
            ${todo}
          </todo-item>
        </li>
      `).join('')}
    `;

    [].slice.call(this.elList.querySelectorAll('todo-item'))
      .forEach(item => item.addEventListener('change', () => console.log('hi')))
  }
})
