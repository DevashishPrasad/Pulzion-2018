
function fun(i)
{
    d1 = document.getElementById("d1");
    d2 = document.getElementById("d2");
    d3 = document.getElementById("d3");
    d4 = document.getElementById("d4");
    l1 = document.getElementById("l1");
    l2 = document.getElementById("l2");
    l3 = document.getElementById("l3");
    l4 = document.getElementById("l4");
    im = document.getElementById("theimg");

    if(i == 1)
    {
        d1.style.opacity = "1";
        d2.style.opacity = "0";
        d3.style.opacity = "0";
        d4.style.opacity = "0";
        l1.style.color = "#fff";
        l2.style.color = "#999";
        l3.style.color = "#999";
        l4.style.color = "#999";
        im.src = "images/whymars.jpg";
    }
    if(i == 2)
    {
        d1.style.opacity = "0";
        d2.style.opacity = "1";
        d3.style.opacity = "0";
        d4.style.opacity = "0";
        l1.style.color = "#999";
        l2.style.color = "#fff";
        l3.style.color = "#999";
        l4.style.color = "#999";
        im.src = "images/journey.jpg";
    }
    if(i == 3)
    {
        d1.style.opacity = "0";
        d2.style.opacity = "0";
        d3.style.opacity = "1";
        d4.style.opacity = "0";
        l1.style.color = "#999";
        l2.style.color = "#999";
        l3.style.color = "#fff";
        l4.style.color = "#999";
        im.src = "images/achieve.jpg";
    }
    if(i == 4)
    {
        d1.style.opacity = "0";
        d2.style.opacity = "0";
        d3.style.opacity = "0";
        d4.style.opacity = "1";
        l1.style.color = "#999";
        l2.style.color = "#999";
        l3.style.color = "#999";
        l4.style.color = "#fff";
        im.src = "images/services.jpg";
    }
}