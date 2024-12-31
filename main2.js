const nickname = localStorage.getItem("Username");

// ประโยคคำอวยพรที่ต้องการให้สุ่ม
const greetings = [
  "ขอให้ปีใหม่นี้เป็นจุดเริ่มต้นของสิ่งดีๆ ที่จะเข้ามาในชีวิตคุณ สุขภาพแข็งแรง สมหวังในทุกสิ่งที่ตั้งใจ ทำอะไรก็สำเร็จราบรื่น พบเจอแต่ความสุขและความรักจากคนรอบข้าง และมีพลังใจในการก้าวผ่านทุกเรื่องไปได้อย่างเข้มแข็ง ขอให้เป็นปีที่ดีที่สุดเลยนะ 🌟💖",
  "ขอให้ปีใหม่นี้เป็นจุดเริ่มต้นของความสำเร็จและความสุขที่ไม่มีวันสิ้นสุด สุขภาพแข็งแรง ความฝันที่ตั้งใจไว้จงกลายเป็นจริง พบเจอแต่สิ่งดี ๆ ผู้คนที่จริงใจ และมีแรงบันดาลใจในการก้าวไปสู่อนาคตที่สวยงามเสมอ🎉💖",
  "ปีใหม่นี้ ขอให้คุณและครอบครัวมีความสุขล้นหัวใจ มีสุขภาพที่แข็งแรงสมบูรณ์ ทุกก้าวที่เดินไปเต็มไปด้วยความสำเร็จ ขอให้ทุกความพยายามที่ลงแรงกลายเป็นผลลัพธ์ที่น่าภูมิใจ และมีแต่รอยยิ้มในทุก ๆ วัน 😊✨",
  "ในปีใหม่นี้ ขอให้คุณได้พบกับโอกาสที่ยิ่งใหญ่ ผู้คนที่สนับสนุน และเส้นทางที่สดใส ขอให้เรื่องร้าย ๆ จบลงในปีเก่า และปีใหม่นำพาความสุข ความสำเร็จ และความสงบสุขมาสู่ชีวิตคุณอย่างเต็มที่ 🌈❤️",
  "ขอให้ปีใหม่นี้เป็นปีที่คุณมีความกล้าหาญที่จะฝันให้ใหญ่ขึ้น มีพลังที่จะต่อสู้กับอุปสรรค และมีหัวใจที่พร้อมจะยอมรับความสุขที่เข้ามาในชีวิต ขอให้ทุกวันเต็มไปด้วยความรักและกำลังใจจากคนรอบข้าง 🌟🌷",
  "ขอให้ปีใหม่นี้คุณมีแต่ความสุขในทุกย่างก้าว สุขภาพแข็งแรงทั้งกายและใจ ทำสิ่งใดก็ประสบความสำเร็จราบรื่น มีคนที่เข้าใจและสนับสนุนคุณอยู่เคียงข้างเสมอ ขอให้ปีนี้เป็นปีที่พิเศษที่สุดสำหรับคุณ 💕✨",
  "เริ่มต้นปีใหม่นี้ด้วยใจที่เต็มไปด้วยความหวัง ขอให้คุณได้เจอแต่สิ่งที่ทำให้หัวใจพองโต ความสำเร็จในทุกความตั้งใจ และความสุขที่ไม่มีวันหมด ขอให้ทุกวันของคุณเป็นวันที่น่าจดจำ และมีพลังใจที่จะทำสิ่งที่ดีให้กับตัวเองและคนรอบข้าง 🌟💖",
  "ขอให้ปีใหม่นี้เป็นจุดเริ่มต้นของการเดินทางที่เต็มไปด้วยความสุข ความสำเร็จ และความสมหวังในทุกๆ ด้านของชีวิต ไม่ว่าคุณจะมีเป้าหมายเล็กหรือใหญ่ ขอให้คุณมีพลังใจที่จะก้าวไปข้างหน้าอย่างมั่นคง ขอให้สุขภาพร่างกายแข็งแรง สุขภาพใจสดใส มีความรักและกำลังใจจากคนรอบข้าง และทุกๆ ก้าวที่คุณเดินไปนั้นเต็มไปด้วยแรงบันดาลใจและความสุข ขอให้ทุกสิ่งที่คุณหวังไว้เกิดขึ้นจริงในปีนี้ และเป็นปีที่พิเศษที่สุดในชีวิตคุณ 🌟💖",
  "สุขสันต์ปีใหม่ 2025! ขอให้ปีนี้เต็มไปด้วยความรัก ความเมตตา และความสุขในทุกช่วงเวลา ขอให้คุณได้รับแรงบันดาลใจในการเดินหน้าทำสิ่งดีๆ ต่อไป ขอให้ความสัมพันธ์ทุกด้านของคุณเต็มไปด้วยความอบอุ่นและความเข้าใจ ทุกความล้มเหลวในอดีตขอให้กลายเป็นบทเรียน และทุกความสำเร็จในอนาคตขอให้เติมเต็มชีวิตของคุณอย่างสมบูรณ์แบบ 💕✨ ",
  "ปีใหม่นี้ขอให้คุณได้รับพลังใหม่ๆ ในการสร้างสรรค์สิ่งดีๆ ทั้งในชีวิตส่วนตัวและชีวิตการงาน ขอให้คุณมีความกล้าที่จะฝันใหญ่ขึ้น และมีพลังใจที่จะทำให้ความฝันนั้นเป็นจริง ทุกก้าวที่คุณเดินไป ขอให้เต็มไปด้วยความมั่นคงและแรงสนับสนุนจากคนที่รักคุณ ขอให้คุณได้สัมผัสความสุขจากสิ่งเล็กๆ รอบตัว และได้พบเจอเรื่องราวดีๆ ที่ทำให้หัวใจคุณเต้นแรงทุกวัน 💪🌟"
  
];

// ฟังก์ชันสุ่มข้อความจากอาร์เรย์
function getRandomGreeting() {
const randomIndex = Math.floor(Math.random() * greetings.length);
return greetings[randomIndex];
}

function getRomanNumeral(number) {
const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
let roman = "";
for (let key in romanNumerals) {
    while (number >= romanNumerals[key]) {
    roman += key;
    number -= romanNumerals[key];
    }
}
return roman;
}

function getCurrentRomanDate() {
const today = new Date();
const day = today.getDate(); // วันที่
const month = today.getMonth() + 1; // เดือน (เริ่มจาก 0)
const year = today.getFullYear(); // ปี

// แปลงเป็นเลขโรมัน
const dayRoman = getRomanNumeral(day);
const monthRoman = getRomanNumeral(month);
const yearRoman = getRomanNumeral(year);

return `${dayRoman} / ${monthRoman} / ${yearRoman}`;
}
  
// แสดงข้อความ
if (nickname) {
document.getElementById("greeting").textContent = `ถึง ${nickname} ${getRandomGreeting()}`;
} else {
document.getElementById("greeting").textContent = `ถึงเราจะไม่รู้จักชื่อกัน ${getRandomGreeting()}`;
}

// แสดงวันที่ในฟอร์แมตโรมัน
document.getElementById("date").textContent = getCurrentRomanDate();





var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    cw = window.innerWidth,
    ch = window.innerHeight,
    fireworks = [],
    particles = [],
    hue = 120, 
    limiterTotal = 5, 
    limiterTick = 0, 
    timerTotal = 80,
    timerTick = 0,
    mousedown = false,
    mx, 
    my; 

canvas.width = cw;
canvas.height = ch;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function calculateDistance(p1x, p1y, p2x, p2y) {
  var xDistance = p1x - p2x,
      yDistance = p1y - p2y;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function Firework(sx, sy, tx, ty) {
  this.x = sx;
  this.y = sy;
  this.sx = sx;
  this.sy = sy;
  this.tx = tx;
  this.ty = ty;
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
  this.distanceTraveled = 0;
  this.coordinates = [];
  this.coordinateCount = 3;
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  this.angle = Math.atan2(ty - sy, tx - sx);
  this.speed = 2;
  this.acceleration = 1.05;
  this.brightness = random(50, 70);
  this.targetRadius = 1;
}

Firework.prototype.update = function (index) {
  this.coordinates.pop();
  this.coordinates.unshift([this.x, this.y]);
  if (this.targetRadius < 8) {
    this.targetRadius += 0.3;
  } else {
    this.targetRadius = 1;
  }
  this.speed *= this.acceleration;
  var vx = Math.cos(this.angle) * this.speed,
      vy = Math.sin(this.angle) * this.speed;
  this.distanceTraveled = calculateDistance(
    this.sx,
    this.sy,
    this.x + vx,
    this.y + vy
  );
  if (this.distanceTraveled >= this.distanceToTarget) {
    createParticles(this.tx, this.ty);
    fireworks.splice(index, 1); 
  } else {
    this.x += vx;
    this.y += vy;
  }
};

Firework.prototype.draw = function () {
  ctx.beginPath();
  ctx.moveTo(
    this.coordinates[this.coordinates.length - 1][0],
    this.coordinates[this.coordinates.length - 1][1]
  ); 
  ctx.lineTo(this.x, this.y);
  ctx.strokeStyle = "hsl(" + hue + ", 100%, " + this.brightness + "%)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2); 
  ctx.stroke();
};

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.coordinates = [];
  this.coordinateCount = 5;
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  
  this.angle = random(0, Math.PI * 2);
  this.speed = random(1, 10);
  this.friction = 0.95;
  this.gravity = 1;
  this.hue = random(hue - 50, hue + 50);
  this.brightness = random(50, 80);
  this.alpha = 1;
  this.decay = random(0.015, 0.03);
}

Particle.prototype.update = function (index) {
  this.coordinates.pop();
  this.coordinates.unshift([this.x, this.y]);
  this.speed *= this.friction;
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed + this.gravity;
  this.alpha -= this.decay;

  if (this.alpha <= this.decay) {
    particles.splice(index, 1);
  }
};

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.moveTo(
    this.coordinates[this.coordinates.length - 1][0],
    this.coordinates[this.coordinates.length - 1][1]
  ); 
  ctx.lineTo(this.x, this.y);
  ctx.strokeStyle =
    "hsla(" + this.hue + ", 100%, " + this.brightness + "%, " + this.alpha + ")";
  ctx.stroke();
};

function createParticles(x, y) {
  var particleCount = 30; 
  while (particleCount--) {
    particles.push(new Particle(x, y));
  }
}

function update() {
  requestAnimationFrame(update);

  hue = random(0, 360);
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = "lighter";

  var i = fireworks.length;
  while (i--) {
    fireworks[i].draw();
    fireworks[i].update(i);
  }

  var i = particles.length;
  while (i--) {
    particles[i].draw();
    particles[i].update(i);
  }

  if (timerTick >= timerTotal) {
    if (!mousedown) {
      fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
      timerTick = 0;
    }
  } else {
    timerTick++;
  }

  if (limiterTick >= limiterTotal) {
    if (mousedown) {
      fireworks.push(new Firework(cw / 2, ch, mx, my));
      limiterTick = 0;
    }
  } else {
    limiterTick++;
  }
}

function onResize() {
  cw = window.innerWidth;
  ch = window.innerHeight;
  canvas.width = cw;
  canvas.height = ch;
}

canvas.addEventListener("mousemove", function (e) {
  mx = e.pageX - canvas.offsetLeft;
  my = e.pageY - canvas.offsetTop;
});

canvas.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mousedown = true;
});

canvas.addEventListener("mouseup", function (e) {
  e.preventDefault();
  mousedown = false;
});

window.addEventListener("resize", onResize);

window.onload = update;
