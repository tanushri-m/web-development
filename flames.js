var calculateNonDuplicateChar = function(nameA, nameB){
 var name1 = nameA.split('');
 var name2 = nameB.split('');
  
    for(var i =0;i<name1.length;i++)
    {
        for(var j =0;j<name2.length;j++)
        {
            if(name1[i]==name2[j])
            {
                name1[i]='@';
                name2[j]='@';
            }
        }
    }
     
     var joined = name1.concat(name2);
     var count = 0;
     for(var i = 0; i< joined.length; i++)
     {
            if(joined[i] != '@')
            {
                count++;
            }
     }

     return count;
    
}  

var findFlames = function(nameA, nameB){
    var value = calculateNonDuplicateChar(nameA,nameB);
    var flames =['F','L','A','M','E','S'];
    var counter = 0;
    while(flames.length>1)
    {
        counter -= 1;
        for(var i=0;i<value;i++)
        {
            counter++;
            if(counter >=flames.length)
            {
               counter = 0;
            }
        }
        flames.splice(counter,1);
    }
   return flames[0];
}

var getDetail= function(result)
{ 
    switch(result)
    {
        case 'F': return "Friends";
        case 'L': return "Love Birds";
        case 'A': return "Affair ";
        case 'M': return "Marriage";
        case 'E': return "Enemy";
        case 'S': return "SEX";
        default:
        return "wrong choice";
    
    }

}

var onCheckFlames = function(){
    var nameA = document.getElementById('nameA').value;
    var nameB = document.getElementById('nameB').value;

    document.getElementById("result").innerHTML = "Result is " +getDetail( findFlames(nameA, nameB));
}