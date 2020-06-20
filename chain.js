class Chain {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 50,
            stiffness: 0.02
        }
        this.body = Constrain.create(options);
        World.add(world, this.body);
    }
    display() {
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;
        strokeWeight(3);
        line(posA.x, posA.y, posB.x, posB.y);
    }
}