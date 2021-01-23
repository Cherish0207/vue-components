const compiler = require('vue-template-compiler')
const res = compiler.compile('<div v-model="val"></div>')
console.log(res);