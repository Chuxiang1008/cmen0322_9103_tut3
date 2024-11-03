let Blocks = [];
let cars = []; // Array for storing cars
let smallBlockSize;

function setup() {
  createCanvas(windowWidth, windowHeight); // Drawing canvas as window size
  initializeBlocks(); // Draw different coloured blocks as buildings, roads, pavements, zebra crossings.
  generateRandomSmallBlocks(); // Generate small red or blue blocks to simulate cars
  drawBlocks();
}

function draw() {
  background(240, 240, 235);
  drawBlocks(); // generate all blocks
  moveCars(); // move cars blocks
}

// Allow output images to automatically adjust to changes in window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  Blocks = []; // Clear the original Blocks array at each window adjustment 
  cars = []; // clear cars array
  initializeBlocks();
  generateRandomSmallBlocks();
  drawBlocks();
}

function initializeBlocks() {
  smallBlockSize = 0.02 * min(windowWidth, windowHeight);
  // Simulate roads, buildings and pavements with blocks 
  // Yellow blocks simulate city roads, and set its isRoad to true
  // Draw some elements as the start of the animation
  Blocks.push(new Block(0, 2 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 6 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(3 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(11 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(26 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  
  // Yellow blocks simulate buildings
  Blocks.push(new Block(7 * smallBlockSize, 7 * smallBlockSize, 4 * smallBlockSize, 4 * smallBlockSize, color(230, 205, 40)));
  
  Blocks.push(new Block(7 * smallBlockSize, 31.8 * smallBlockSize, 5 * smallBlockSize, 3 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(20 * smallBlockSize, 21 * smallBlockSize, 3 * smallBlockSize, 5 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(20 * smallBlockSize, 27 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(41 * smallBlockSize, 9 * smallBlockSize, 5 * smallBlockSize, 4 * smallBlockSize, color(230, 205, 40)));
  

  // blue blocks simulate buildings
  Blocks.push(new Block(4 * smallBlockSize, 13 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(4 * smallBlockSize, 36 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(14 * smallBlockSize, 21 * smallBlockSize, 4 * smallBlockSize, 5 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(31 * smallBlockSize, 31 * smallBlockSize, 5 * smallBlockSize, 8 * smallBlockSize, color(70, 100, 190)));
  
  

  // red blocks simulate buildings
 
  Blocks.push(new Block(8 * smallBlockSize, 40 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(8 * smallBlockSize, 44 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(22 * smallBlockSize, smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  
  Blocks.push(new Block(31 * smallBlockSize, 33 * smallBlockSize, 5 * smallBlockSize, 4 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(41 * smallBlockSize, 10 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(42 * smallBlockSize, 35 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(12 * smallBlockSize, 42 * smallBlockSize, 4 * smallBlockSize, 4 * smallBlockSize, color(160, 55, 45)));
 

  // Grey blocks simulate buildings
  Blocks.push(new Block(8 * smallBlockSize, 9 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(8 * smallBlockSize, 42 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(13 * smallBlockSize, 43 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(20 * smallBlockSize, 23 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(20 * smallBlockSize, 26 * smallBlockSize, 3 * smallBlockSize, 1.3 * smallBlockSize, color(200, 200, 200)));

 

  // Grey blocks simulate pavements and zebra crossings
  Blocks.push(new Block(2 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(10 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(12 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(26 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(30 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  
  Blocks.push(new Block(smallBlockSize, 6 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(18 * smallBlockSize, 6 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(32 * smallBlockSize, 6 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));

  // Add extra blocks
  Blocks.push(new Block(32 * smallBlockSize, 34 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(15 * smallBlockSize, 22 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(230, 205, 40)));
}


// Create a class with each block (buildings, roads) as a separate object for management and drawing
class Block {
  constructor(x, y, w, h, c, isRoad = false) {
    this.x = x;                
    this.y = y;                
    this.w = w; 
    this.h = h;
    this.c = c;
    this.isRoad = isRoad; // Checks if blocks are road blocks, defaults to false
  }
  
  display() {
    noStroke(); 
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }
}

function drawBlocks() {
  for (let block of Blocks) {
    block.display();
  }
}


// Generate random blocks on road blocks to simulate cars
function generateRandomSmallBlocks() {

  // Check each block object in the Blocks array and check if it is road block (isRoad is true)
  for (let block of Blocks) {
    if (block.isRoad) {
      // Generate small blocks randomly in the road area
      let numSmallBlocks = 3; // Each road generates 3 blocks
      for (let t = 0; t < numSmallBlocks; t++) {
        // Use Math.floor() to ensure that randomly generated numbers are integers
        // Make the position of the randomly generated small blocks on the road blocks
        let x = block.x + Math.floor(random(0, block.w / smallBlockSize)) * smallBlockSize;
        let y = block.y + Math.floor(random(0, block.h / smallBlockSize)) * smallBlockSize;

        // assign blue or red colour randomly to the smallblocks
        let colorSmallBlock = random() > 0.5 ? color(160, 55, 45) : color(70, 100, 190);

       // Determine the direction of the car according to the shape of the road.
       let direction;
       if (block.w > block.h) {
         // horizontal road
         direction = random() > 0.5 ? 'right' : 'left';
       } else {
         // vertical road
         direction = random() > 0.5 ? 'down' : 'up';
       }
        //  Add to cars array
         cars.push(new Car(x, y, smallBlockSize, colorSmallBlock, block, direction)); 
      }
    }
  }
}

class Car {
  constructor(x, y, size, color, roadBlock, direction) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.roadBlock = roadBlock; // Linked road blocks
    this.direction = direction; // move direction
    this.speed = random(1, 3); // random speed
  }

  move() {
    // move cars according to the direction
    if (this.direction === 'right') {
      this.x += this.speed;
      // If the car goes beyond the right boundary of the road block, x is reset to the left boundary of the road block.
      if (this.x > this.roadBlock.x + this.roadBlock.w) this.x = this.roadBlock.x;
    } else if (this.direction === 'left') {
      this.x -= this.speed;
      //  If the car goes beyond the left boundary of the road block, reset x to the right boundary of the road block.
      if (this.x < this.roadBlock.x) this.x = this.roadBlock.x + this.roadBlock.w;
    } else if (this.direction === 'down') {
      this.y += this.speed;
      // If the car goes beyond the lower boundary of the road block, reset y to the upper boundary of the road block.
      if (this.y > this.roadBlock.y + this.roadBlock.h) this.y = this.roadBlock.y;
    } else if (this.direction === 'up') {
      this.y -= this.speed;
      // If the car goes beyond the upper boundary of the road block, reset y to the lower boundary of the road block.
      if (this.y < this.roadBlock.y) this.y = this.roadBlock.y + this.roadBlock.h;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}

function moveCars() {
  for (let car of cars) {
    car.move();
    car.display();
  }
}
