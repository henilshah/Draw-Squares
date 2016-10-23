----------------Draw Squares with Fade to white---------------------

Idea:-
-----
Imagine yourself as an abstract artist interested in cubism who specializes in creating designs in HTML/CSS. For your next project, you want to make it interactive and you've learned some JS and to create the output programatically.  What you want to achieve is an effect like the picture below. Essentially, this could be described as a nested series of greyscale colored squares starting with an arbitrary grey value on the outside and increasing in brightness to white on the inside, with each step going up by 1/16 of the available grey values. E.g.: In the first image below, outside square is #000, next is #111, after that is #222, etc. until you get to #FFF in the middle.

Ref:-
-----
Check the Resources folder for sample Images.

Implementation:-
--------------
Here, a function is defined called "drawSquares" that takes 2 arguments, and renders the desired squares  
· A starting color value for the outermost square ranging from 0  (black) to 14 (very light grey, hexadecimal value E)
· The visible width, in pixels, of a step
For example, the "Square.JPG" would be rendered by (1,25). 
This do not use a canvas element, while this is a perfectly valid and may be easier solution, it does not get at all of the things we’d like to test with this problem.
