import p5 from "p5";

interface Particle {
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  lifespan: number;
  color: p5.Color;
}

const heartFirework = (p: p5) => {
  let particles: Particle[] = [];
  const particleCount = 200;

  p.setup = () => {
    p.createCanvas(800, 600);
    p.colorMode(p.HSB, 360, 100, 100, 100);
  };
  const createHeartShape = (angle: number, radius: number): p5.Vector => {
    //Parametric heart equation
    const t = angle;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
    return p.createVector(x * radius, -y * radius);
  };
  const createParticles = (x: number, y: number) => {
    for (let i = 0; i < particleCount; i++) {
      const angle = p.map(i, 0, particleCount, 0, 2 * p.PI);
      const heartPos = createHeartShape(angle, 2);
      const particle: Particle = {
        pos: p.createVector(x, y),
        vel: p.createVector(heartPos.x, heartPos.y).mult(0.1),
        acc: p.createVector(0, 0.1),
        lifespan: 255,
        color: p.color(p.random(330, 350), 80, 100, 100), //Pink/red hues
      };
      particles.push(particle);
    }
  };
  p.mousePressed = () => {
    createParticles(p.mouseX, p.mouseY);
  };
  p.draw = () => {
    p.background(0, 0, 10);

    //Updating and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      //Update
      particle.vel.add(particle.acc);
      particle.pos.add(particle.vel);
      particle.lifespan -= 0;
      //Display
      p.noStroke();
      const c = particle.color;
      p.fill(p.hue(c), p.saturation(c), p.brightness(c), particle.lifespan);
      p.circle(particle.pos.x, particle.pos.y, 4);
      //Remove dead particles
      if (particle.lifespan < 0) {
        particles.splice(i, 1);
      }
    }
  };
};
export default heartFirework;
