var MakePopDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;


// re-make new step function
MakePopDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
