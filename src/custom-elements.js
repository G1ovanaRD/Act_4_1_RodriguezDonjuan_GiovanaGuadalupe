import { defineCustomElement } from 'vue'
import Texto from './components/Texto.ce.vue'
import Icon from './components/Icon.ce.vue'
import Image from './components/Image.ce.vue'
import Header from './components/Header.ce.vue'
import ButtonGenericCe from './components/ButtonGeneric.ce.vue'
import ItemMenu from './components/Item-Menu.ce.vue'
import Menu from './components/Menu.ce.vue'
import SliderCe from './components/Slider.ce.vue'
import Card from './components/Card.ce.vue'
import Footer from './components/Footer.ce.vue'
import HeaderCalendar from './components/HeaderCalendar.ce.vue'
import ButtonCalendar from './components/ButtonCalendar.ce.vue'
import Calendar from './components/Calendario.ce.vue'
import Task from './components/LabelTask.ce.vue'

const text=defineCustomElement(Texto)
customElements.define('texto-body', text)

const icon = defineCustomElement(Icon)
customElements.define('icon-element', icon)

const image=defineCustomElement(Image)
customElements.define('image-element', image)

const task=defineCustomElement(Task)
customElements.define('label-task', task)

const ButtonGeneric=defineCustomElement(ButtonGenericCe)
customElements.define('button-generic', ButtonGeneric)

const ButtonCa=defineCustomElement(ButtonCalendar)
customElements.define('button-calendar', ButtonCa)

const item=defineCustomElement(ItemMenu)
customElements.define('item-menu', item)

const menu=defineCustomElement(Menu)
customElements.define('menu-element', menu)

const footer=defineCustomElement(Footer)
customElements.define('footer-element', footer)

const card=defineCustomElement(Card)
customElements.define('card-element', card)

const calendarHeader=defineCustomElement(HeaderCalendar)
customElements.define('header-calendar', calendarHeader)

const calendar=defineCustomElement(Calendar)
customElements.define('calendar-element', calendar)

const header=defineCustomElement(Header)
customElements.define('header-element', header)

const slider=defineCustomElement(SliderCe)
customElements.define('slider-element', slider)