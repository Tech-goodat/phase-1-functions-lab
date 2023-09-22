// Code your solution in this file!
function distanceFromHqInBlocks(blocks=42){
    return Math.abs(blocks - 42);
    return Math.abs(blocks-34);
    
}
function distanceFromHqInFeet(blocks=43){
    return Math.abs(blocks-42)*264;

}
function distanceTravelledInFeet(distance=43, distance2=48){
    return Math.abs(distance2 -distance)*264;

}
function calculatesFarePrice(start=43, destination=44){
    let distance =Math.abs(start-destination)*264;
    if (distance <=400){
        return 0;
    }
    else if (distance >400 && distance <=2000){
        return (distance-400) *0.02;
    }
    else if (distance >2000 && distance <=2500){
        return 25;
    }
    else if (distance >2500){
        return 'cannot travel that far'
    }

}



