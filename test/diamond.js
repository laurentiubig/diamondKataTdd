const should = require('should')
const diamond = require('../lib/diamond.js')
const { W } = require('./assets/diamondsExpected.js')

describe('diamond', () => {
  it('A', done => {
    diamond('A').should.equal('A')
    done()
  })

  it('W', done => {
    diamond('W').should.equal(W)
    done()
  })

  it('Wrong input received', done => {
    diamond('2').should.equal('The input is not a letter')
    done()
  })
})
