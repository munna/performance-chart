import React, { Component } from 'react';

export default class PerformanceChart extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    componentDidMount()
    {
        const {data, size} = this.props;
        let ctx = this.canvas.getContext("2d");
        const total = data.reduce((sum, {value}) => sum + value, 0);
        // Start at the top
        const centerX=size/2;
        const centerY= size/2;
        const radius = size/2;
        let currentAngle = .85 * Math.PI;
        for (let result of data) {
            let sliceAngle = (result.value / total) * 1.3 * Math.PI;
            
            ctx.beginPath();
            // center=100,100, radius=100
            // from current angle, clockwise by slice's angle
            
            
            ctx.arc(centerX, centerY, radius,
            currentAngle, currentAngle + sliceAngle);
            currentAngle += sliceAngle;
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = result.color;
            ctx.fill();
            ctx.lineTo(centerX, centerY);
            ctx.strokeStyle = "#fff";
            ctx.lineWidth   = 5;
            ctx.stroke();
  
        }
        ctx.font = "bold 12px Verdana";
        ctx.fillStyle ="#fff";
        ctx.fillText(data[0].name, 10, radius);
        ctx.fillText(data[0].value+'%', 20, (size/2)+20);
        ctx.fillText(data[4].name, (size)-50, radius);
        ctx.fillText(data[4].value+'%', (size)-50,(size/2)+20);
        ctx.fillStyle ="#000";
        ctx.fillText(data[2].name, (size/2)-40, 30);
        ctx.fillText(data[2].value+'%', (size/2)-25, 50);
        ctx.closePath();
        this.drawNeedle(ctx,size/2,size/2,radius-50,(360-(180-(180/(100/this.props.current)))) *Math.PI / 180);
    }
    drawNeedle (ctx,cx,cy,radius,radianAngle) {
       
        ctx.translate(cx,cy);
        ctx.rotate(radianAngle);
        ctx.beginPath();
        ctx.moveTo(0,-5);
        ctx.lineTo(radius,0);
        ctx.lineTo(0,5);
        ctx.fillStyle='#000';
        ctx.fill();
        ctx.rotate(-radianAngle);
        ctx.translate(-cx,-cy);
        ctx.beginPath();
        ctx.arc(cx,cy,10,0,Math.PI*2);
        ctx.fill();
    }
    render () {

        return (
            <canvas ref={(el)=>{this.canvas=el;}} width={this.props.size} height={this.props.size}> </canvas>
        )

    }

}