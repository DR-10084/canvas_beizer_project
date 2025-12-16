Daily learning log for canvas and Bézier curve project
### Day 1
- Learned canvas coordinate system
- Drew basic circle using arc()
- Understood immediate-mode rendering

# Day 2 – Cubic Bezier Curve (HTML Canvas)

## What I learned
- HTML Canvas basics
- Drawing points and lines
- Cubic Bezier curve mathematical implementation
- Separating math logic and rendering logic
- Debugging JavaScript canvas issues

## Files
- index.html – Canvas setup
- math.js – Bezier math
- render.js – Drawing logic

## Status
Static Bezier curve rendered with control points.

## Next
Day 3: Mouse interaction and dragging control points

# Day 3 – Interactive Bezier Curve (HTML Canvas)

This is my Day 3 progress in learning HTML Canvas and Bezier curves.  
In this version, the Bezier curve is no longer static — it reacts to mouse movement and behaves smoothly like a flexible rope.

I implemented everything using **plain JavaScript and HTML Canvas**, without using any built-in Bezier drawing functions.

---

## What this code does

- Draws a **cubic Bezier curve** using the mathematical formula
- Uses **mouse movement** to control the shape of the curve
- Control points follow the mouse smoothly instead of snapping
- Curve updates in real time using animation
- Shows control points and tangent directions for better understanding

---

## How interaction works (simple explanation)

- The mouse position is treated as a **target**
- Control points move towards the target using a spring-like motion
- Damping is added so the motion looks smooth and stable
- On every frame, the curve is recalculated and redrawn

This helped me understand how interaction and animation work together on canvas.

---

## What I learned

- How Bezier curves are generated using parametric equations
- Why canvas needs to be cleared and redrawn every frame
- How mouse events provide position data
- How simple physics (spring + damping) can make UI movement smooth
- How curve tangents represent direction and smoothness

---

## Files

- `index.html` – Canvas setup
- `render.js` – Bezier math, mouse logic, physics update, and drawing

---

## Why I built it this way

Instead of directly using canvas Bezier APIs, I wanted to understand:
- how the math works
- how interaction is handled internally
- how smooth animation is achieved

So I implemented everything manually step by step.

---

## Current status

- Curve is interactive
- Motion is smooth and stable
- Control points and tangents are visible

Next, I plan to clean up the visuals and make the interaction more precise.

---




