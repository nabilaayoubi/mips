class InstructionDraw_RFormat {
    constructor() {
      this.done = false;
      this.stageNumber=0;
      this.opRep="";
      this.rsRep="";
      this.rtRep="";
      this.rdRep="";
      this.functRep="";
      this.rsVal="";
      this.rtVal="";
      this.WBresult="";
      this.old_value = document.getElementById(arrayInput[1]).innerHTML;
      }
    getstageNumber(){
      return this.stageNumber;
    }
    setopRep(x){
      this.opRep=x;
    }
    setrsRep(x){
     this.rsRep=x;
    }
    setrtRep(x){
      this.rtRep=x;
    }
    setrdRep(x){
      this.rdRep=x;
    }
    setfunctRep(x){
      this.functRep=x;
    }
    setrsVal(x){
      this.rsVal=x;
    }
    setrtVal(x){
      this.rtVal=x;
    }
    setWBresult(x){
      this.WBresult=x;
    }
    getopRep(){
      return this.opRep;
    }
    getrsRep(){
      return this.rsRep;
     }
     getrtRep(){
       return this.rtRep;
     }
     getrdRep(){
      return this.rdRep;
     }
     getfunctRep(){
       return this.functRep;
     }
     getrsVal(){
       return this.rsVal;
     }
     getrtVal(){
       return this.rtVal;
     }
     getWBresult(){
       return this.WBresult ;
     }
    Next(){
      if(this.stageNumber==0){
        this.stageNumber+=1;
        Redraw();
        Color_Instruction_Fetsh_R();
        InstructionFetch();
        draw();
        Color_reset();
      }
      else if(this.stageNumber==1){
        this.stageNumber+=1;
        Redraw();
        InstructionDecode();
        Color_Instruction_Decode_R();
        drawOpRep(this.getopRep());
        drawRsRep(this.getrsRep());
        drawRtRep(this.getrtRep());
        drawRdRep(this.getrdRep());
        drawfunctRep(this.getfunctRep());
        draw();
        Color_reset();
      }
      else if(this.stageNumber==2){
        this.stageNumber+=1;
        Redraw();
        ExecutionD();
        Color_Execution_R();
        drawRsVal(this.getrsVal());
        drawRtVal(this.getrtVal());
        draw();
        Color_reset();
      }
      else if(this.stageNumber==3){
      Redraw();
      WriteBackD();
      Color_WriteBack_R();
      drawWBresult1(this.getWBresult());
      drawWBresult2(this.getWBresult());
      draw();
      Color_reset();
      document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
      this.done = true;
      }
    }
    Previous(){
      if(this.stageNumber==3){
        this.stageNumber-=1;
        Redraw();
        ExecutionD();
        drawRsVal(this.getrsVal());
        drawRtVal(this.getrtVal());
        Color_Execution_R();
        draw();
        Color_reset();
        document.getElementById(arrayInput[1]).innerHTML = this.old_value;
        this.done = false;
      }
      else if(this.stageNumber==2){
        this.stageNumber-=1;
        Redraw();
        InstructionDecode();
        drawOpRep(this.getopRep());
        drawRsRep(this.getrsRep());
        drawRtRep(this.getrtRep());
        drawRdRep(this.getrdRep());
        drawfunctRep(this.getfunctRep());
        Color_Instruction_Decode_R();
        draw();
        Color_reset();
      }
      else if(this.stageNumber==1){
        this.stageNumber-=1;
        Redraw();
        InstructionFetch();
        Color_Instruction_Fetsh_R();
        draw();
        Color_reset();}
    }
    Full_Datapath(){
      Redraw();
      InstructionFetch();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawRdRep(this.getrdRep());
      drawfunctRep(this.getfunctRep());
      InstructionDecode();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getrtVal());
      ExecutionD();
      WriteBackD();
      Color_Instruction_Fetsh_R();
      Color_Instruction_Decode_R();
      Color_Execution_R();
      drawWBresult1(this.getWBresult());
      drawWBresult2(this.getWBresult());
      Color_WriteBack_R();
      draw();
      Color_reset();
      document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
      this.done = true;
    }
    First(){
      this.stageNumber=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_R();
      draw();
      Color_reset();
      document.getElementById(arrayInput[1]).innerHTML = this.old_value;
      this.done =false;
    }
    Last(){
    this.stageNumber=3;
    Redraw();
    WriteBackD();
    drawWBresult1(this.getWBresult());
    drawWBresult2(this.getWBresult());
    Color_WriteBack_R();
    draw();
    Color_reset();
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
    this.done = true;
    }
    Start(){
      this.stageNumber=0;
    }
    to_table(){
      if (this.done == false){
      document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])}
    }
}
class InstructionDraw_IFormat {
  constructor() {
    this.done = false;
    this.stageNumber=0;
    this.opRep="";
    this.rsRep="";
    this.rtRep="";
    this.cstRep="";
    this.rsVal="";
    this.cstVal="";
    this.WBresult="";
    this.old_value = document.getElementById(arrayInput[1]).innerHTML;
  }
  getstageNumber(){
    return this.stageNumber;
  }
  setopRep(x){
    this.opRep=x;
  }
  setrsRep(x){
   this.rsRep=x;
  }
  setrtRep(x){
    this.rtRep=x;
  }
  setrsVal(x){
    this.rsVal=x;
  }
  setcstVal(x){
    this.cstVal=x;
  }
  setWBresult(x){
    this.WBresult=x;
  }
  setcstRep(x){
    this.cstRep=x;
  }
  getopRep(){
    return this.opRep;
  }
  getrsRep(){
    return this.rsRep;
   }
   getrtRep(){
     return this.rtRep;
   }
   getcstRep(){
     return this.cstRep;
   }
   getrsVal(){
     return this.rsVal;
   }
   getcstVal(){
     return this.cstVal;
   }
   getWBresult(){
     return this.WBresult ;
   }
  Next(){
    if(this.stageNumber==0){
      this.stageNumber+=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_I();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber+=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_I();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==2){
      this.stageNumber+=1;
      Redraw();
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      Color_Execution_I();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==3){
    Redraw();
    WriteBackD();
    drawWBresult1(this.getWBresult());
    drawWBresult2(this.getWBresult());
    Color_WriteBack_I();
    draw();
    Color_reset();
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
    this.done = true;
    }
  }
  Previous(){
    if(this.stageNumber==3){
      this.stageNumber-=1;
      Redraw();
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      Color_Execution_I();
      draw();
      Color_reset();
      document.getElementById(arrayInput[1]).innerHTML = this.old_value;
      this.done = false;
    }
    else if(this.stageNumber==2){
      this.stageNumber-=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_I();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber-=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_I();
      draw();
      Color_reset();
  }
  }
  Full_Datapath(){
    Redraw();
      InstructionFetch();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      WriteBackD();
      drawWBresult1(this.getWBresult());
      drawWBresult2(this.getWBresult());
      Color_Instruction_Fetsh_I();
      Color_Instruction_Decode_I();
      Color_Execution_I();
      Color_WriteBack_I();
      draw();
      Color_reset()
      document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
      this.done = true;
  }
  First(){
    this.stageNumber=1;
    Redraw();
    InstructionFetch();
    Color_Instruction_Fetsh_I();
    draw();
    Color_reset();
    document.getElementById(arrayInput[1]).innerHTML = this.old_value;
  }
  Last(){
    this.stageNumber=3;
    Redraw();
    WriteBackD();
    drawWBresult1(this.getWBresult());
    drawWBresult2(this.getWBresult());
    Color_WriteBack_I();
    draw();
    Color_reset();
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
    this.done = true;
  }
  Start(){
    this.stageNumber=0;
  }
  to_table(){
    if(this.done == false){
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])}
  }
}
class InstructionDraw_LW {
  constructor(){
    this.done = false;
    this.stageNumber=0;
    this.opRep="";
    this.rsRep="";
    this.rtRep="";
    this.cstRep="";
    this.rsVal="";
    this.cstVal="";
    this.WBresult="";
    this.old_value = document.getElementById(arrayInput[1]).innerHTML;
  }
  getstageNumber(){
    return this.stageNumber;
  }
  setopRep(x){
    this.opRep=x;
  }
  setrsRep(x){
   this.rsRep=x;
  }
  setrtRep(x){
    this.rtRep=x;
  }
  setrsVal(x){
    this.rsVal=x;
  }
  setcstVal(x){
    this.cstVal=x;
  }
  setWBresult(x){
    this.WBresult=x;
  }
  setcstRep(x){
    this.cstRep=x;
  }
  getopRep(){
    return this.opRep;
  }
  getrsRep(){
    return this.rsRep;
  }
  getrtRep(){
    return this.rtRep;
  }
  getcstRep(){
    return this.cstRep;
  }
  getrsVal(){
    return this.rsVal;
  }
   getcstVal(){
    return this.cstVal;
  }
  getWBresult(){
    return this.WBresult ;
  }
  Next(){
    if(this.stageNumber==0){
      this.stageNumber+=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_lw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber+=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_lw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==2){
      this.stageNumber+=1;
      Redraw();
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      Color_Execution_lw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==3){
      this.stageNumber +=1;
    Redraw();
    MemoryD();
    Color_Memory_lw();
    draw();
    Color_reset();
    }
    else if(this.stageNumber==4){
      Redraw();
      WriteBackD();
      drawWBresult2(this.getWBresult());
      drawWBresult3(this.getWBresult());
      Color_WriteBack_lw();
      draw();
      Color_reset();
      document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])
      this.done = true;
    }
  }
  Previous(){
    if(this.stageNumber==4){
      this.stageNumber-=1;
      Redraw();
      MemoryD();
      Color_Memory_lw();
      draw();
      Color_reset();
      document.getElementById(arrayInput[1]).innerHTML = this.old_value;
      this.done = false;
    }
    else if(this.stageNumber==3){
      this.stageNumber-=1;
      Redraw();
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      Color_Execution_lw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==2){
      this.stageNumber-=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_lw();
      draw();
      Color_reset();
  }
  else if(this.stageNumber==1){
      this.stageNumber-=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_lw();
      draw();
      Color_reset();
  }
  }
  Full_Datapath(){
    Redraw();
    InstructionFetch();
    InstructionDecode();
    drawOpRep(this.getopRep());
    drawRsRep(this.getrsRep());
    drawRtRep(this.getrtRep());
    drawCstRep(this.getcstRep());
    ExecutionD();
    drawRsVal(this.getrsVal());
    drawRtVal(this.getcstVal());
    MemoryD();
    WriteBackD();
    drawWBresult2(this.getWBresult());
    drawWBresult3(this.getWBresult());
    Color_Instruction_Fetsh_lw();
    Color_Instruction_Decode_lw();
    Color_Execution_lw();
    Color_Memory_lw();
    Color_WriteBack_lw();
    draw();
    Color_reset()
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
    this.done = true;
  }
  First(){
    this.stageNumber=1;
    Redraw();
    InstructionFetch();
    Color_Instruction_Fetsh_lw();
    draw();
    Color_reset();
    document.getElementById(arrayInput[1]).innerHTML = this.old_value;
    this.done = false;
  }
  Last(){
    this.stageNumber=4;
    Redraw();
    WriteBackD();
    drawWBresult2(this.getWBresult());
    drawWBresult3(this.getWBresult());
    Color_WriteBack_lw();
    draw();
    Color_reset();
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1]);
    this.done = true;
  }
  Start(){
    this.stageNumber=0;
  }
  to_table(){
    if(this.done == false){
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])}
  }
}
class InstructionDraw_SW {
  constructor(){
    this.done = false;
    this.stageNumber=0;
    this.opRep="";
    this.rsRep="";
    this.rtRep="";
    this.cstRep="";
    this.rsVal="";
    this.cstVal="";
    this.rtVal="";
    this.old_value = document.getElementById(arrayInput[3]).innerHTML;
  }
  getstageNumber(){
    return this.stageNumber;
  }
  setopRep(x){
    this.opRep=x;
  }
  setrsRep(x){
   this.rsRep=x;
  }
  setrtRep(x){
    this.rtRep=x;
  }
  setrsVal(x){
    this.rsVal=x;
  }
  setcstVal(x){
    this.cstVal=x;
  }
  setrtVal(x){
    this.rtVal=x;
  }
  setcstRep(x){
    this.cstRep=x;
  }
  getopRep(){
    return this.opRep;
  }
  getrsRep(){
    return this.rsRep;
  }
  getrtRep(){
    return this.rtRep;
  }
  getcstRep(){
    return this.cstRep;
  }
  getrsVal(){
    return this.rsVal;
  }
   getcstVal(){
    return this.cstVal;
  }
  getrtVal(){
    return this.rtVal;
  }
  Next(){
    if(this.stageNumber==0){
      this.stageNumber+=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_sw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber+=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_sw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==2){
      this.stageNumber+=1;
      Redraw();
      ExecutionD();
      Color_Execution_sw();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      //drawRtVal1(this.getrtVal());
      draw();
      Color_reset();
    }
    else if(this.stageNumber==3){
    Redraw();
    MemoryD();
    drawRtVal1(this.getrtVal());
    Color_Memory_sw();
    draw();
    Color_reset();
    document.getElementById(arrayInput[3]).innerHTML ="0x" +
    (LS_Map.get(arrayInput[3])).toString().padStart(8,"0"); 
    this.done = true;
    }
  }
  Previous(){
    if(this.stageNumber==3){
      this.stageNumber-=1;
      Redraw();
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getcstVal());
      //drawRtVal1(this.getrtVal());
      Color_Execution_sw();
      draw();
      Color_reset();
      document.getElementById(arrayInput[3]).innerHTML = this.old_value;
      this.done = false;
    }
    else if(this.stageNumber==2){
      this.stageNumber-=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_sw();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber-=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_sw();
      draw();
      Color_reset();
  }
  }
  First(){
    Redraw();
    this.stageNumber=1;
    InstructionFetch();
    Color_Instruction_Fetsh_sw();
    draw();
    Color_reset();
    document.getElementById(arrayInput[3]).innerHTML = this.old_value;
    this.done = false;
  }
  Last(){
    this.stageNumber=3;
    Redraw();
    MemoryD();
    Color_Memory_sw();
    drawRtVal1(this.getrtVal());
    draw();
    Color_reset();
    document.getElementById(arrayInput[3]).innerHTML ="0x" +
    (LS_Map.get(arrayInput[3])).toString().padStart(8,"0"); 
    this.done = true;
  }
  Full_Datapath(){
    Redraw();
    InstructionFetch();
    InstructionDecode();
    drawOpRep(this.getopRep());
    drawRsRep(this.getrsRep());
    drawRtRep(this.getrtRep());
    drawCstRep(this.getcstRep());
    ExecutionD();
    drawRsVal(this.getrsVal());
    drawRtVal(this.getcstVal());
    drawRtVal1(this.getrtVal());
    MemoryD();
    Color_Instruction_Fetsh_sw();
    Color_Instruction_Decode_sw();
    Color_Execution_sw();
    Color_Memory_sw();
    draw();
    Color_reset()
    document.getElementById(arrayInput[3]).innerHTML ="0x" +
    (LS_Map.get(arrayInput[3])).toString().padStart(8,"0"); 
    this.done = true;
  }
  Start(){
    this.stageNumber=0;
  }
  to_table(){
    if(this.done == false){
    document.getElementById(arrayInput[3]).innerHTML ="0x" +
    (LS_Map.get(arrayInput[3])).toString().padStart(8,"0");   }
  }
}
class InstructionDraw_J{
  constructor(){
    this.stageNumber=0;
    this.opRep="";
      }
  setopRep(x){
    this.opRep=x;
  }
  getopRep(){
     return this.opRep;
  }
      Next(){
        if(this.stageNumber==0){
          this.stageNumber+=1;
          Redraw();
          InstructionFetch();
          Color_Instruction_Fetch_J();
          draw();
          Color_reset();
        }
        else if(this.stageNumber==1){
          Redraw();
          InstructionDecode();
          Color_Instruction_Decode_J();
          drawOpRep(this.getopRep());
          draw();
          Color_reset();
        }
      }
      Previous(){
        if(this.stageNumber==1){
          this.stageNumber-=1;
          Redraw();
          InstructionFetch();
          Color_Instruction_Fetch_J();
          draw();
          Color_reset();
        }
      }
      Full_Datapath(){
        Redraw();
          InstructionFetch();
          Color_Instruction_Fetch_J();
          InstructionDecode();
          drawOpRep(this.getopRep());
          Color_Instruction_Decode_J();
          draw();
          Color_reset();
      }
      First(){
        this.stageNumber=0;
        Redraw();
        InstructionFetch();
        Color_Instruction_Fetch_J();
        draw();
        Color_reset();
      }
      Last(){
        this.stageNumber=2;
        Redraw();
          InstructionDecode();
          drawOpRep(this.getopRep());
          Color_Instruction_Decode_J();
          draw();
          Color_reset();
      }
}
class InstructionDraw_Beq{
  constructor(){
    this.stageNumber=0;
    this.opRep="";
    this.rsRep="";
    this.rtRep="";
    this.cstRep="";
    this.rsVal="";
    this.rtVal="";
    this.ResultVal="";
    this.AfterShift="";
  }
  getstageNumber(){
    return this.stageNumber;
  }
  setopRep(x){
    this.opRep=x;
  }
  setResultVal(x){
    this.ResultVal=x;
  }
  setAfterShift(x){
    this.AfterShift=x;
  }
  setrsRep(x){
   this.rsRep=x;
  }
  setrtRep(x){
    this.rtRep=x;
  }
  setrsVal(x){
    this.rsVal=x;
  }
  setrtVal(x){
    this.rtVal=x;
  }
  setcstRep(x){
    this.cstRep=x;
  }
  getopRep(){
    return this.opRep;
  }
  getrsRep(){
    return this.rsRep;
  }
  getrtRep(){
    return this.rtRep;
  }
  getcstRep(){
    return this.cstRep;
  }
  getrsVal(){
    return this.rsVal;
  }
  getrtVal(){
    return this.rtVal;
  }
  getResultVal(){
    return this.ResultVal;
  }
  getAfterShift(){
    return this.AfterShift;
  }
  Next(){
    if(this.stageNumber==0){
      this.stageNumber+=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_Beq();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber+=1;
      Redraw();
      InstructionDecode();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      Color_Instruction_Decode_Beq();
      draw();
      Color_reset();
    }
    else if(this.stageNumber==2){
      Redraw();
      ExecutionD();
      drawRsVal(this.getrsVal());
      drawRtVal(this.getrtVal());
      drawResultVal(this.getResultVal());
      drawAfterShift(this.getAfterShift());
      Color_Execution_Beq();
      draw();
      Color_reset();
    }
  }
  Previous(){
    if(this.stageNumber==2){
      this.stageNumber-=1;
      Redraw();
      InstructionDecode();
      Color_Instruction_Decode_Beq();
      drawOpRep(this.getopRep());
      drawRsRep(this.getrsRep());
      drawRtRep(this.getrtRep());
      drawCstRep(this.getcstRep());
      draw();
      Color_reset();
    }
    else if(this.stageNumber==1){
      this.stageNumber-=1;
      Redraw();
      InstructionFetch();
      Color_Instruction_Fetsh_Beq();
      draw();
      Color_reset();
    }
}
First(){
  Redraw();
    this.stageNumber=0;
    InstructionFetch();
    Color_Instruction_Fetsh_Beq();
    draw();
    Color_reset();
}
Last(){
  this.stageNumber=2;
    Redraw();
    ExecutionD();
    drawRsVal(this.getrsVal());
    drawRtVal1(this.getrtVal());
    drawResultVal(this.getResultVal());
    drawAfterShift(this.getAfterShift());
    Color_Execution_Beq();
    draw();
    Color_reset();
}
Full_Datapath(){
  Redraw();
  InstructionFetch();
  Color_Instruction_Fetsh_Beq();
  InstructionDecode();
  drawOpRep(this.getopRep());
  drawRsRep(this.getrsRep());
  drawRtRep(this.getrtRep());
  drawCstRep(this.getcstRep());
  drawResultVal(this.getResultVal());
  drawAfterShift(this.getAfterShift());
  Color_Instruction_Decode_Beq();
  drawRsVal(this.getrsVal());
  drawRtVal(this.getrtVal());
  ExecutionD();
  Color_Execution_Beq();
  draw();
  Color_reset();
}
}
