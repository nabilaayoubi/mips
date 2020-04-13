var i=0;
var funct="";
var stringOutput ="";
var arrayInput  = [];
var ArrayInput =[[]];
var stringInput="";
draw();
var add_inst,addi_inst,sub_inst, mult_inst, div_inst, or_inst,and_inst,nor_inst,slt_inst,sll_inst,srl_inst,andi_inst,ori_inst,slti_inst;
function convert(current_Inst){
    var Inst_number =1;
    arrayInput =[]
    stringInput = document.getElementById("inputArea").value;
    var i =0;

        while(i<stringInput.length){
            if(stringInput[i] =="\n"){
                Inst_number++;
            }
            i++;
        }
        
        i=0;
        console.log(Inst_number)
        if(Inst_number==current_Inst+1){
            if(Inst_number==1){
            Inst_Map.set(1,Inst_Map.get(1)-1)
            for(var i=0;i<stringInput.length;i++){
                var elem ="";
                while(stringInput[i] != "," && stringInput[i]!=" " && i<stringInput.length&& stringInput[i] !="(" && stringInput[i] !=")"){
                    elem += stringInput[i]
                    i++;
                }
                arrayInput.push(elem)   
            }}
            else{Inst_Map.set(1,Inst_Map.get(1)-1)
                console.log(ArrayInput[Inst_number-1])
            arrayInput = ArrayInput[Inst_number-1]}
        }
        else {
            if(ArrayInput.length == 1){
            i =0;
            for(var j=0;j<Inst_number;j++){ 
                
                var temp = [];  
                while(stringInput.length>i&&stringInput[i-1] != "\n"){
                    if(stringInput[i-2]=="\n"){
                    var elem =stringInput[i-1];}
                    else{var elem = ""}
                    while(stringInput[i] != " "&& stringInput[i]!=","&& i<stringInput.length&& stringInput[i]!="\n"&& stringInput[i]!="(" && stringInput[i] !=")"){
                        elem += stringInput[i];
                        i++;
                    }
                    temp.push(elem);
                    i++;
                    
                }
                i++
                ArrayInput[j] = temp;
            }}
        arrayInput =[];
        arrayInput = ArrayInput[current_Inst]}

    // console.log(Inst_Map.get(1))
    // for(var i=0;i< stringInput.length;i++){
    //     var elem ="";
    //     while(stringInput[i] != " "&& i<stringInput.length){
    //         elem += stringInput[i];
    //         i++;
    //     }
    //     arrayInput.push(elem);
    // }
    console.log(arrayInput)
    funct=myMap.get(arrayInput[0]);
    
    // ---------------------------------------------------------------------------------------
    //                                       Add instruction
    // ---------------------------------------------------------------------------------------
    function add_instruction(){
        c.clearRect(0,0,canvas.width,canvas.height)
        Color_reset();
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:"+ arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
        B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])
        
        myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) )
        
        document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])
        document.getElementById("outputArea").value = stringOutput     
        Inst_Map.set(1,Inst_Map.get(1)+1);
        draw();
    }
    // --------------------------------------------------------------------------------------
    //                                        Sub instruction
    // --------------------------------------------------------------------------------------
    
    function sub_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])

       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) - myMap.get(arrayInput[3]) )

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // --------------------------------------------------------------------------------------
    //                                        Mult instruction
    // --------------------------------------------------------------------------------------
    function mult_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])

       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) * myMap.get(arrayInput[3]) )

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
     // --------------------------------------------------------------------------------------
    //                                        Div instruction
    // --------------------------------------------------------------------------------------
    function div_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])

       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) / myMap.get(arrayInput[3]) )

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // ---------------------------------------------------------------------------------------
    //                                      Or instruction
    // ---------------------------------------------------------------------------------------
    function or_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])

       var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
        var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
        var BinaryRd="";
        for(var i=0; i<32; i++){
            BinaryRd+= BinaryRs.charAt(i) | BinaryRt.charAt(i);
        }
       myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // ---------------------------------------------------------------------------------------
    //                                      And instruction
    // ---------------------------------------------------------------------------------------
    function and_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])
        var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
        var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
        var BinaryRd="";
        for(var i=0; i<32; i++){
            BinaryRd+= BinaryRs.charAt(i) & BinaryRt.charAt(i);
        }
       myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // ---------------------------------------------------------------------------------------
    //                                      nor instruction
    // ---------------------------------------------------------------------------------------
    function nor_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])
        var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
        var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
        var BinaryRd="";
        for(var i=0; i<32; i++){
            if(BinaryRs.charAt(i)=='0' & BinaryRt.charAt(i)=='0'){
                BinaryRd+='1';
            }
            else if(BinaryRs.charAt(i)=='1' & BinaryRt.charAt(i)=='0'){
                BinaryRd+='0';
            }
            else if(BinaryRs.charAt(i)=='0' & BinaryRt.charAt(i)=='1'){
                BinaryRd+='0';
            }
            else {
                BinaryRd+='0';
            }
        }
        console.log(BinaryRd);

       myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // --------------------------------------------------------------------------------------
    //                                        slt instruction
    // --------------------------------------------------------------------------------------
    function slt_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:" + arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])
       var value=0;
       if(myMap.get(arrayInput[2]) < myMap.get(arrayInput[3])){
           value=1;
       }           
       myMap.set(arrayInput[1],value);

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // --------------------------------------------------------------------------------------
    //                                        sll instruction
    // --------------------------------------------------------------------------------------
    function sll_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ "0"+ ","+" rt:"+arrayInput[2]+","+ " rd:" + arrayInput[1] + '\n'+"000000"+" " + "00000"+B_Map.get(arrayInput[2]) +" "+ 
                                   B_Map.get(arrayInput[1]) +" "+parseInt(arrayInput[3],10).toString(2).padStart(5,"0") + " "+B_Map.get(arrayInput[0]);
       
    var value= myMap.get(arrayInput[2])<<arrayInput[3];  

       myMap.set(arrayInput[1],value);

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // --------------------------------------------------------------------------------------
    //                                        srl instruction
    // --------------------------------------------------------------------------------------
    function srl_instruction(){
        Color_reset();
        c.clearRect(0,0,canvas.width,canvas.height)
        stringOutput ="R-Format"+'\n'+ "rs:"+ "0"+ ","+" rt:"+arrayInput[2]+","+ " rd:" + arrayInput[1] + '\n'+"000000"+" " + "00000"+B_Map.get(arrayInput[2]) +" "+ 
                                   B_Map.get(arrayInput[1]) +" "+ parseInt(arrayInput[3],10).toString(2).padStart(5,"0") + " "+B_Map.get(arrayInput[0]);
       
    var value= myMap.get(arrayInput[2])>>arrayInput[3];  

       myMap.set(arrayInput[1],value);

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
       draw();
    }
    // ---------------------------------------------------------------------------------------
    //                                      addi instruction
    // ---------------------------------------------------------------------------------------

    function addi_instruction(){
        c.clearRect(0,0,canvas.width,canvas.height)
        Color_reset();
        stringOutput ="I-Format"+ '\n'+ "rs:"+ arrayInput[2]+ " , "+"rt:"+arrayInput[1]+" , "+"constant:"+arrayInput[3]+'\n'+ B_Map.get(arrayInput[0])+ " " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[1]) +" "+ myMap.get(arrayInput[3]).toString(2).padStart(16,"0");
        // console.log(stringOutput)
       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) )

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
    //    console.log(Inst_Map.get(1))
    draw();
    }
     // ---------------------------------------------------------------------------------------
    //                                       lw instruction
    // ---------------------------------------------------------------------------------------
    function lw_instruction(){
        stringOutput = "I-Format"+ '\n'+ "rs:"+ arrayInput[3]+ " , "+"rt:"+arrayInput[1]+" , "+"constant:"+arrayInput[2]+'\n'+B_Map.get(arrayInput[0]) +" "+ B_Map.get(arrayInput[3]) +" "
                    +B_Map.get(arrayInput[1])+" "+myMap.get(arrayInput[2]).toString(2).padStart(16,"0")
        
        myMap.set(arrayInput[1],choose_reg(myMap.get(arrayInput[2])))
        document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

        document.getElementById("outputArea").value= stringOutput
        Inst_Map.set(1,Inst_Map.get(1)+1);
      Redraw();
      Color_reset();
      draw();
    }
     // ---------------------------------------------------------------------------------------
    //                                       sw instruction
    // ---------------------------------------------------------------------------------------
    function sw_instruction(){
        stringOutput ="I-Format"+ '\n'+ "rs:"+ arrayInput[3]+ " , "+"rt:"+arrayInput[1]+" , "+"constant:"+arrayInput[2]+'\n'+ B_Map.get(arrayInput[0]) +" "+ B_Map.get(arrayInput[3]) +" "
                    +B_Map.get(arrayInput[1])+" "+myMap.get(arrayInput[2]).toString(2).padStart(16,"0")
        
                    console.log((4* arrayInput[2]+LS_Map.get(arrayInput[3])));

        set_reg(myMap.get(arrayInput[2]),myMap.get(arrayInput[1]))

        LS_Map.set(arrayInput[3], LS_Map.get(arrayInput[3])+4* arrayInput[2]);

        document.getElementById(arrayInput[3]).innerHTML ="0x" +
                                    (LS_Map.get(arrayInput[3])).toString().padStart(8,"0"); 

        document.getElementById("outputArea").value= stringOutput
        Inst_Map.set(1,Inst_Map.get(1)+1);
        Redraw();
        Color_reset();
        draw();
    }
    // ---------------------------------------------------------------------------------------
    //                                       Andi instruction
    // ---------------------------------------------------------------------------------------

    function andi_instruction(){
      Color_reset();
      c.clearRect(0,0,canvas.width,canvas.height)
      stringOutput ="I-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[1]+","+ " constant:" + arrayInput[3] + '\n'+"001100 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[1]) +" "+ 
                                 parseInt(arrayInput[3],10).toString(2).padStart(16,"0");
      var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
      var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
      var BinaryRd="";
      for(var i=0; i<32; i++){
          BinaryRd+= BinaryRs.charAt(i) & BinaryRt.charAt(i);
      }
     myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))

     document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

     document.getElementById("outputArea").value = stringOutput
     Inst_Map.set(1,Inst_Map.get(1)+1);
     draw();
  }

  // ---------------------------------------------------------------------------------------
    //                                       Ori instruction
    // ---------------------------------------------------------------------------------------

    function ori_instruction(){
      Color_reset();
      c.clearRect(0,0,canvas.width,canvas.height)
      stringOutput ="I-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[1]+","+ " constant:" + arrayInput[3] + '\n'+"001101 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[1]) +" "+ 
                                 parseInt(arrayInput[3],10).toString(2).padStart(16,"0");
      var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
      var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
      var BinaryRd="";
      for(var i=0; i<32; i++){
          BinaryRd+= BinaryRs.charAt(i) | BinaryRt.charAt(i);
      }
     myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))

     document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

     document.getElementById("outputArea").value = stringOutput
     Inst_Map.set(1,Inst_Map.get(1)+1);
     draw();
  }
  // --------------------------------------------------------------------------------------
    //                                        slti instruction
    // --------------------------------------------------------------------------------------
    function slti_instruction(){
      Color_reset();
      c.clearRect(0,0,canvas.width,canvas.height)
      stringOutput ="I-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[1]+","+ " constant:" + arrayInput[3] + '\n'+"001010 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[1]) +" "+ 
                                 parseInt(arrayInput[3],10).toString(2).padStart(16,"0");
     var value=0;
     if(myMap.get(arrayInput[2]) < myMap.get(arrayInput[3])){
         value=1;
     }           
     myMap.set(arrayInput[1],value);

     document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

     document.getElementById("outputArea").value = stringOutput
     Inst_Map.set(1,Inst_Map.get(1)+1);
     draw();
  }
    function choose_inst(){
        switch(myMap.get(arrayInput[0])){
            case "add": add_inst = add_instruction(); break;
            case "addi": addi_inst = addi_instruction(); break;
            case "sub": sub_inst = sub_instruction();break;
            case "lw" : lw_inst = lw_instruction();break;
            case "sw" : sw_isnt = sw_instruction();break;
            case "mult": mult_inst=mult_instruction();break;
            case "div": div_inst=div_instruction();break;
            case "or": or_inst=or_instruction();break;
            case "and": and_inst=and_instruction();break;
            case "nor":nor_inst=nor_instruction();break;
            case "slt":slt_inst=slt_instruction(); break;
            case "sll":sll_inst=sll_instruction(); break;
            case "srl":srl_inst=srl_instruction(); break;
            case "slti":slti_inst=slti_instruction(); break;
            case "ori": ori_inst=ori_instruction();break;
            case "andi": andi_inst=andi_instruction();break;

        }        
    }
    function choose_reg(i){
        switch(arrayInput[3]){
            case "$a0": return a0[i];
            case "$a1": return a1[i];
            case "$a2": return a2[i];
            case "$a3": return a3[i];
        }
    }

    function set_reg(i,j){
        switch(arrayInput[3]){
            case "$a0": a0[i] = j;
            case "$a1": a1[i] = j;
            case "$a2": a2[i] = j;
            case "$a3": a3[i] = j;
        }
    }

    choose_inst();
}

function Start(){
    i=0;
}
  function Next(){
    //  Redraw();
    if(funct=="add" || funct=="sub" || funct=="and" || funct=="or" || funct=="mult"|| funct=="div"|| funct=="nor"||
    funct=="slt" ||funct=="sll" ||funct=="srl"){
    if(i==0){
      i+=1;
      Redraw();
      Color_Instruction_Fetsh_R();
      draw();
      Color_reset();
    }
    else if(i==1){
      i+=1;
      Redraw();
      Color_Instruction_Decode_R();
      draw();
      Color_reset();
    }
    else if(i==2){
      i+=1;
      Redraw();
      Color_Execution_R();
      draw();
      Color_reset();
    }
    else if(i==3){
    Redraw();
    Color_WriteBack_R();
    draw();
    Color_reset();
    }
    }
    else if(funct=="addi" || funct=="andi" || funct=="ori" || funct=="slti"){
        if(i==0){
            i+=1;
            Redraw();
            Color_Instruction_Fetsh_I();
            draw();
            Color_reset();
          }
          else if(i==1){
            i+=1;
            Redraw();
            Color_Instruction_Decode_I();
            draw();
            Color_reset();
          }
          else if(i==2){
            i+=1;
            Redraw();
            Color_Execution_I();
            draw();
            Color_reset();
          }
          else if(i==3){
          Redraw();
          Color_WriteBack_I();
          draw();
          Color_reset();
          }
    }
    else if(funct=="lw"){
        if(i==0){
            i+=1;
            Redraw();
            Color_Instruction_Fetsh_lw();
            draw();
            Color_reset();
          }
          else if(i==1){
            i+=1;
            Redraw();
            Color_Instruction_Decode_lw();
            draw();
            Color_reset();
          }
          else if(i==2){
            i+=1;
            Redraw();
            Color_Execution_lw();
            draw();
            Color_reset();
          }
          else if(i==3){
              i+=1;
          Redraw();
          Color_Memory_lw();
          draw();
          Color_reset();
          }
          else if(i==4){
            Redraw();
            Color_WriteBack_lw();
            draw();
            Color_reset();
          }
    }
    else if(funct=="sw"){
        if(i==0){
            i+=1;
            Redraw();
            Color_Instruction_Fetsh_sw();
            draw();
            Color_reset();
          }
          else if(i==1){
            i+=1;
            Redraw();
            Color_Instruction_Decode_sw();
            draw();
            Color_reset();
          }
          else if(i==2){
            i+=1;
            Redraw();
            Color_Execution_sw();
            draw();
            Color_reset();
          }
          else if(i==3){
          Redraw();
          Color_Memory_sw();
          draw();
          Color_reset();
          }
    }
  }
  function Previous(){
     // Redraw();
    if(funct=="add" || funct=="sub" || funct=="and" || funct=="or" || funct=="mult"|| funct=="div"|| funct=="nor"||
    funct=="slt" ||funct=="sll" ||funct=="srl"){
    if(i==3){
      i-=1;
      Redraw();
      Color_Execution_R();
      draw();
      Color_reset();
    }
    else if(i==2){
      i-=1;
      Redraw();
      Color_Instruction_Decode_R();
      draw();
      Color_reset();
    }
    else if(i==1){
      i-=1;
      Redraw();
      Color_Instruction_Fetsh_R();
      draw();
      Color_reset();}
    }
    else if(funct=="addi" || funct=="andi" || funct=="ori" || funct=="slti"){
        if(i==3){
            i-=1;
            Redraw();
            Color_Execution_I();
            draw();
            Color_reset();
          }
          else if(i==2){
            i-=1;
            Redraw();
            Color_Instruction_Decode_I();
            draw();
            Color_reset();
          }
          else if(i==1){
            i-=1;
            Redraw();
            Color_Instruction_Fetsh_I();
            draw();
            Color_reset();
        }
    }
    else if(funct=="lw"){
        if(i==4){
            i-=1;
            Redraw();
            Color_Memory_lw();
            draw();
            Color_reset();
          }
          else if(i==3){
            i-=1;
            Redraw();
            Color_Execution_lw();
            draw();
            Color_reset();
          }
          else if(i==2){
            i-=1;
            Redraw();
            Color_Instruction_Decode_lw();
            draw();
            Color_reset();
        }
        else if(i==1){
            i-=1;
            Redraw();
            Color_Instruction_Fetsh_lw();
            draw();
            Color_reset();
        }
    }
    else if(funct=="sw"){
        if(i==3){
            i-=1;
            Redraw();
            Color_Execution_sw();
            draw();
            Color_reset();
          }
          else if(i==2){
            i-=1;
            Redraw();
            Color_Instruction_Decode_sw();
            draw();
            Color_reset();
          }
          else if(i==1){
            i-=1;
            Redraw();
            Color_Instruction_Fetsh_sw();
            draw();
            Color_reset();
        }
    }
    
  }
  function Full_Datapath(){
    if(funct=="add" || funct=="sub" || funct=="and" || funct=="or" || funct=="mult"|| funct=="div"|| funct=="nor"||
    funct=="slt" ||funct=="sll" ||funct=="srl"){
      Redraw();
      Color_Instruction_Fetsh_R();
      Color_Instruction_Decode_R();
      Color_Execution_R();
      Color_WriteBack_R();
      draw();
      Color_reset()
    }
    else if(funct=="addi" || funct=="andi" || funct=="ori" || funct=="slti"){
      Redraw();
      Color_Instruction_Fetsh_I();
      Color_Instruction_Decode_I();
      Color_Execution_I();
      Color_WriteBack_I();
      draw();
      Color_reset()
    }
    else if(funct=="lw"){
      Redraw();
      Color_Instruction_Fetsh_lw();
      Color_Instruction_Decode_lw();
      Color_Execution_lw();
      Color_Memory_lw();
      Color_WriteBack_lw();
      draw();
      Color_reset()
    }
    else if(funct=="sw"){
      Redraw();
      Color_Instruction_Fetsh_sw();
      Color_Instruction_Decode_sw();
      Color_Execution_sw();
      Color_Memory_sw();
      draw();
      Color_reset()
    }
    
  }

function First(){
  if(funct=="add" || funct=="sub" || funct=="and" || funct=="or" || funct=="mult"|| funct=="div"|| funct=="nor"||
  funct=="slt" ||funct=="sll" ||funct=="srl"){
    i=1;
    Redraw();
    Color_Instruction_Fetsh_R();
    draw();
    Color_reset();
  }
  if(funct=="addi" || funct=="andi" || funct=="ori" || funct=="slti"){
    i=1;
    Redraw();
    Color_Instruction_Fetsh_I();
    draw();
    Color_reset();
  }
  if(funct=="lw"){
    i=1;
    Redraw();
    Color_Instruction_Fetsh_lw();
    draw();
    Color_reset();
  }
  if(funct=="sw"){
    Redraw();
    i=1;
    Color_Instruction_Fetsh_sw();
    draw();
    Color_reset();
  }
}
function Last(){
  if(funct=="add" || funct=="sub" || funct=="and" || funct=="or" || funct=="mult"|| funct=="div"|| funct=="nor"||
  funct=="slt" ||funct=="sll" ||funct=="srl"){
    i=3;
    Redraw();
    Color_WriteBack_R();
    draw();
    Color_reset();
  }
  if(funct=="addi" || funct=="andi" || funct=="ori" || funct=="slti"){
    i=3;
    Redraw();
    Color_WriteBack_I();
    draw();
    Color_reset();
  }
  if(funct=="lw"){
    i=4;
    Redraw();
    Color_WriteBack_lw();
    draw();
    Color_reset();
  }
  if(funct=="sw"){
    i=3;
    Redraw();
    Color_Memory_sw();
    draw();
    Color_reset();
  }
}
