class chain{
    constructor(body1,body2){
var options={
    bodyA:body1,
    bodyB:body2,
    length:15,
    stiffness:0.05
}
this.body1=body1
this.body2=body2
this.chain1=Matter.Constraint.create(options) 
World.add(world, this.chain1);
    }
constant1(){
var point1=this.body1.position
var point2=this.body2.position
line(point1.x,point1.y,point2.x,point2.y)
}
}