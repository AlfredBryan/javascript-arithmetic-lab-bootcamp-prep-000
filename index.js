var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b) {
  var math = a + b;
  return math
}
add()

function subtract(a, b) {
  var math = b - a;
  return math
}
subtract()