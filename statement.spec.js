const statement = require('./statement')
const plays = require('./plays.json')
const invoices = require('./invoices.json')
const playsFail = require('./plays-fail.json')

describe('main test', () => {
  it('happy path 1', () => {
    expect(JSON.stringify(statement(invoices, plays).split('\n'))).toBe(
      JSON.stringify([
        'Statement for BigCo',
        ' Hamlet: $650.00 (55 seats)',
        ' As You Like It: $580.00 (35 seats)',
        ' Othello: $500.00 (40 seats)',
        'Amount owed is $1,730.00',
        'You earned 47 credits',
        ''
      ])
    )
  })

  it('fail path 1', () => {
    expect(() => {
      statement(invoices, playsFail)
    }).toThrow()
  })
})
