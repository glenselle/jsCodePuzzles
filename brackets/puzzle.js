/*

  The Bracket Puzzle

  Expectation:
  When getUserSetting is called with johnUser and 'enable-notifications' it
  should return the value from the 'user-settings' -- specifically `true`

  Constraints:
  Only change the one line in getUserSetting (do not add any lines)

*/

function getUserSetting(user, setting) {
  return user['user-settings'].setting
}

const johnUser = {
  'full-name': 'John Doe',
  'user-settings': {
    'enable-notifications': true,
    'ui-theme': 'dark'
  }
}

console.log(getUserSetting(johnUser, 'enable-notifications'))
