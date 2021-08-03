# School Project - Building a Line Following Robot

## The concept

As a school project, I developed with another student a line following Robot. This idea could be used in industries to automate the transports of products or parts of products. 

## The technologies used

 - Microprocessor: ST Blue Pill - STM32 based
 - PCB Design: Altium designer
 - 3D Design: Autodesk Fusion 360
 - IDE: System Workbench STM32
 - Development language: Embedded C

## The stages of development

### 1. Define the functionalities 
The main task of the robot is to go from A to B following a line.
We added to that some automation:
        - It leaves A only when an object is put on.
        - It detects obstacles and stops in front of one.
        - It detects different colors and adapts to them (Red is B | Green is A | other colors can influence its speed).
        - It automatically goes back to its initial place A.
    
### 2. Choose the components

### 3. Design the PCB

### 4. Solder the components on the PCB

### 5. Test the PCB 

### 6. Implement the functionalities in Embedded C

## The result
Due to some issues with the PCB and the components, we were not able to finish the project in time.
The obstacle detector did not work, as well as the object detector on the top of it. 
The robot was able to follow the lines and change its trajectory depending on the line, however it needed a rigorous initialization of the thresholds for the detection of the borders.

[See the result here.](https://youtu.be/qNbiEQQJYqI)

## A Teamwork

For this project, I worked with [Maxime Beneteau](https://www.linkedin.com/in/maxime-beneteau/).
We mostly worked together but Maxime worked on the 3D design of the robot while I worked more on the development of the algorithm. 

