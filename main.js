//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status
  this.color = color
  this.hungry = hungry
  this.owner = owner
}

let sadie = new Dog ('normal', 'black', false, 'mason', )
let atticus = new Dog ()
let moonshine = new Dog (null,null,true,)

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool
  this.pet = function (dog) {
    dog.status = 'happy'
  }
  this.feed = function (dog) {
    dog.hungry = false
  }
}

const mason = new Human(false)
const julia = new Human(true)
// Instances of Human
// Needed: mason, julia
