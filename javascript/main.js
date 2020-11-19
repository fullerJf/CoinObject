let coin = {
  state: 0,

  /*  1. Randomly set your coin object's "state" property to be either 
                 0 or 1: use "this.state" to access the "state" property on this object

              2. Return the string "Heads" or "Tails", depending on whether
                "this.state" is 0 or 1. 

              3.  Set the properties of this image element to show either face-up
                 or face-down, depending on whether this.state is 0 or 1.
          */

  flip: function () {
    this.state = Math.floor(Math.random() * 2);
  },

  toString: function () {
    if (this.state === 0) {
      return "heads";
    } else {
      return "Tails";
    }
  },

  toHTML: function () {
    let image = document.createElement("img");
    image.style.width = "100px";
    image.style.height = "100px";
    if (this.state === 0) {
      image.src = "./image/heads.jpg";
    } else {
      image.src = "./image/tails.jpg";
    }
    return image;
  },
};
/* uses a loop to flip the coin 20 times. Each time the coin flips, 
display the result of each flip as a string on the page (make use of your toString() method)
*/

function display20flips() {
  for (let i = 1; i < 20; i += 1) {
    document.body.append(coin.toString());
    coin.flip();
  }
}
display20flips();

/*
using a loop to flip the coin 20 times…but this time instead of displaying the result as a string,
 display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
*/

function display20Images() {
  for (let i = 1; i < 20; i += 1) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}
display20Images();
