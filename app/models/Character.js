

// NOTE class creates a blueprint for a data object
export class Character {
  name
  role
  health
  maxHealth
  constructor(newName, newRole, newHealth) {
    console.log('building a character')

    // NOTE THIS is a context for a class instance to look itself
    this.name = newName
    this.role = newRole
    this.health = newHealth
    this.maxHealth = newHealth
  }

  greeting() {
    console.log('hello my name is', this.name)
  }

  // NOTE getters are like computed properties, when you access them, they run "calculating" the value
  get healthPercentage() {
    return (this.health / this.maxHealth) * 100
  }

  get cardTemplate() {
    return `
    <div class="col-4 bg-light rounded elevation-2">
    ${this.name} - ${this.role}
    <div> ${this.health}/${this.maxHealth} ${this.healthPercentage}% </div>
    <button class="btn" onclick="app.CharactersController.manageHealth('${this.name}')">manage health</button>
    </div>
    `
  }

}


let hobbit = new Character