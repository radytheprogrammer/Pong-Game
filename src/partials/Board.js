import {SVG_NS} from '../settings'

export default class Board {
    
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    render(svg) {
        //console.log(`In Board.js {this.width}, {this.height}`)
        /* create/draw the board */
        let rect = document.createElementNS(SVG_NS, 'rect')

        rect.setAttributeNS(null, 'width', this.width)
        rect.setAttributeNS(null, 'height', this.height)
        rect.setAttributeNS(null, 'fill', '#1390900')

        let line = document.createElementNS(SVG_NS, 'line')
        //your code here
        line.setAttributeNS(null, 'x1', this.width/2)
        line.setAttributeNS(null, 'y1', 0)
        line.setAttributeNS(null, 'x2', this.width/2)
        line.setAttributeNS(null, 'y2', this.height)
        line.setAttributeNS(null, 'stroke', 'white')
        // 20 dash size and 15 gap width
        line.setAttributeNS(null, 'stroke-dasharray', '20', '15')
        line.setAttributeNS(null, 'stroke-width', '4')

        /* DO NOT CREATE PADDLES HERE, That is done in paddle class */

        // constructor(boardHeight, width, height, x, y)
        svg.appendChild(rect)   
        svg.appendChild(line)
    }
}