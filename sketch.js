var wall1, thickness1;
var wall2, thickness2;
var wall3, thickness3;
var wall4, thickness4;
var bullet1, speed1, weight1;
var bullet2, speed2, weight2;
var bullet3, speed3, weight3;
var bullet4, speed4, weight4;
var shooter1, shooter2, shooter3, shooter4;
var s1, s2, s3, s4;
var bImg1, bImg2, bImg3, bImg4;
var test1, test2, test3, test4;
var but1, but2, but3, but4;

function preload() {
  s1 = loadImage("c21.png");
  s2 = loadImage("c21 (1).png");
  s3 = loadImage("c21 (2).png");
  s4 = loadImage("c21.4.png");
  bImg1 = loadImage("b1.png");
  bImg2 = loadImage("b1 (1).png")
  bImg3 = loadImage("b3 (1).png");
  bImg4 = loadImage("bullet (1).png");
  but1 = loadImage("button1.png");
  but2 = loadImage("button2 (2).png");
  but3 = loadImage("button3.png");
  but4 = loadImage("button4.png");
}

function setup() {
  createCanvas(1530, 760);
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness4 = random(22, 83);
  wall1 = createSprite(1400, 75, thickness1, 100);
  wall1.shapeColor = color(80, 80, 80);
  wall2 = createSprite(1400, 225, thickness2, 100);
  wall2.shapeColor = color(80, 80, 80);
  wall3 = createSprite(1400, 357, thickness3, 100);
  wall3.shapeColor = color(80, 80, 80);
  wall4 = createSprite(1400, 500, thickness4, 100);
  wall4.shapeColor = color(80, 80, 80);
  shooter1 = createSprite(200, 75, 20, 20);
  shooter1.addImage(s1);
  shooter1.scale = 0.175;
  shooter2 = createSprite(175, 225, 20, 20);
  shooter2.addImage(s2);
  shooter2.scale = 0.175;
  shooter3 = createSprite(190, 357, 20, 20);
  shooter3.addImage(s3);
  shooter3.scale = 0.175;
  shooter4 = createSprite(175, 500, 20, 20);
  shooter4.addImage(s4);
  shooter4.scale = 0.175;
  bullet1 = createSprite(250, 55, 20, 20);
  bullet1.addImage(bImg1);
  bullet1.scale = 0.15;
  bullet1.width = 125;
  bullet2 = createSprite(250, 195, 20, 20);
  bullet2.addImage(bImg2);
  bullet2.width = 175;
  bullet2.scale = 0.2;
  bullet3 = createSprite(250, 330, 20, 20);
  bullet3.addImage(bImg3);
  bullet3.scale = 0.05;
  bullet3.width = 100;
  bullet4 = createSprite(250, 495, 20, 20);
  bullet4.addImage(bImg4);
  bullet4.scale = 0.2;
  bullet4.width = 200;
  test1 = createSprite(60, 75, 100, 100);
  test1.addImage(but1);
  test1.scale = 0.3;
  test2 = createSprite(60, 215, 100, 100);
  test2.addImage(but2);
  test2.scale = 0.3;
  test3 = createSprite(60, 350, 100, 100);
  test3.addImage(but3);
  test3.scale = 0.3;
  test4 = createSprite(60, 490, 100, 100);
  test4.addImage(but4);
  test4.scale = 0.3;
  speed1 = random(223, 321)
  speed2 = random(223, 321)
  speed3 = random(223, 321)
  speed4 = random(250, 300)
  weight1 = random(30, 52);
  weight2 = random(30, 52);
  weight3 = random(30, 52);
  weight4 = random(30, 52);
}

function draw() {

  background(0);
  fill(255);
  noStroke();
  rect(0, 145, 1530, 5);
  rect(0, 285, 1530, 5);
  rect(0, 420, 1530, 5);

  for (var x = 20; x < 1350; x = x + 350) {
    fill("purple");
    stroke(0);
    strokeWeight(5);
    rect(x, 580, 400, 30);
  }

  for (var y = 20; y < 1350; y = y + 350) {
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(5);
    rect(y, 610, 400, 30);
  }

  for (var a = 20; a < 1350; a = a + 350) {
    fill(94, 255, 166);
    stroke(0);
    strokeWeight(5);
    rect(a, 640, 400, 30);
  }

  for (var b = 20; b < 1350; b = b + 350) {
    fill(255, 187, 187);
    stroke(0);
    strokeWeight(5);
    rect(b, 670, 400, 30);
  }
  for (var z = 20; z < 1350; z = z + 350) {
    fill(242, 168, 55);
    stroke(0);
    strokeWeight(5);
    rect(z, 700, 400, 30);
  }


  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(20);
  text("Bullet speed", 125, 600);
  text("Bullet weight(in gm)", 475, 600);
  text("Wall thickness", 825, 600);
  text("Damage", 1225, 600);

  if (mousePressedOver(test1)) {
    bullet1.velocityX = speed1;
  }

  if (mousePressedOver(test2)) {
    bullet2.velocityX = speed2;
  }

  if (mousePressedOver(test3)) {
    bullet3.velocityX = speed3;
  }

  if (mousePressedOver(test4)) {
    bullet4.velocityX = speed4;
  }
  drawSprites();

  if (hasCollided(bullet1, wall1)) {

    bullet1.velocityX = 0;

    var damage1 = 0.5 * weight1 * speed1 * speed1 / (thickness1 * thickness1 * thickness1);
    if (damage1 > 10) {
      wall1.shapeColor = rgb(255, 0, 0);
    }
    if (damage1 < 10) {
      wall1.shapeColor = rgb(0, 255, 0);
    }

    fill(0);
    strokeWeight(1.5);
    text(Math.round(speed1), 155, 630);
    text(Math.round(weight1), 505, 630);
    text(Math.round(thickness1), 855, 630);
    text(Math.round(damage1), 1255, 630);

  }

  if (hasCollided(bullet2, wall2)) {
    bullet2.velocityX = 0;
    var damage2 = 0.5 * weight2 * speed2 * speed2 / (thickness2 * thickness2 * thickness2);
    if (damage2 > 10) {
      wall2.shapeColor = rgb(255, 0, 0);
    }
    if (damage2 < 10) {
      wall2.shapeColor = rgb(0, 255, 0);
    }
    fill(0);
    strokeWeight(1.5);
    text(Math.round(speed2), 155, 660);
    text(Math.round(weight2), 505, 660);
    text(Math.round(thickness2), 855, 660);
    text(Math.round(damage2), 1255, 660);

  }

  if (hasCollided(bullet3, wall3)) {
    bullet3.velocityX = 0;
    console.log("yes!!")
    var damage3 = 0.5 * weight3 * speed3 * speed3 / (thickness3 * thickness3 * thickness3);
    if (damage3 > 10) {
      wall3.shapeColor = rgb(255, 0, 0);
    }
    if (damage3 < 10) {
      wall3.shapeColor = rgb(0, 255, 0);
    }
    fill(0);
    strokeWeight(1.5);
    text(Math.round(speed3), 155, 690);
    text(Math.round(weight3), 505, 690);
    text(Math.round(thickness3), 855, 690);
    text(Math.round(damage3), 1255, 690);

  }

  if (hasCollided(bullet4, wall4)) {
    bullet4.velocityX = 0;
    console.log("yes!!")
    var damage4 = 0.5 * weight4 * speed4 * speed4 / (thickness4 * thickness4 * thickness4);
    if (damage4 > 10) {
      wall4.shapeColor = rgb(255, 0, 0);
    }
    if (damage4 < 10) {
      wall4.shapeColor = rgb(0, 255, 0);
    }

    fill(0);
    strokeWeight(1.5);
    text(Math.round(speed4), 155, 720);
    text(Math.round(weight4), 505, 720);
    text(Math.round(thickness4), 855, 720);
    text(Math.round(damage4), 1255, 720);

  }
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}