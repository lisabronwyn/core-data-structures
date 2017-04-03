import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe.only('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add', () => {
    it('adds an element to the set.', () => {
      const mySet = new Set()
      mySet.add('foo')
      console.log(mySet)
      expect(mySet.contains('foo')).to.equal(true)

    })
  })

  context('isEmpty', () => {
    it('returns true if the set is empty', () => {
      const mySet = new Set()
      expect(mySet.isEmpty()).to.equal(true)
    })

    // it.only('returns false if the set is not empty', () => {
    //   const mySet = new Set()
    //   mySet.add('A')
    //   expect(mySet.isEmpty()).to.equal(false)
    // })
  })

  context('contains', () => {
    it('returns true if the set contains the element', () => {
      const mySet = new Set()
      mySet.add('B')
      expect(mySet.contains('B')).to.equal(true)
    })
  })

  context('remove', () => {
    it('removes an element from the set', () => {
      const mySet = new Set()
      mySet.remove('A')
      expect(mySet.isEmpty()).to.equal(true)
    })
  })

  context('forEach', () => {
    it('takes a callback function and passes it each element in sequence', () => {
      const mySet = new Set()
      mySet.add('foo')
      mySet.add('bar')
      mySet.add('baz')
      mySet.forEach((element) => ++element)
      expect(mySet.storage).to.deep.equal([2,3,4])

    })
  })

  context('size', () => {
    it('returns the number of elements in the set', () => {
      const mySet = new Set()
      mySet.add('foo')
      mySet.add('bar')
      mySet.add('baz')
      expect(mySet.size()).to.equal(3)
    })
  })

  context('union', () => {
    it('unions the set with another set and returns the resulting set', () => {
      const mySet = new Set()
      const set = new Set()
      //const otherSet = new Set()
      mySet.add('foo')
      mySet.add('bar')
      set.add('man')
      set.add('hey')
      expect(mySet.union(set).size()).to.equal(4)
    })
  })

  context('intersect', () => {
    it('intersects the set with another set and returns the resulting set', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const set = new Set()
      set.add('D')
      set.add('E')
      set.add('F')
      expect(mySet.intersect(set)).to.deep.equal(['B', 'C'])
    })
  })

  context('difference', () => {
    it('returns a set that contains the elements found in the set but not in otherSet', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const set = new Set()
      set.add('D')
      set.add('E')
      set.add('F')
      expect(mySet.difference(set).size()).to.equal(1)
    })
  })

  context('isSubset', () => {
    it('returns true if the set is a subset of otherSet', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')

      const set = new Set()
      set.add('A')
      set.add('B')
      set.add('C')
      set.add('D')
      expect(mySet.isSubset(set)).to.equal(true)
    })
  })

  context('clone', () => {
    it('returns a cloned set', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.clone()).to.equal(true)
    })
  })
})