var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="blinkydancer"></span>');
}
// grab prototype methods
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// re-assign constructor to MakeBlinkyDancer from Makedancer
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// make a copy of the old step function:
// var oldStep = MakeDancer.prototype.step();

// re-make new step function
MakeBlinkyDancer.prototype.step = function () {
  // option 1:
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
  // option 2:
  // oldStep;
  // this.$node.toggle();
};

// var blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps)

// console.log(blinkyDancer);
