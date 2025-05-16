import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const Tile = () => {
  const sketch = (p) => {
    let distMouse = 50;
    let size = 30;
    let cols, rows;
    let blocks = [];

    class Block {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
      }

      move() {
        let distance = p.dist(p.mouseX, p.mouseY, this.x, this.y);
        if (distance < distMouse) {
          this.angle += 5;
        }
      }

      display() {
        p.push();
        p.translate(this.x, this.y);
        p.rotate(this.angle);
        p.rect(0, 0, size, size);
        p.pop();
      }
    }

    p.setup = () => {
      p.createCanvas(2000,1000);
      p.rectMode(p.CENTER);
      p.angleMode(p.DEGREES);
      cols = p.width / size;
      rows = p.height / size;

      for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
          blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
        }
      }
    };

    p.draw = () => {
      p.background(51);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          blocks[i][j].move();
          blocks[i][j].display();
        }
      }
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
};

export default Tile;