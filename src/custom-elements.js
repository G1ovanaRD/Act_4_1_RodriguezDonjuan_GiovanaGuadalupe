import { defineCustomElement } from 'vue'
import BotonLogin from './components/BotonLogin.ce.vue'
import Texto from './components/Texto.ce.vue'
import Input from './components/Input.ce.vue'
import Icon from './components/Icon.ce.vue'
import Image from './components/Image.ce.vue'


const text=defineCustomElement(Texto)
customElements.define('texto-body', text)

const input=defineCustomElement(Input)
customElements.define('input-text', input)

const icon = defineCustomElement(Icon)
customElements.define('icon-element', icon)

const image=defineCustomElement(Image)
customElements.define('image-element', image)

const BotonL = defineCustomElement(BotonLogin)
customElements.define('boton-login', BotonL)