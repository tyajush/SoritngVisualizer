function merger(start,mid,high)
{
  var p=start, q=mid+1;
  var arrmg = [], k=0;

  for(var i=start;i<=high;i++)
  {
      //if none left in left partition
      if(p>mid)
      {
        arrmg[k++] = div_sizes[q++];
        div_update(divs[q-1],div_sizes[q-1],"red");
      }

      //if none left in right partition
      else if(q>high)
      {
        arrmg[k++] = div_sizes[p++];
        div_update(divs[p-1],div_sizes[p-1],"red");
      }

      else if(div_sizes[p]<div_sizes[q])
      {arrmg[k++] = div_sizes[p++];
        div_update(divs[p-1],div_sizes[p-1],"red");
      }
      else
      {
        arrmg[k++] = div_sizes[q++];
        div_update(divs[q-1],div_sizes[q-1],"red");
      }
  }


  for(var i=0;i<k;i++)
  {
    div_sizes[start++]=arrmg[i];
    div_update(divs[start-1],div_sizes[start-1],"green");
  }

}

function util(low,high)
{
  if(low<high)
  {
    var mid = Math.floor((high + low)/2);
    div_update(divs[mid],div_sizes[mid],"yellow");
    util(low,mid);
    util(mid+1,high);
    merger(low,mid,high);
  }

}
function merge()
{
  c_delay = 0;

  var low = 0;
  var high = array_size-1;

  util(low,high);
  enable_buttons();
}
