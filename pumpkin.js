class Pumpkin{
    constructor(x,y,rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    draw(ctx){
        //Step 3 a:
        ctx.save();
        
        
        //Step 1. Change circle to square
        //ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2);
        //ctx.rect(this.x-this.rad, this.y-this.rad, this.rad*2, this.rad*2);
        
        //Step 2. make above code more readable and resuable
        //move inside the middle of the canvas
        ctx.translate(this.x,this.y);
        //scale to the radius so we can work with percentages below
        ctx.scale(this.rad, this.rad)
        
        ctx.fillStyle="gray";
        ctx.beginPath();
        
        
        //result working in percentages
        //-100%, -100%, 200% on both sides
        ctx.rect(-1,-1,2,2)
        
        // Step 3: We transform the context by saving before and restoring after
        ctx.fill();
        // Step 3 b:
        ctx.restore();
    }
}