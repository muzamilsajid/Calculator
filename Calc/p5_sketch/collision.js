/*This function detects collission between object player and object collider
both are array objects with
*/
function collisionDetector(box)
{
    //The Player and the collider both need to be Arrays.
    //for(i=0;i<box.length;i++)
    //{
    if(box.posX  <= mouseX && mouseX <= box.posX + box.w &&
      box.posY <= mouseY && mouseY <= box.posY + box.h)
    {
        //console.log("Colided");
        textAlign(CENTER);
        fill(0,100,255);
        text("Collided",box.posX+box.w/2,box.posY+box.h/2);
        numberPressed = box.value;
    }
}