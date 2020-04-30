var inst;
var funct="";
var stringOutput ="";
var arrayInput  = [];
var ArrayInput =[[]];
var stringInput="";
var IsInst;
draw();
var add_inst,addi_inst,sub_inst, or_inst,and_inst,nor_inst,slt_inst,sll_inst,srl_inst,andi_inst,ori_inst,slti_inst,beq_inst,jump_inst;



function convert(current_Inst,IsInstrucion = true){
    IsInst = IsInstrucion;
    if (current_Inst >=1 && IsInst){
        if(arrayInput[0] != "beq" && arrayInput[0] != "j"){
    inst.to_table();}}
    let block = document.getElementById("Button");
    block.disabled = true;
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
            }
            if (arrayInput[0] == "sw" || arrayInput[0] == "lw"){
                document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1] + "," + arrayInput[2] +"(" + arrayInput[3] +")";
            }
            else{
                if(arrayInput[0] == "j"){
                    document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1]
                }
            else{document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1] + "," + arrayInput[2] +"," + arrayInput[3];}
}
        }
            else{Inst_Map.set(1,Inst_Map.get(1)-1)

            arrayInput = ArrayInput[Inst_number-1]
            if (arrayInput[0] == "sw" || arrayInput[0] == "lw"){
                document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1] + "," + arrayInput[2] +"(" + arrayInput[3] +")";
            }
            else{
                if(arrayInput[0] == "j"){
                    document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1]
                }
            else{document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1] + "," + arrayInput[2] +"," + arrayInput[3];}
}}
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

            arrayInput = ArrayInput[current_Inst]            ;
            if (arrayInput[0] == "sw" || arrayInput[0] == "lw"){
                document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1] + "," + arrayInput[2] +"(" + arrayInput[3] +")";
            }
            else{
                if(arrayInput[0] == "j"){
                    document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1]
                }
            else{document.getElementById("outputInst").value =arrayInput[0] + " "+ arrayInput[1] + "," + arrayInput[2] +"," + arrayInput[3];}
}

}


    // for(var i=0;i< stringInput.length;i++){
    //     var elem ="";
    //     while(stringInput[i] != " "&& i<stringInput.length){
    //         elem += stringInput[i];
    //         i++;
    //     }
    //     arrayInput.push(elem);
    // }

    funct=myMap.get(arrayInput[0]);
    if(funct=="add" || funct=="sub" || funct=="and" || funct=="or"|| funct=="nor"||
    funct=="slt" ||funct=="sll" ||funct=="srl"){
      inst= new InstructionDraw_RFormat();
    }
    else if(funct=="addi" || funct=="andi" || funct=="ori" || funct=="slti"){
      inst= new InstructionDraw_IFormat();
    }
    else if(funct=="lw"){
      inst= new InstructionDraw_LW();
    }
    else if(funct=="sw"){
      inst= new InstructionDraw_SW();
    }
    else if(funct=="j"){
        inst= new InstructionDraw_J();
      }
      else if(funct=="beq"){
        inst= new InstructionDraw_Beq();
      }
    else if(funct != "j" && funct != "beq"){
        Inst_Map.set(1,Inst_Map.get(1)+1);
        IsInst = false;
        console.log(current_Inst)
        convert(Inst_Map.get(1),IsInst);
        return
    }

    // ---------------------------------------------------------------------------------------
    //                                       Add instruction
    // ---------------------------------------------------------------------------------------
    function add_instruction(){
        c.clearRect(0,0,canvas.width,canvas.height)
        Color_reset();
        stringOutput ="R-Format"+'\n'+ "rs:"+ arrayInput[2]+ ","+" rt:"+arrayInput[3]+","+ " rd:"+ arrayInput[1] + '\n'+"000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
        B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])
        inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
        myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) )
        inst.setrsVal(myMap.get(arrayInput[2]));
        inst.setrtVal(myMap.get(arrayInput[3]));
        inst.setWBresult(myMap.get(arrayInput[1]));
        
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
        inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));

       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) - myMap.get(arrayInput[3]) )
       inst.setrsVal(myMap.get(arrayInput[2]));
       inst.setrtVal(myMap.get(arrayInput[3]));
       inst.setWBresult(myMap.get(arrayInput[1]));


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
        inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
       var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
        var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
        var BinaryRd="";
        for(var i=0; i<32; i++){
            BinaryRd+= BinaryRs.charAt(i) | BinaryRt.charAt(i);
        }
       myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))
       inst.setrsVal(myMap.get(arrayInput[2]));
        inst.setrtVal(myMap.get(arrayInput[3]));
        inst.setWBresult(myMap.get(arrayInput[1]));


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
        inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
        var BinaryRs= parseInt(myMap.get(arrayInput[2]),10).toString(2).padStart(32,"0");
        var BinaryRt= parseInt(myMap.get(arrayInput[3]),10).toString(2).padStart(32,"0");
        var BinaryRd="";
        for(var i=0; i<32; i++){
            BinaryRd+= BinaryRs.charAt(i) & BinaryRt.charAt(i);
        }
       myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))
       inst.setrsVal(myMap.get(arrayInput[2]));
       inst.setrtVal(myMap.get(arrayInput[3]));
       inst.setWBresult(myMap.get(arrayInput[1]));


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
        inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
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


       myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))
       inst.setrsVal(myMap.get(arrayInput[2]));
       inst.setrtVal(myMap.get(arrayInput[3]));
       inst.setWBresult(myMap.get(arrayInput[1]));


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
        inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
       var value=0;
       if(myMap.get(arrayInput[2]) < myMap.get(arrayInput[3])){
           value=1;
       }           
       myMap.set(arrayInput[1],value);
       inst.setrsVal(myMap.get(arrayInput[2]));
        inst.setrtVal(myMap.get(arrayInput[3]));
        inst.setWBresult(myMap.get(arrayInput[1]));

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
       inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
    var value= myMap.get(arrayInput[2])<<arrayInput[3];  

       myMap.set(arrayInput[1],value);
       inst.setrsVal(myMap.get(arrayInput[2]));
       inst.setrtVal(myMap.get(arrayInput[3]));
       inst.setWBresult(myMap.get(arrayInput[1]));

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
       inst.setopRep("000000");
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[3]));
        inst.setrdRep(B_Map.get(arrayInput[1]));
        inst.setfunctRep(B_Map.get(arrayInput[0]));
    var value= myMap.get(arrayInput[2])>>arrayInput[3];  

       myMap.set(arrayInput[1],value);
       inst.setrsVal(myMap.get(arrayInput[2]));
       inst.setrtVal(myMap.get(arrayInput[3]));
       inst.setWBresult(myMap.get(arrayInput[1]));

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

        inst.setopRep(B_Map.get(arrayInput[0]));
        inst.setrsRep(B_Map.get(arrayInput[2]));
        inst.setrtRep(B_Map.get(arrayInput[1]));
        inst.setcstRep(myMap.get(arrayInput[3]).toString(2).padStart(16,"0"));
       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) )
       inst.setrsVal(myMap.get(arrayInput[2]));
       inst.setcstVal(myMap.get(arrayInput[3]));
       inst.setWBresult(myMap.get(arrayInput[1]));
       

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);

    draw();
    }
     // ---------------------------------------------------------------------------------------
    //                                       lw instruction
    // ---------------------------------------------------------------------------------------
    function lw_instruction(){
        stringOutput = "I-Format"+ '\n'+ "rs:"+ arrayInput[3]+ " , "+"rt:"+arrayInput[1]+" , "+"constant:"+arrayInput[2]+'\n'+B_Map.get(arrayInput[0]) +" "+ B_Map.get(arrayInput[3]) +" "
                    +B_Map.get(arrayInput[1])+" "+myMap.get(arrayInput[2]).toString(2).padStart(16,"0")
        inst.setopRep(B_Map.get(arrayInput[0]));
        inst.setrsRep(B_Map.get(arrayInput[3]));
        inst.setrtRep(B_Map.get(arrayInput[1]));
        inst.setcstRep(myMap.get(arrayInput[2]).toString(2).padStart(16,"0"));
        myMap.set(arrayInput[1],choose_reg(myMap.get(arrayInput[2])))
        inst.setrsVal(myMap.get(arrayInput[3]));
        inst.setcstVal(myMap.get(arrayInput[2]));
        inst.setWBresult(myMap.get(arrayInput[1]));


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
        

        inst.setopRep(B_Map.get(arrayInput[0]));
        inst.setrsRep(B_Map.get(arrayInput[3]));
        inst.setrtRep(B_Map.get(arrayInput[1]));
        inst.setcstRep(myMap.get(arrayInput[2]).toString(2).padStart(16,"0"));
        set_reg(myMap.get(arrayInput[2]),myMap.get(arrayInput[1]))
        
        LS_Map.set(arrayInput[3],4* arrayInput[2]);
        inst.setrsVal(myMap.get(arrayInput[3]));
        inst.setcstVal(myMap.get(arrayInput[2]));
        inst.setrtVal(myMap.get(arrayInput[1]));

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
      inst.setopRep(B_Map.get(arrayInput[0]));
      inst.setrsRep(B_Map.get(arrayInput[2]));
      inst.setrtRep(B_Map.get(arrayInput[1]));
      inst.setcstRep(myMap.get(arrayInput[3]).toString(2).padStart(16,"0"));
     myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))
     inst.setrsVal(myMap.get(arrayInput[2]));
     inst.setcstVal(myMap.get(arrayInput[3]));
     inst.setWBresult(myMap.get(arrayInput[1]));


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
      inst.setopRep(B_Map.get(arrayInput[0]));
      inst.setrsRep(B_Map.get(arrayInput[2]));
      inst.setrtRep(B_Map.get(arrayInput[1]));
      inst.setcstRep(myMap.get(arrayInput[3]).toString(2).padStart(16,"0"));
     myMap.set(arrayInput[1],  parseInt(BinaryRd,2).toString(10))
     inst.setrsVal(myMap.get(arrayInput[2]));
     inst.setcstVal(myMap.get(arrayInput[3]));
     inst.setWBresult(myMap.get(arrayInput[1]));


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
     inst.setopRep(B_Map.get(arrayInput[0]));
     inst.setrsRep(B_Map.get(arrayInput[2]));
     inst.setrtRep(B_Map.get(arrayInput[1]));
     inst.setcstRep(myMap.get(arrayInput[3]).toString(2).padStart(16,"0"));        
     myMap.set(arrayInput[1],value);
     inst.setrsVal(myMap.get(arrayInput[2]));
     inst.setcstVal(myMap.get(arrayInput[3]));
     inst.setWBresult(myMap.get(arrayInput[1]));


     document.getElementById("outputArea").value = stringOutput
     Inst_Map.set(1,Inst_Map.get(1)+1);
     draw();
  }
  // --------------------------------------------------------------------------------------
    //                                        beq instruction
    // --------------------------------------------------------------------------------------

  function beq_instruction(){
      IsInst = false;
    stringOutput ="I-Format"+ '\n'+ "rs:"+ arrayInput[1]+ " , "+"rt:"+arrayInput[2]+" , "+"constant:"+arrayInput[3]+'\n'+ B_Map.get(arrayInput[0])+ " " + B_Map.get(arrayInput[1]) +" "+ B_Map.get(arrayInput[2]) +" "+ myMap.get(arrayInput[3]).toString(2).padStart(16,"0");

      if (myMap.get(arrayInput[1]) == myMap.get(arrayInput[2])){
    Inst_Map.set(1,Inst_Map.get(1) + myMap.get(arrayInput[3]))}
    else{
        Inst_Map.set(1,Inst_Map.get(1)+1);   
    }
    var temp;
    if(myMap.get(arrayInput[1]) == myMap.get(arrayInput[2])){
        temp="1";
    }
    else{
        temp="0";
    }
    inst.setopRep(B_Map.get(arrayInput[0]));
    inst.setrsRep(B_Map.get(arrayInput[1]));
    inst.setrtRep(B_Map.get(arrayInput[2]));
    inst.setResultVal(temp);
    inst.setAfterShift((arrayInput[3]*4).toString(10));
    inst.setcstRep(myMap.get(arrayInput[3]).toString(2).padStart(16,"0"));
    inst.setrsVal(myMap.get(arrayInput[1]));
    inst.setrtVal(myMap.get(arrayInput[2]));
    document.getElementById("outputArea").value = stringOutput;
    Redraw();
      Color_reset();
      draw();
}


  // --------------------------------------------------------------------------------------
    //                                        jump instruction
    // --------------------------------------------------------------------------------------
    function jump_instruction(){
        stringOutput ="J-Format"+'\n'+ B_Map.get(arrayInput[0])+" "+ current_Inst.toString(2).padStart(26,"0");
        inst.setopRep(B_Map.get(arrayInput[0]));
        var temp = 0;
        var temp2 = arrayInput[1] + ":";
        while(temp <ArrayInput.length){
            //console.log("ali")
            if (ArrayInput[temp][0] == temp2){
                Inst_Map.set(1,temp);
                convert(temp);
            }
            temp ++;
        }
        document.getElementById("outputArea").value = stringOutput;
    Redraw();
      Color_reset();
      draw();
    }
    function choose_inst(){
        switch(myMap.get(arrayInput[0])){
            case "add": add_inst = add_instruction(); break;
            case "addi": addi_inst = addi_instruction(); break;
            case "sub": sub_inst = sub_instruction();break;
            case "lw" : lw_inst = lw_instruction();break;
            case "sw" : sw_isnt = sw_instruction();break;
            case "or": or_inst=or_instruction();break;
            case "and": and_inst=and_instruction();break;
            case "nor":nor_inst=nor_instruction();break;
            case "slt":slt_inst=slt_instruction(); break;
            case "sll":sll_inst=sll_instruction(); break;
            case "srl":srl_inst=srl_instruction(); break;
            case "slti":slti_inst=slti_instruction(); break;
            case "ori": ori_inst=ori_instruction();break;
            case "andi": andi_inst=andi_instruction();break;
            case "beq": beq_inst=beq_instruction();break;
            case "j": jump_inst=jump_instruction();break;

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

function ReStart(){
    inst.Start()
}
function NextStage(){
    inst.Next();
}
function PreviousStage(){
     inst.Previous();
}
function TheFull_Datapath(){
    inst.Full_Datapath();
}
function FirstStage(){
   inst.First();
}
function LastStage(){
  inst.Last();
}
  
