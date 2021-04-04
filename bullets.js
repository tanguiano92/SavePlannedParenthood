'use strict';
// game components compiled from Dan Shiffman Coding Train tutorials
function Pill(x, y) {
  this.x = x;
  this.y = y;
  this.r = 3;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255, 215, 0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.hits = function(politician) {
    var d = dist(this.x, this.y, politician.x, politician.y);
    if (d < this.r + politician.r) {
      return true;
    } else {
      return false;
    }
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.update = function() {
    this.x = this.x + 2;
  }
}