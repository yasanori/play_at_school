
export default function typeAliasSample() {
  // タイプエイリアス
  type Country = {
    name: string
    capital: string
    language: string
  }

  const japan: Country = {
    name: "japan",
    capital: "tokyo",
    language: "japanese"
  }

  console.log("Object alias sample 1 :", japan)

  const usa: Country = {
    name: "usa",
    capital: "washinton D.C",
    language: "english"
  }

  console.log("Object alias sample 2 :", usa)

  // uniaon intersection
  type Knight = {
    hp: number
    sp: number
    skill: string
  }

  type Wizard = {
    hp: number
    mp: number
    magic: string
  }

  // union Knight or Wizard
  type Adventurer = Knight | Wizard

  // intersection Knight and Wizard
  type Paladin = Knight & Wizard


  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    skill: "katter"
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 50,
    magic: "fire"
  }

  console.log("Object alias sample 3 :", adventurer1, adventurer2)

  const paladin: Paladin = {
    hp: 550,
    sp: 230,
    mp: 420,
    skill: "superKatter",
    magic: "fireWave"
  }

  console.log("Object alias sample 4 :", paladin)
}
