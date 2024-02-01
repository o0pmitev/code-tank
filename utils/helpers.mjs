export default class CustomHelpers {

  /**
   * Alias for console.log
   * @param {any} args
   */
  static log(args) {
      console.log(args)
  }

  /**
  * @description Gets the coordinates of the mouse click on a given element (x, y)
  * @param {string} elementClass class name of the element
  */
  static getElementClickOriginPoint(elementClass) {
    document.querySelector(`.${elementClass}`).onclick = function(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; // x position within the element.
      var y = e.clientY - rect.top; // y position within the element.
      console.log(x, y);
    }
  }

}
