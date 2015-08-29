# EggStretchDotExample
# by Kasim Te (kasimte@gmail.com)
# 
# An example Framer Studio Project to demonstrate the egg.coffee module.
#
# Instructions: Click, hold, and drag left or right on the screen.

egg = require "egg"

# Set background
bg = new BackgroundLayer backgroundColor: "#28affa"
dot = new egg.EggStretchDot
	width: 200
	height: 200
	backgroundColor: "red"
dot.centerOnSibling(bg)

bg.on Events.TouchStart, (event) -> @touchStartEvent = event
bg.on Events.TouchEnd, (event) -> @touchStartEvent = null
bg.on Events.TouchMove, (event)->	
	dot.eggStretchX(event.x - @touchStartEvent.x) if @touchStartEvent?	