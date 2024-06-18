# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

from typing import Union
import math

class Circle:
    def __init__(self, radius: Union[int, float] = None, diameter: Union[int, float] = None) -> None:
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def radius(self) -> float:
        return self._radius
    
    @radius.setter
    def radius(self, value: Union[int, float]) -> None:
        if value < 0:
            raise ValueError("Radius cannot be negative.")
        self._radius = value
    
    @property
    def diameter(self) -> float:
        return self.radius * 2
    
    @property
    def area(self) -> float:
        return math.pi * (self.radius ** 2)
    
    def __str__(self) -> str:
        return f"Radius: {self.radius}. Diameter: {self.diameter}"
    
    def __add__(self, other: 'Circle') -> 'Circle':
        if isinstance(other, Circle):
            return Circle(radius = self.radius + other.radius)
        else:
            raise TypeError("Unsupported operand type(s) for +: 'Circle' and '{type(other).__name__}'")
        
    def __gt__(self, other: 'Circle') -> bool:
        if isinstance(other, Circle):
            if self.radius > other.radius:
                return True
            else:
                return False
        else:
            raise TypeError("Unsupported operand type(s) for +: 'Circle' and '{type(other).__name__}'")
        
    def __eq__(self, other: 'Circle') -> bool:
        if isinstance(other, Circle):
            if self.radius == other.radius:
                return True
            else:
                return False
        else:
            raise TypeError("Unsupported operand type(s) for +: 'Circle' and '{type(other).__name__}'")

def main():
    circle1 = Circle(radius = 10)
    circle2 = Circle(diameter = 8)
    circle3 = Circle(diameter = 5)
    circle4 = Circle(radius = 10)

    circles = [circle1, circle2, circle3, circle4]
    sorted_circles = sorted(circles, key = lambda circle: circle.radius)

    for circle in sorted_circles:
        print(circle)

    print(circle1)
    print(circle1 + circle3)
    print(circle1 > circle3)
    print(circle1 == circle4)

    import turtle
        
    turtle.speed(1)

    for circle in sorted_circles:
        turtle.circle(circle.radius)
        turtle.penup()
        turtle.forward(circle.radius * 2)
        turtle.pendown()
        
    turtle.done()

if __name__ == "__main__":
    main()