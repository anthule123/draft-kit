//sketches/haha.ts

import { create } from "domain";
import p5 from "p5";

interface Ball{
    x: number 
    y: number
    speedX: number
    speedY: number
    size: number
    color: p5.Color
}
export default function sketch (p:p5){
    let balls: Ball[]=[]
    let gravity = 0.2 
    let friction = 0.99
    p.setup = ()=>{
        p.createCanvas(400,400)
        //create initial balls
        for (let i = 0; i<5;i++){
            createNewBall()
        }
    }
    p.draw=()=>{
        p.background(220)
        p.ellipse(p.width/2, p.height/2,80,80)
        p.stroke(200)
        //apply gravity 


        //update and display balls
        balls.forEach((ball, index) =>{
            //apply gravity
            ball.speedY +=gravity
            ball.speedX *= friction 
            ball.speedY *= friction

            ball.x += ball.speedX 
            ball.y += ball.speedY 
            //bounce off edges 
            if (ball.x > p.width - ball.size/2){
                ball.x = p.width - ball.size/2 
                ball.speedX *=-1
            }
            if(ball.x <ball.size/2){
                ball.x = ball.size/2
                ball.speedX *=-1
            }
            if (ball.y > p.height - ball.size/2){
                ball.y = p.height - ball.size/2 
                ball.speedY *=-1
            }
            if(ball.y <ball.size/2){
                ball.y = ball.size/2
                ball.speedY *=-1
            }
            
            p.ellipse(ball.x, ball.y + ball.size/2, ball.size/3, ball.size/6)

        })
       

    }
    //create a new ball with random properties
    const createNewBall=()=>{
        balls.push({
            x: p.random(p.width),
            y: p.random(p.height),
            speedX: p.random(-5,5),
            speedY: p.random(-5,5),
            size: p.random(20,50),
            color: p.color(p.random(255))
        })
    }
    //add new ball on mouse click
    p.mousePressed=()=>{
        createNewBall
    }
    //remove ball on key press
    p.keyPressed=()=>{
        if (balls.length>0){
            balls.pop()
        }
    }
}