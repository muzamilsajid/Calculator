function gridLines()
{
    var linespacinggap = 20;
    stroke(0,255,0);
    strokeWeight(1);
    fill(255,255,255);
    beginShape(LINES)
    {
        var linestart = 0;
        var linespacing=0;
        for (let i=0;i<width;i++)
        {
        vertex(linespacing,linestart);
        vertex(linespacing,height);   
            textSize(10);
            text(i*linespacinggap,linespacing,10);
            linespacing +=linespacinggap;
        }
    }
    endShape();
    
    
    //fill('green');
    beginShape(LINES)
    {
        var lineystart = 0;
        var lineyspacing=0;
        for (let i=0;i<height;i++)
        {
        vertex(lineystart,lineyspacing);
        vertex(width,lineyspacing);   
            textSize(10);
            text(i*linespacinggap,10,lineyspacing);
            lineyspacing +=linespacinggap;
        }
    }
    endShape();
}