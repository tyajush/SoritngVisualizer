inp_aspeed.addEventListener("input",vis_speed);
var speed = 1000;
var delay_time=10000/(Math.floor(array_size/10)*speed);
function vis_speed()
{
  var array_speed = inp_aspeed.value;
  switch(parseInt(array_speed))
  {
    case 1: speed=1;
            break;
    case 2: speed=10;
            break;
    case 3: speed=100;
            break;
    case 4: speed=1000;
            break;
    case 5: speed=10000;
            break;
  }
 delay_time=10000/(Math.floor(array_size/10)*speed);
}

c_delay = 0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) +
         "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
  window.setTimeout(function(){
    for(var i=0;i<algo.length;i++)
    {
      algo[i].classList=[];
      algo[i].classList.add("butt_unselected");
      algo[i].classList.add("btn");
      algo[i].disabled=false;
      inp_as.disabled=false;
      inp_gen.disabled=false;
      inp_aspeed.disabled=false;
    }
  },c_delay+=delay_time)
}
