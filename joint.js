class joint{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.join = Constraint.create(options);
        World.add(world, this.join);
        this.pointB = pointB
    }

    fly(){
        this.join.bodyA = null;
    }
    display(){
        if(this.join.bodyA){
        var pointA = this.join.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}