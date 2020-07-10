var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="blinkyDancer"></span>');
}
//
// create __proto__ link
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

// console.log()
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// var oldStep = MakeDancer.prototype.step.call(MakeBlinkyDancer)

MakeBlinkyDancer.prototype.step = function () {
  // call() invokes a function right away. changes this binding to the first argument.
  MakeDancer.prototype.step.call(this);
  // use my parent's step function,
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}