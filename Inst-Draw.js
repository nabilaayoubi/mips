function draw(){
  Control_(Color_Map.get("Control_"))
  RS1_(Color_Map.get("RS1_"));
  RS2_1(Color_Map.get("RS2_1"));
  RS2_2(Color_Map.get("RS2_2"));
  RD_(Color_Map.get("RD_"));
  Last16_(Color_Map.get("Last16_"));
  L16_(Color_Map.get("L16_"));
  RS1_RS2_RD(Color_Map.get("RS1_RS2_RD"));
  RS2_MUX(Color_Map.get("RS2_MUX"));
  MUXIF(Color_Map.get("MUXIF"));
  control(Color_Map.get("control"));
  signExtendLW_shift1(Color_Map.get("signExtendLW_shift1"));
  signExtendLW_shift2(Color_Map.get("signExtendLW_shift2"));
  signExtendLW(Color_Map.get("signExtendLW"));
  signExtendLW_MUX(Color_Map.get("signExtendLW_MUX"));
  ReadData1_(Color_Map.get("ReadData1_"));
  RegisterFile(Color_Map.get("RegisterFile"));
  Controll_MUXIF(Color_Map.get("Controll_MUXIF"));
  ReadData2_MUXID1(Color_Map.get("ReadData2_MUXID1"));
  ReadData2_MUXID2(Color_Map.get("ReadData2_MUXID2"));
  RegWrite(Color_Map.get("RegWrite")); 
  Last5_(Color_Map.get("Last5_"));
  ALUOp(Color_Map.get("ALUOp"));
  Memory(Color_Map.get("Memory"));
  ReadData_MUXMEM(Color_Map.get("ReadData_MUXMEM"));
  MUXMEM(Color_Map.get("MUXMEM"));
  MUXMEM_RegisterFile(Color_Map.get("MUXMEM_RegisterFile"));
  ALUControl(Color_Map.get("ALUControl"));
  MUXID(Color_Map.get("MUXID"));
  MUXID_ALUEX(Color_Map.get("MUXID_ALUEX"))
  ALUEX(Color_Map.get("ALUEX"));
  ALUEX_Memory(Color_Map.get("ALUEX_Memory"));
  MemWrite(Color_Map.get("MemWrite"));
  MemtoReg(Color_Map.get("MemtoReg"));
  ALUSrc(Color_Map.get("ALUSrc"));
  And(Color_Map.get("And"));
  Branch(Color_Map.get("Branch"));
  ALUEX_MUXMEM(Color_Map.get("ALUEX_MUXMEM"));
  WriteData_(Color_Map.get("WriteData_"));
  MemRead(Color_Map.get("MemRead"));
  BranchMUX_PC(Color_Map.get("BranchMUX_PC"));
  MEMIF(Color_Map.get("MEMIF"));
  Shift(Color_Map.get("Shift"));
  _BranchALU(Color_Map.get("_BranchALU"))
  BranchALU_BranchMUX(Color_Map.get("BranchALU_BranchMUX"));
  BranchALU(Color_Map.get("BranchALU"));
  BranchMUX(Color_Map.get("BranchMUX"));
  Add_BranchMUX1(Color_Map.get("Add_BranchMUX1"));
  Add_BranchMUX2(Color_Map.get("Add_BranchMUX2"));
  Default4(Color_Map.get("Default4"));
  Add(Color_Map.get("Add"));
  PC_Add(Color_Map.get("PC_Add"));
  PC_RegisterFile(Color_Map.get("PC_RegisterFile"));
  PC(Color_Map.get("PC"));
  Inst_memory_Arrow(Color_Map.get("Inst_memory_Arrow"));
  Ellipse_Branch(Color_Map.get("Ellipse_Branch"));
  Shift2_Result(Color_Map.get("Shift2_Result"));
  Branch_Mux(Color_Map.get("Branch_Mux"));
  Branch_MUX1_Result(Color_Map.get("Branch_MUX1_Result"));
  PC_Add_Result_Branch(Color_Map.get("PC_Add_Result_Branch"));
}
//Color_Map.set("RS2_MUX",1)

function Color_reset(){
  Color_Map.set("RS1_",0)
Color_Map.set("RS2_1",0)
Color_Map.set("RS2_2",0)
Color_Map.set("RD_",0)
Color_Map.set("RS2_MUX",0)
Color_Map.set("RS1_RS2_RD",0)
Color_Map.set("MEMIF",0)
Color_Map.set("PC_Add",0)
Color_Map.set("Default4",0)
Color_Map.set("Add_BranchMUX1",0)
Color_Map.set("Add_BranchMUX2",0)
Color_Map.set("BranchMUX",0)
Color_Map.set("BranchMUX_PC",0)
Color_Map.set("Control_",0)
Color_Map.set("Controll_MUXIF",0)
Color_Map.set("RegisterFile",0)
Color_Map.set("ReadData1_",0)
Color_Map.set("ReadData2_MUXID1",0)
Color_Map.set("ReadData2_MUXID2",0)
Color_Map.set("MUXID",0)
Color_Map.set("MUXIF",0)
Color_Map.set("ALUEX",0)
Color_Map.set("ALUEX_MUXMEM",0)
Color_Map.set("MUXMEM",0)
Color_Map.set("MUXMEM_RegisterFile",0)
Color_Map.set("control",0)
Color_Map.set("signExtendLW",0)
Color_Map.set("signExtendLW_shift1",0)
Color_Map.set("signExtendLW_shift2",0)
Color_Map.set("Last5_",0)
Color_Map.set("ALUOp",0)
Color_Map.set("Memory",0)
Color_Map.set("ReadData_MUXMEM",0)
Color_Map.set("MUXMEM",0)
Color_Map.set("MUXMEM_RegisterFile",0)
Color_Map.set("MUXID_ALUEX",0)
Color_Map.set("ALUEX_Memory",0)
Color_Map.set("MemWrite",0)
Color_Map.set("MemtoReg",0)
Color_Map.set("ALUSrc",0)
Color_Map.set("And",0)
Color_Map.set("Branch",0)
Color_Map.set("ALUEX_MUXMEM",0)
Color_Map.set("WriteData_",0)
Color_Map.set("MemRead",0)
Color_Map.set("BranchMUX_PC",0)
Color_Map.set("PC",0)
Color_Map.set("Shift",0)
Color_Map.set("BranchALU_BranchMUX",0)
Color_Map.set("BranchALU",0)
Color_Map.set("BranchMUX",0)
Color_Map.set("Add_BranchMUX1",0)
Color_Map.set("Add_BranchMUX2",0)
Color_Map.set("Default4",0)
Color_Map.set("Add",0)
Color_Map.set("PC_Add",0)
Color_Map.set("PC_RegisterFile",0)
Color_Map.set("RegWrite",0)
Color_Map.set("ALUControl",0)
Color_Map.set("signExtendLW_MUX",0)
Color_Map.set("Last16_",0)
Color_Map.set("L16_",0)
Color_Map.set("Branch_MUX1_Result",0)
Color_Map.set("Branch_Mux",0)
Color_Map.set("_BranchALU",0)
Color_Map.set("PC_Add_Result_Branch",0)
Color_Map.set("Shift2_Result",0)
Color_Map.set("Ellipse_Branch",0)
Color_Map.set("Inst_memory_Arrow",0)

Color_Map.set(0,0)
// draw();
}

function Color_Instruction_Fetsh_R(){
  Color_Map.set("control",1)
  Color_Map.set("PC",1)
  Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add",1)
  Color_Map.set("Default4",1)
  Color_Map.set("Add_BranchMUX1",1)
  Color_Map.set("Add_BranchMUX2",1)
  Color_Map.set("BranchMUX",1)
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Add",1)
  Color_Map.set("PC_RegisterFile",1)
  Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("Branch_Mux",1)
  
}
function Color_Instruction_Decode_R(){
  Color_Map.set("control",1)
  Color_Map.set("RS1_",1)
  Color_Map.set("RS2_1",1)
  Color_Map.set("RS2_2",1)
  Color_Map.set("RD_",1)
  Color_Map.set("RS1_RS2_RD",1)
  Color_Map.set("Control_",1)
  Color_Map.set("Controll_MUXIF",1)
  Color_Map.set("RegisterFile",1)
  Color_Map.set("MUXIF",1)
  Color_Map.set("Last5_",1)
  Color_Map.set("Last16_",1)
}
function Color_Execution_R(){
  Color_Map.set("control",1)
  Color_Map.set("ReadData1_",1)
  Color_Map.set("ReadData2_MUXID1",1)
  Color_Map.set("ReadData2_MUXID2",1)
  Color_Map.set("MUXID",1)
  Color_Map.set("ALUEX",1)
  Color_Map.set("MUXID_ALUEX",1)
  Color_Map.set("ALUControl",1)
  Color_Map.set("ALUOp",1)
  Color_Map.set("ALUSrc",1)
}
function Color_WriteBack_R(){
  Color_Map.set("control",1)
  Color_Map.set("ALUEX_MUXMEM",1)
  Color_Map.set("MUXMEM",1)
  Color_Map.set("MUXMEM_RegisterFile",1)
  Color_Map.set("MemtoReg",1)
  Color_Map.set("RegWrite",1)
}
function Color_Instruction_Fetsh_I(){
  Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add",1)
  Color_Map.set("Default4",1)
  Color_Map.set("Add_BranchMUX1",1)
  Color_Map.set("Add_BranchMUX2",1)
  Color_Map.set("BranchMUX",1)
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Add",1)
  Color_Map.set("PC",1)
  Color_Map.set("control",1)
  Color_Map.set("PC_RegisterFile",1)
  Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("Branch_Mux",1)
}
function Color_Instruction_Decode_I(){
  Color_Map.set("RS1_",1)
  Color_Map.set("RS2_1",1)
  Color_Map.set("RS2_MUX",1)
  Color_Map.set("RS1_RS2_RD",1)
  Color_Map.set("signExtendLW",1)
  Color_Map.set("RegisterFile",1)
  Color_Map.set("Control_",1)
  Color_Map.set("Controll_MUXIF",1)
  Color_Map.set("MUXIF",1)
  Color_Map.set("control",1)
  Color_Map.set("RegWrite",1)
  Color_Map.set("Last16_",1)
  Color_Map.set("L16_",1)
}
function Color_Execution_I(){
  Color_Map.set("signExtendLW_MUX",1)
  Color_Map.set("signExtendLW_shift1",1)
  Color_Map.set("ReadData1_",1)
  Color_Map.set("MUXID",1)
  Color_Map.set("ALUEX",1)
  Color_Map.set("control",1)
  Color_Map.set("MUXID_ALUEX",1)
  Color_Map.set("ALUControl",1)
  Color_Map.set("ALUOp",1)
  Color_Map.set("ALUSrc",1)
 
}
function Color_WriteBack_I(){
  Color_Map.set("ALUEX_MUXMEM",1)
  Color_Map.set("MUXMEM",1)
  Color_Map.set("MUXMEM_RegisterFile",1)
  Color_Map.set("control",1)
  Color_Map.set("MemtoReg",1)
  Color_Map.set("ALUEX_MUXMEM",1)
}
function Color_Instruction_Fetsh_lw(){
  Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add",1)
  Color_Map.set("Default4",1)
  Color_Map.set("Add_BranchMUX1",1)
  Color_Map.set("Add_BranchMUX2",1)
  Color_Map.set("BranchMUX",1)
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Add",1)
  Color_Map.set("PC",1)
  Color_Map.set("control",1)
  Color_Map.set("PC_RegisterFile",1)
  Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("Branch_Mux",1)
}
function Color_Instruction_Decode_lw(){
  Color_Map.set("RS1_",1)
  Color_Map.set("RS2_1",1)
  Color_Map.set("RS2_MUX",1)
  Color_Map.set("RS1_RS2_RD",1)
  Color_Map.set("signExtendLW",1)
  Color_Map.set("RegisterFile",1)
  Color_Map.set("Control_",1)
  Color_Map.set("Controll_MUXIF",1)
  Color_Map.set("MUXIF",1)
  Color_Map.set("control",1)
  Color_Map.set("RegWrite",1)
  Color_Map.set("Last16_",1)
  Color_Map.set("L16_",1)
}
function Color_Execution_lw(){
  Color_Map.set("signExtendLW_MUX",1)
  Color_Map.set("signExtendLW_shift1",1)
  Color_Map.set("ReadData1_",1)
  Color_Map.set("MUXID",1)
  Color_Map.set("ALUEX",1)
  Color_Map.set("control",1)
  Color_Map.set("MUXID_ALUEX",1)
  Color_Map.set("ALUControl",1)
  Color_Map.set("ALUOp",1)
  Color_Map.set("ALUSrc",1)
}
function Color_Memory_lw(){
  Color_Map.set("MemRead",1)
  Color_Map.set("Memory",1)
  Color_Map.set("ALUEX_Memory",1)
  Color_Map.set("control",1)

}
function Color_WriteBack_lw(){
  //Color_Map.set("ALUEX_MUXMEM",1)
  Color_Map.set("MUXMEM",1)
  Color_Map.set("MUXMEM_RegisterFile",1)
  Color_Map.set("control",1)
  Color_Map.set("MemtoReg",1)
  Color_Map.set("ReadData_MUXMEM",1)
  //Color_Map.set("ALUEX_MUXMEM",1)
}
function Color_Instruction_Fetsh_sw(){
  Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add",1)
  Color_Map.set("Default4",1)
  Color_Map.set("Add_BranchMUX1",1)
  Color_Map.set("Add_BranchMUX2",1)
  Color_Map.set("BranchMUX",1)
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Add",1)
  Color_Map.set("PC",1)
  Color_Map.set("control",1)
  Color_Map.set("PC_RegisterFile",1)
  Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("Branch_Mux",1)
}
function Color_Instruction_Decode_sw(){
  Color_Map.set("RS1_",1)
  Color_Map.set("RS2_1",1)
  Color_Map.set("RS2_2",1)
  //Color_Map.set("RS2_MUX",1)
  Color_Map.set("RS1_RS2_RD",1)
  Color_Map.set("signExtendLW",1)
  Color_Map.set("RegisterFile",1)
  Color_Map.set("Control_",1)
  //Color_Map.set("Controll_MUXIF",1)
  //Color_Map.set("MUXIF",1)
  Color_Map.set("control",1)
  Color_Map.set("Last16_",1)
  Color_Map.set("L16_",1)
}
function Color_Execution_sw(){
  Color_Map.set("signExtendLW_MUX",1)
  Color_Map.set("signExtendLW_shift1",1)
  Color_Map.set("ReadData1_",1)
  Color_Map.set("MUXID",1)
  Color_Map.set("ALUEX",1)
  Color_Map.set("control",1)
  Color_Map.set("MUXID_ALUEX",1)
  Color_Map.set("ALUControl",1)
  Color_Map.set("ALUOp",1)
  Color_Map.set("ALUSrc",1)
}
function Color_Memory_sw(){
  Color_Map.set("Memory",1)
  Color_Map.set("ALUEX_Memory",1)
  Color_Map.set("ReadData2_MUXID1",1)
  Color_Map.set("WriteData_",1)
  Color_Map.set("MemWrite",1)
  Color_Map.set("control",1)
}
function Color_Instruction_Fetch_J(){
 // Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add",1)
  Color_Map.set("Default4",1)
  Color_Map.set("Add_BranchMUX1",1)
  // Color_Map.set("BranchMUX",1)
  // Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Add",1)
  Color_Map.set("PC",1)
  Color_Map.set("control",1)
  Color_Map.set("PC_RegisterFile",1)
  // Color_Map.set("Branch_MUX1_Result",1)
  // Color_Map.set("Branch_Mux",1)
  Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add_Result_Branch",1)

}
function Color_Instruction_Decode_J(){
  //Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("control",1)
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Branch_Mux",1)
  Color_Map.set("Control_",1)
  Color_Map.set("RS1_RS2_RD",1)
  Color_Map.set("Shift2_Result",1)
  Color_Map.set("Ellipse_Branch",1)
  Color_Map.set("Inst_memory_Arrow",1)
  Color_Map.set("PC_Add_Result_Branch",1)
}
function Color_Instruction_Fetsh_Beq(){
  Color_Map.set("MEMIF",1)
  Color_Map.set("PC_Add",1)
  Color_Map.set("Default4",1)
  Color_Map.set("Add_BranchMUX1",1)
  Color_Map.set("Add_BranchMUX2",1)
  Color_Map.set("BranchMUX",1)
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("Add",1)
  Color_Map.set("PC",1)
  Color_Map.set("control",1)
  Color_Map.set("PC_RegisterFile",1)
  Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("Branch_Mux",1)
}
function Color_Instruction_Decode_Beq(){
  Color_Map.set("RegisterFile",1)
  Color_Map.set("Control_",1)
  Color_Map.set("control",1)
  Color_Map.set("Last16_",1)
  Color_Map.set("L16_",1)
  Color_Map.set("signExtendLW",1)
  Color_Map.set("RS1_",1)
  Color_Map.set("RS2_1",1)
  Color_Map.set("RS2_2",1)
  Color_Map.set("RS1_RS2_RD",1)

}
function Color_Execution_Beq(){
  Color_Map.set("BranchMUX_PC",1)
  Color_Map.set("signExtendLW_shift1",1)
  Color_Map.set("signExtendLW_shift2",1)
  Color_Map.set("Shift",1)
  Color_Map.set("BranchALU",1)
  Color_Map.set("BranchALU_BranchMUX",1)
  Color_Map.set("_BranchALU",1)
  Color_Map.set("ReadData1_",1)
  Color_Map.set("ReadData2_MUXID1",1)
  Color_Map.set("ReadData2_MUXID2",1)
  Color_Map.set("MUXID",1)
  Color_Map.set("ALUEX",1)
  Color_Map.set("MUXID_ALUEX",1)
  Color_Map.set("ALUControl",1)
  Color_Map.set("ALUOp",1)
  Color_Map.set("ALUSrc",1)
  Color_Map.set("And",1)
  Color_Map.set("Branch",1)
  Color_Map.set("BranchMUX",1)
  Color_Map.set("Branch_MUX1_Result",1)
  Color_Map.set("Branch_Mux",1)
}
