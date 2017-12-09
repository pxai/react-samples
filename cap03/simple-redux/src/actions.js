export const SHOW_NAME = 'SHOW_NAME'
export const CHANGE_NAME = 'CHANGE_NAME'

export function showName () {
    return {
      type: SHOW_NAME
    }
  }

export function changeName ( name ) {
    console.log('Changed name in action');
  return {
    type: CHANGE_NAME,
    name
  }
}

