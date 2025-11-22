import { defineCustomElement } from 'vue'
import Texto from './components/Texto.ce.vue'
import Input from './components/Input.ce.vue'
import Icon from './components/Icon.ce.vue'
import Image from './components/Image.ce.vue'
import Header from './components/Header.ce.vue'
import ButtonGenericCe from './components/ButtonGeneric.ce.vue'

const text=defineCustomElement(Texto)
customElements.define('texto-body', text)

const input=defineCustomElement(Input)
customElements.define('input-text', input)

const icon = defineCustomElement(Icon)
customElements.define('icon-element', icon)

const image=defineCustomElement(Image)
customElements.define('image-element', image)

const ButtonGeneric=defineCustomElement(ButtonGenericCe)
customElements.define('button-generic', ButtonGeneric)

const header=defineCustomElement(Header)
customElements.define('header-element', header)