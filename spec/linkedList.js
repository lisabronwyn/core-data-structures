import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode', () => {
    it('returns the first node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      expect(myLinkedList.getHeadNode().data).to.equal('foo')
    })
  })

  context('getTailNode', () => {
    it('returns the last node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      expect(myLinkedList.getTailNode().data).to.equal('baa')
    })
  })

  context('contains', () => {
    it('determines whether or not the list contains the provided data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      expect(myLinkedList.contains('foo')).to.equal(true)
    })
  })

  context('find', () => {
    it('returns the first node containing the provided data, or -1 if not found', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      expect(myLinkedList.find('foo').data).to.equal('foo')
    })
  })

  context('insert', () => {
    it('inserts a node to the tail of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      expect(myLinkedList.contains()).to.equal(true)
    })
  })

  context('insertFirst', () => {
    it('inserts a node to the head of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      expect(myLinkedList.getHeadNode().data).to.equal('baa')
    })
  })

  context('insertBefore', () => {
    it('inserts a node before the first node', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      myLinkedList.insertBefore('foo', 'baz')
      expect(myLinkedList.getHeadNode().data).to.equal('baz')
    })
  })

  context('insertAfter', () => {
    it('inserts a node after the first node', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      myLinkedList.insertAfter('foo', 'baz')
      expect(myLinkedList.find('foo').next.data).to.equal('baz')
    })
  })

  context('remove', () => {
    it('removes the tail node from the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.remove()
      expect(myLinkedList.contains('bar')).to.equal(true)
    })
  })

  context('removeFirst', () => {
    it('removes the head node from the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      myLinkedList.removeFirst()
      expect(myLinkedList.contains('foo')).to.equal(true)
    })
  })

  context('isEmpty', () => {
    it('shows if the list is empty or not', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.isEmpty()).to.equal(true)
    })
  })

  context('size', () => {
    it('returns the size of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      expect(myLinkedList.size()).to.equal(3)
    })
  })

  context('clear', () => {
    it('clears the list of all nodes', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('foo')
      myLinkedList.insert('bar')
      myLinkedList.insert('baa')
      myLinkedList.clear()
      expect(myLinkedList.size()).to.equal(0)
    })
  })
})