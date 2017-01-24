/*
  Thanks **Benjamin De Cock**
  for [article](https://hackernoon.com/web-components-the-react-way-8ed5b6f4f942#.kq2avd93g)
*/

customElements.define('hello-message', class extends HTMLElement {
  constructor() {
    super()
    const root = this.attachShadow({mode: 'open'})

    root.innerHTML = 'Hello <slot></slot>'
  }
})
