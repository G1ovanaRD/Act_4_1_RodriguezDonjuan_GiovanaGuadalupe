// Importacion de Vue y componentes
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

// Registro de web components personalizados

// Componente de texto reutilizable
const text=defineCustomElement(Texto)
customElements.define('texto-body', text)

// Componente de iconos
const icon = defineCustomElement(Icon)
customElements.define('icon-element', icon)

// Componente de imagenes
const image=defineCustomElement(Image)
customElements.define('image-element', image)

// Componente de etiqueta de tarea
const task=defineCustomElement(Task)
customElements.define('label-task', task)

// Boton generico
const ButtonGeneric=defineCustomElement(ButtonGenericCe)
customElements.define('button-generic', ButtonGeneric)

// Boton de dia del calendario
const ButtonCa=defineCustomElement(ButtonCalendar)
customElements.define('button-calendar', ButtonCa)

// Item del menu de navegacion
const item=defineCustomElement(ItemMenu)
customElements.define('item-menu', item)

// Menu de navegacion completo
const menu=defineCustomElement(Menu)
customElements.define('menu-element', menu)

// Footer de la aplicacion
const footer=defineCustomElement(Footer)
customElements.define('footer-element', footer)

// Card de contenido
const card=defineCustomElement(Card)
customElements.define('card-element', card)

// Header del calendario
const calendarHeader=defineCustomElement(HeaderCalendar)
customElements.define('header-calendar', calendarHeader)

// Calendario completo con tareas
const calendar=defineCustomElement(Calendar)
customElements.define('calendar-element', calendar)

// Header principal de la aplicacion
const header=defineCustomElement(Header)
customElements.define('header-element', header)

// Slider de imagenes
const slider=defineCustomElement(SliderCe)
customElements.define('slider-element', slider)