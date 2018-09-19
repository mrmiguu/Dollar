const $ = new Proxy({}, {

  get: function(state, prop) {
    // console.log(`get ${JSON.stringify(state, null, 2)}`)

    return state.$prom = new Promise(function(resolve) {
      state.$res = resolve
    })
  },

  set: function(state, prop, value) {
    // console.log(`set ${prop}=${value}`)
    
    state.$res(value)
  }

})

async function setName(name) {
  $.Name = name
  console.log(`age ${await $.Age}`)
}

async function setAge() {
  console.log(`name ${await $.Name}`)
  $.Age = 26
}

setAge()
setName('Alex')
