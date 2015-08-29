require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"egg":[function(require,module,exports){

/*
 *   egg.coffee
 *   EggStretchDot for Framer
 *   by Kasim Te (kasimte@gmail.com)
#
 *   A module for Framer Studio.
 */
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.EggStretchDot = (function(superClass) {
  extend(EggStretchDot, superClass);

  function EggStretchDot(options) {
    if (!options.width) {
      options.width = 30;
    }
    if (!options.height) {
      options.height = 30;
    }
    if (!options.backgroundColor) {
      options.backgroundColor = "rgba(0, 122, 255, 1.0)";
    }
    if (!options.borderRadius) {
      options.borderRadius = "50%";
    }
    EggStretchDot.__super__.constructor.call(this, options);
  }

  EggStretchDot.prototype.eggStretchDirection = function(distance, direction) {
    if (direction == null) {
      direction = "both";
    }
    if (direction === "both") {
      this.eggStretchX(distance);
    }
    if (direction === "left" && distance < 0) {
      this.eggStretchX(distance);
    }
    if (direction === "right" && distance > 0) {
      return this.eggStretchX(distance);
    }
  };

  EggStretchDot.prototype.eggStretchX = function(x, sensitivity, limit) {
    var l, mod, offsetLimit, r;
    if (sensitivity == null) {
      sensitivity = 0.75;
    }
    if (limit == null) {
      limit = true;
    }
    mod = this.width * sensitivity;
    offsetLimit = this.width / 2;
    this.scaleX = Utils.modulate(Math.abs(x), [0, mod], [1, 1.5], limit);
    this.centerX(Utils.modulate(x, [-mod, mod], [-offsetLimit, offsetLimit], limit));
    r = Utils.modulate(x, [-mod, mod], [60, 45], true);
    l = Utils.modulate(x, [-mod, mod], [45, 60], true);
    return this.style["borderRadius"] = r + "% " + l + "% " + l + "% " + r + "% / 50%";
  };

  return EggStretchDot;

})(Layer);


/*
  Layer Extensions
 */

Layer.prototype.centerOnSibling = function(sib) {
  return this.frame = this.centeredFrameOnTarget(sib);
};

Layer.prototype.centeredFrameOnTarget = function(target) {
  var frame;
  frame = this.frame;
  Utils.frameSetMidX(frame, parseInt(target.x + (target.width / 2.0)));
  Utils.frameSetMidY(frame, parseInt(target.y + (target.height / 2.0)));
  return frame;
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2FzaW0vRG9jdW1lbnRzL0ZyYW1lci9GcmFtZXJFZ2dTdHJldGNoRG90L0VnZ1N0cmV0Y2hEb3RFeGFtcGxlLmZyYW1lci9tb2R1bGVzL2VnZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUFBOzs7Ozs7R0FBQTtBQUFBLElBQUE7NkJBQUE7O0FBQUEsT0FjYSxDQUFDO0FBQ1osbUNBQUEsQ0FBQTs7QUFBYSxFQUFBLHVCQUFDLE9BQUQsR0FBQTtBQUNYLElBQUEsSUFBc0IsQ0FBQSxPQUFXLENBQUMsS0FBbEM7QUFBQSxNQUFBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEVBQWhCLENBQUE7S0FBQTtBQUNBLElBQUEsSUFBdUIsQ0FBQSxPQUFXLENBQUMsTUFBbkM7QUFBQSxNQUFBLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLEVBQWpCLENBQUE7S0FEQTtBQUVBLElBQUEsSUFBc0QsQ0FBQSxPQUFXLENBQUMsZUFBbEU7QUFBQSxNQUFBLE9BQU8sQ0FBQyxlQUFSLEdBQTBCLHdCQUExQixDQUFBO0tBRkE7QUFHQSxJQUFBLElBQWdDLENBQUEsT0FBVyxDQUFDLFlBQTVDO0FBQUEsTUFBQSxPQUFPLENBQUMsWUFBUixHQUF1QixLQUF2QixDQUFBO0tBSEE7QUFBQSxJQUlBLCtDQUFNLE9BQU4sQ0FKQSxDQURXO0VBQUEsQ0FBYjs7QUFBQSwwQkFRQSxtQkFBQSxHQUFxQixTQUFDLFFBQUQsRUFBVyxTQUFYLEdBQUE7O01BQVcsWUFBWTtLQUMxQztBQUFBLElBQUEsSUFBMEIsU0FBQSxLQUFhLE1BQXZDO0FBQUEsTUFBQSxJQUFDLENBQUEsV0FBRCxDQUFhLFFBQWIsQ0FBQSxDQUFBO0tBQUE7QUFDQSxJQUFBLElBQTBCLFNBQUEsS0FBYSxNQUFiLElBQXdCLFFBQUEsR0FBVyxDQUE3RDtBQUFBLE1BQUEsSUFBQyxDQUFBLFdBQUQsQ0FBYSxRQUFiLENBQUEsQ0FBQTtLQURBO0FBRUEsSUFBQSxJQUEwQixTQUFBLEtBQWEsT0FBYixJQUF5QixRQUFBLEdBQVcsQ0FBOUQ7YUFBQSxJQUFDLENBQUEsV0FBRCxDQUFhLFFBQWIsRUFBQTtLQUhtQjtFQUFBLENBUnJCLENBQUE7O0FBQUEsMEJBYUEsV0FBQSxHQUFhLFNBQUMsQ0FBRCxFQUFJLFdBQUosRUFBd0IsS0FBeEIsR0FBQTtBQUNYLFFBQUEsc0JBQUE7O01BRGUsY0FBYztLQUM3Qjs7TUFEbUMsUUFBUTtLQUMzQztBQUFBLElBQUEsR0FBQSxHQUFNLElBQUMsQ0FBQSxLQUFELEdBQVMsV0FBZixDQUFBO0FBQUEsSUFDQSxXQUFBLEdBQWMsSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUR2QixDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsTUFBRCxHQUFVLEtBQUssQ0FBQyxRQUFOLENBQWUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFULENBQWYsRUFBNEIsQ0FBQyxDQUFELEVBQUcsR0FBSCxDQUE1QixFQUFvQyxDQUFDLENBQUQsRUFBRyxHQUFILENBQXBDLEVBQTRDLEtBQTVDLENBSFYsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLE9BQUQsQ0FBUyxLQUFLLENBQUMsUUFBTixDQUFlLENBQWYsRUFBa0IsQ0FBQyxDQUFBLEdBQUQsRUFBTSxHQUFOLENBQWxCLEVBQThCLENBQUMsQ0FBQSxXQUFELEVBQWMsV0FBZCxDQUE5QixFQUEwRCxLQUExRCxDQUFULENBSkEsQ0FBQTtBQUFBLElBS0EsQ0FBQSxHQUFJLEtBQUssQ0FBQyxRQUFOLENBQWUsQ0FBZixFQUFpQixDQUFDLENBQUEsR0FBRCxFQUFNLEdBQU4sQ0FBakIsRUFBNEIsQ0FBQyxFQUFELEVBQUksRUFBSixDQUE1QixFQUFvQyxJQUFwQyxDQUxKLENBQUE7QUFBQSxJQU1BLENBQUEsR0FBSSxLQUFLLENBQUMsUUFBTixDQUFlLENBQWYsRUFBaUIsQ0FBQyxDQUFBLEdBQUQsRUFBTSxHQUFOLENBQWpCLEVBQTRCLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FBNUIsRUFBb0MsSUFBcEMsQ0FOSixDQUFBO1dBT0EsSUFBQyxDQUFBLEtBQU0sQ0FBQSxjQUFBLENBQVAsR0FBNEIsQ0FBRCxHQUFHLElBQUgsR0FBTyxDQUFQLEdBQVMsSUFBVCxHQUFhLENBQWIsR0FBZSxJQUFmLEdBQW1CLENBQW5CLEdBQXFCLFVBUnJDO0VBQUEsQ0FiYixDQUFBOzt1QkFBQTs7R0FEa0MsTUFkcEMsQ0FBQTs7QUFzQ0E7QUFBQTs7R0F0Q0E7O0FBQUEsS0EyQ0ssQ0FBQSxTQUFFLENBQUEsZUFBUCxHQUF5QixTQUFDLEdBQUQsR0FBQTtTQUN2QixJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxxQkFBRCxDQUF1QixHQUF2QixFQURjO0FBQUEsQ0EzQ3pCLENBQUE7O0FBQUEsS0ErQ0ssQ0FBQSxTQUFFLENBQUEscUJBQVAsR0FBK0IsU0FBQyxNQUFELEdBQUE7QUFDN0IsTUFBQSxLQUFBO0FBQUEsRUFBQSxLQUFBLEdBQVEsSUFBQyxDQUFBLEtBQVQsQ0FBQTtBQUFBLEVBQ0EsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsUUFBQSxDQUFTLE1BQU0sQ0FBQyxDQUFQLEdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBUCxHQUFnQixHQUFqQixDQUFwQixDQUExQixDQURBLENBQUE7QUFBQSxFQUVBLEtBQUssQ0FBQyxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLFFBQUEsQ0FBUyxNQUFNLENBQUMsQ0FBUCxHQUFXLENBQUMsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsR0FBakIsQ0FBcEIsQ0FBMUIsQ0FGQSxDQUFBO0FBR0EsU0FBTyxLQUFQLENBSjZCO0FBQUEsQ0EvQy9CLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjXG4jICAgZWdnLmNvZmZlZVxuIyAgIEVnZ1N0cmV0Y2hEb3QgZm9yIEZyYW1lclxuIyAgIGJ5IEthc2ltIFRlIChrYXNpbXRlQGdtYWlsLmNvbSlcbiNcbiMgICBBIG1vZHVsZSBmb3IgRnJhbWVyIFN0dWRpby5cbiMjI1xuXG4jIEluc3RydWN0aW9uczpcbiNcbiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIGVnZyA9IHJlcXVpcmUgXCJlZ2dcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgZWdnLm15RnVuY3Rpb24oKSBvciBlZ2cubXlWYXJcblxuY2xhc3MgZXhwb3J0cy5FZ2dTdHJldGNoRG90IGV4dGVuZHMgTGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIG9wdGlvbnMud2lkdGggPSAzMCBpZiBub3Qgb3B0aW9ucy53aWR0aFxuICAgIG9wdGlvbnMuaGVpZ2h0ID0gMzAgaWYgbm90IG9wdGlvbnMuaGVpZ2h0XG4gICAgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTIyLCAyNTUsIDEuMClcIiBpZiBub3Qgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICBvcHRpb25zLmJvcmRlclJhZGl1cyA9IFwiNTAlXCIgaWYgbm90IG9wdGlvbnMuYm9yZGVyUmFkaXVzXG4gICAgc3VwZXIob3B0aW9ucylcblxuICAjIFN0cmV0Y2ggdGhlIGxheWVyIGluIGFuIGVnZyBzaGFwZSBlaXRoZXIgXCJsZWZ0XCIsIFwicmlnaHRcIiwgb3IgXCJib3RoXCJcbiAgZWdnU3RyZXRjaERpcmVjdGlvbjogKGRpc3RhbmNlLCBkaXJlY3Rpb24gPSBcImJvdGhcIikgLT5cbiAgICBAZWdnU3RyZXRjaFgoZGlzdGFuY2UpIGlmIGRpcmVjdGlvbiBpcyBcImJvdGhcIlxuICAgIEBlZ2dTdHJldGNoWChkaXN0YW5jZSkgaWYgZGlyZWN0aW9uIGlzIFwibGVmdFwiIGFuZCBkaXN0YW5jZSA8IDBcbiAgICBAZWdnU3RyZXRjaFgoZGlzdGFuY2UpIGlmIGRpcmVjdGlvbiBpcyBcInJpZ2h0XCIgYW5kIGRpc3RhbmNlID4gMFxuXHRcdFxuICBlZ2dTdHJldGNoWDogKHgsIHNlbnNpdGl2aXR5ID0gMC43NSwgbGltaXQgPSB0cnVlKSAtPlxuICAgIG1vZCA9IEB3aWR0aCAqIHNlbnNpdGl2aXR5XG4gICAgb2Zmc2V0TGltaXQgPSBAd2lkdGggLyAyXG5cbiAgICBAc2NhbGVYID0gVXRpbHMubW9kdWxhdGUoTWF0aC5hYnMoeCksIFswLG1vZF0sWzEsMS41XSxsaW1pdClcbiAgICBAY2VudGVyWChVdGlscy5tb2R1bGF0ZSh4LCBbLW1vZCxtb2RdLCBbLW9mZnNldExpbWl0LG9mZnNldExpbWl0XSwgbGltaXQpKSBcbiAgICByID0gVXRpbHMubW9kdWxhdGUoeCxbLW1vZCxtb2RdLFs2MCw0NV0sdHJ1ZSlcbiAgICBsID0gVXRpbHMubW9kdWxhdGUoeCxbLW1vZCxtb2RdLFs0NSw2MF0sdHJ1ZSlcbiAgICBAc3R5bGVbXCJib3JkZXJSYWRpdXNcIl0gPSBcIiN7cn0lICN7bH0lICN7bH0lICN7cn0lIC8gNTAlXCJcblxuIyMjXG4gIExheWVyIEV4dGVuc2lvbnNcbiMjI1xuXG4jIENlbnRlciB0aGUgZnJhbWUgb24gYSBzaWJsaW5nIGZyYW1lLlxuTGF5ZXI6OmNlbnRlck9uU2libGluZyA9IChzaWIpIC0+IFxuICBAZnJhbWUgPSBAY2VudGVyZWRGcmFtZU9uVGFyZ2V0KHNpYilcblxuIyBSZXR1cm5zIHRoZSBmcmFtZSBvZiB0aGUgbGF5ZXIgaWYgaXQgd2VyZSBjZW50ZXJlZCBvbiB8dGFyZ2V0fCBmcmFtZS5cbkxheWVyOjpjZW50ZXJlZEZyYW1lT25UYXJnZXQgPSAodGFyZ2V0KSAtPlxuICBmcmFtZSA9IEBmcmFtZVxuICBVdGlscy5mcmFtZVNldE1pZFgoZnJhbWUsIHBhcnNlSW50KHRhcmdldC54ICsgKHRhcmdldC53aWR0aCAgLyAyLjApKSlcbiAgVXRpbHMuZnJhbWVTZXRNaWRZKGZyYW1lLCBwYXJzZUludCh0YXJnZXQueSArICh0YXJnZXQuaGVpZ2h0IC8gMi4wKSkpXG4gIHJldHVybiBmcmFtZSJdfQ==
