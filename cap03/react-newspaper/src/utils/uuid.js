
// this one-liner generator was taken from: https://stackoverflow.com/a/2117523/2015678
export const uuid =  function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  }
  
  // I made this to create Ids similar to those in the backend
  export const uniqueId =  function () {
    let chars = 'abcdefghijklnmopqrstuvwxyz0123456789';
    return 'xxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
      return chars.charAt(Math.random() * 37);
    });
  }
  