import { Character } from "./models/Character.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
// REVIEW DO NOT WRITE OUT IMPORT STATMENTS LONG HAND, let vs code import them for you, if the import isn't coming up you might need to open the file.

class ObservableAppState extends EventEmitter { // don't worry about his yet

  // REVIEW order to build in (most the time)
  // 1. Build the model and properties (don't need a html template yet)
  //2. Create data using that model in the appstate
  //3. Create a controller, and have the controller, draw the data to the page (either with html templates or just string con-cat)
  //4. Add interactions to page elements
  //5. the rest of it...

  characters = [
    new Character('bilbo', 'burglar', 10),
    new Character('legolas', 'Ranger', 100),
    new Character('gimili', 'Warrior', 120),
    // { name: 'Gandalf', role: 'wizard', health: 5000000 } not a character even though he might look like one
  ]

  // NOTE Used to load initial data
  init() {
    console.log(this.characters)
    this.characters.forEach(c => c.greeting())
  }












































  page = ''






































  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])





























}




















export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
