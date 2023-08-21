import { AppState } from "../AppState.js"




class CharactersService {


  manageHealth(characterName, updatedHealth) {
    let character = AppState.characters.find(c => c.name == characterName)
    console.log('service', characterName, updatedHealth, character)
    character.health = updatedHealth
    console.log(character)
  }

}



export const charactersService = new CharactersService()