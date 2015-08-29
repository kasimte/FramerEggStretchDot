###
#   egg.coffee
#   EggStretchDot for Framer
#   by Kasim Te (kasimte@gmail.com)
#
#   A module for Framer Studio.
###

# Instructions:
#
# Add the following line to your project in Framer Studio. 
# egg = require "egg"
# Reference the contents by name, like egg.myFunction() or egg.myVar

class exports.EggStretchDot extends Layer
  constructor: (options) ->
    options.width = 30 if not options.width
    options.height = 30 if not options.height
    options.backgroundColor = "rgba(0, 122, 255, 1.0)" if not options.backgroundColor
    options.borderRadius = "50%" if not options.borderRadius
    super(options)

  # Stretch the layer in an egg shape either "left", "right", or "both"
  eggStretchDirection: (distance, direction = "both") ->
    @eggStretchX(distance) if direction is "both"
    @eggStretchX(distance) if direction is "left" and distance < 0
    @eggStretchX(distance) if direction is "right" and distance > 0
		
  eggStretchX: (x, sensitivity = 0.75, limit = true) ->
    mod = @width * sensitivity
    offsetLimit = @width / 2

    @scaleX = Utils.modulate(Math.abs(x), [0,mod],[1,1.5],limit)
    @centerX(Utils.modulate(x, [-mod,mod], [-offsetLimit,offsetLimit], limit)) 
    r = Utils.modulate(x,[-mod,mod],[60,45],true)
    l = Utils.modulate(x,[-mod,mod],[45,60],true)
    @style["borderRadius"] = "#{r}% #{l}% #{l}% #{r}% / 50%"

###
  Layer Extensions
###

# Center the frame on a sibling frame.
Layer::centerOnSibling = (sib) -> 
  @frame = @centeredFrameOnTarget(sib)

# Returns the frame of the layer if it were centered on |target| frame.
Layer::centeredFrameOnTarget = (target) ->
  frame = @frame
  Utils.frameSetMidX(frame, parseInt(target.x + (target.width  / 2.0)))
  Utils.frameSetMidY(frame, parseInt(target.y + (target.height / 2.0)))
  return frame