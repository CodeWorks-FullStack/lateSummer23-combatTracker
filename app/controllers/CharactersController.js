import { AppState } from "../AppState.js"
import { charactersService } from "../services/CharactersService.js"


export class CharactersController {
  constructor() {
    console.log('character controller loaded')
    // NOTE need 'this' cause draw characters is in the same class definition from which it was called
    this.drawCharacters()
  }

  drawCharacters() {
    // needs the characters,
    // generate content (html) to display
    // inject html to page
    let content = ''
    AppState.characters.forEach(character => {
      // NOTE this template was moved to the model
      // content += `
      // <div class="col-4 bg-light rounded elevation-2">
      // ${character.name} - ${character.role}
      // <div> ${character.health}/${character.maxHealth} </div>
      // <button class="btn" onclick="app.CharactersController.manageHealth('${character.name}')">manage health</button>
      // </div>
      // `
      content += character.cardTemplate
    })
    document.getElementById('characters').innerHTML = content
  }

  manageHealth(characterName) {
    // NOTE parse it turns the string number from the prompt into an int
    let updatedHealth = parseInt(window.prompt('new health value?'))
    console.log('managing health', characterName, updatedHealth)
    // NOTE the function in the controller is only responsible for 'drawing' and taking in 'actions' it does not perform 'data manipulation' (business logic).
    charactersService.manageHealth(characterName, updatedHealth) // the inner function in the service will complete before drawCharacters on line 35 runs
    this.drawCharacters()
  }
}