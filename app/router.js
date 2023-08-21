import { AboutController } from "./controllers/AboutController.js";
import { CharactersController } from "./controllers/CharactersController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


// NOTE we won't use new for our controllers, cause our router will handle it
export const router = [
  {
    path: '',
    controller: CharactersController,
    view: /*html*/`
      <div>It's time for characters</div>
      <section class="row" id="characters"></section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]