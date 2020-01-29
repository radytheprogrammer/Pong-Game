import {SVG_NS} from '../settings'

export default class Ball {

    constructor(boardHeight, boardWidth, radius, x, y){
        this.radius         = radius
        this.boardHeight    = boardHeight
        this.boardWidth     = boardWidth
        this.x = x
        this.y = y
    }

    wallCollision() { /* MODULAR MEANS USE VARIABLES*/

        // if ball hits left or right
        if (this.x <= 0){
            console.log("left wll hit")
        }

        if (this.x == 512){
            console.log("right wall hit")
        }

        // if hits top or bott
        if(this.y <= 0){
            console.log("top wall hit")
        } else {

            // reverse the position
        }

        if(this.y == 256){
            console.log("bottom wall hit")
        }

        const hitLeft = this.x - this.radius <= 0
        const hitRight = this.x + this.radius >= this.boardWidth
        const hitTop = this.y - this.radius <= 0
        const hitBottom = this.y + this.radius >= this.boardHeight


    }

    render(svg){
        this.x += this.vx
        this.y += this.vy

        let circ = document.createAttributeNS(SVG_NS, 'circ')
        circ.setAttributeNS(null, 'fill', '#353535')

    }

}