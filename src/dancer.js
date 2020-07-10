// Creates and returns a new dancer object that can step
var MakeDancer = function (top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(this.top, this.left);
  this.lineUp();
};

MakeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  var that = this;
  setTimeout(
    function () {
      // console.log(that)
      that.step()
    }
    , this.timeBetweenSteps)
  // bind func: maintains the context you are in.
};

MakeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};


MakeDancer.prototype.lineUp = function (top, left) {
  var styleSettings = {
    top: top / 2,
    left: 0;
  };

  this.$node.css(styleSettings);
};


