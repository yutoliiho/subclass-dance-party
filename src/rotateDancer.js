var MakeRotateDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="rotateDancer"></span>');
}

MakeRotateDancer.prototype = Object.create(MakeDancer.prototype);
MakeRotateDancer.prototype.constructor = MakeRotateDancer;

// re-make new step function
MakeRotateDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};