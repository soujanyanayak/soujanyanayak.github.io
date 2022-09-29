function update(){
  
    //store number of correct answer for each question
    var solutions = [4, 1, 3, 4, 4];
    
    var n = 5;
    var s = 0;
    
    for(var i=1; i<=5; i++){
      
      //find out, which radio-button was checked for question i
      var r = document.querySelector('input[name=q'+i+']:checked');
      
      //number of correct answer for question i
      var solution = solutions[i-1];
      
      //r.value contains the number of the selected answer
      if(r && r.value == 'r'+solution){
        
           //increase number of correct answers
           s++;
        
           //highlight the correct answer
           document.getElementById('q'+i+'_r'+solution).parentNode.style.color='#5cb85c';
           document.getElementById('q'+i+'_r'+solution).parentNode.style.fontWeight='bold';
      }
     }
    
    //update the progress bar
    
    var p = s/n*100;
    
    document.getElementById("result_message").innerHTML = "You have answered " + s + " questions correctly!";
      
      document.getElementById("result_progress").style.width = p+"%";
      document.getElementById("result_progress").innerHTML = p+"%";
    document.getElementById("result_progress").setAttribute("aria-valuenow", p);
    
    document.getElementById("result_progress").className = "progress-bar bg-success";
    
    if(p<=60){
      
          document.getElementById("result_progress").className = "progress-bar bg-warning";
      }
  
      if(p<=30){
      
          document.getElementById("result_progress").className = "progress-bar bg-danger";
      }
    
   }
    
    