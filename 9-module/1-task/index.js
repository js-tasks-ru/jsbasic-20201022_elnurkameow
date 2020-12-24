/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

export default function promiseClick(button) {
  return new Promise(function(resolve) {
    button.addEventListener('click', event => {
      resolve(event)
    },{ once: true})
  })
}