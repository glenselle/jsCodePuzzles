/*

  The Misbehaving Map Puzzle

  Expectation:
  The variable usernames should contain an array of strings representing
  the usernames of the people

  Constraints:
  Only remove three symbols to solve the puzzle

*/

let people = [
  {username: 'holly', email: 'holly@holly.com'},
  {username: 'james', email: 'james@james.com'},
  {username: 'alex', email: 'alex@alex.com'},
  {username: 'rachel', email: 'rachel@rachel.com'},
  {username: 'victoria', email: 'victoria@victoria.com'},
  {username: 'lester', email: 'lester@lester.com'}
]

let usernames = people.map(user => {user.usernames})
console.log(usernames)
