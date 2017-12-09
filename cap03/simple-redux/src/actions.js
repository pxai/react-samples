export const SHOW_NAME = 'SHOW_NAME'
export const CHANGE_NAME = 'CHANGE_NAME'

export function showName () {
    return {
      type: SHOW_NAME
    }
  }
  
export function changeName ( name ) {
  return {
    type: CHANGE_NAME,
    name
  }
}

