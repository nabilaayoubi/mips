let myMap = new Map();
myMap.set("add","add")
myMap.set("addi","addi")
myMap.set("sub","sub")
myMap.set("lw","lw")
myMap.set("sw" ,"sw")
myMap.set("or","or")
myMap.set("and","and")
myMap.set("nor","nor")
myMap.set("slt","slt")
myMap.set("sll","sll")
myMap.set("srl","srl")
myMap.set("andi", "andi")
myMap.set("ori", "ori")
myMap.set("slti", "slti")

myMap.set("$s0",parseInt(document.getElementById("$s0").innerHTML))
myMap.set("$s1",parseInt(document.getElementById("$s1").innerHTML))
myMap.set("$s2",parseInt(document.getElementById("$s2").innerHTML))
myMap.set("$s3",parseInt(document.getElementById("$s3").innerHTML))
myMap.set("$s4",parseInt(document.getElementById("$s4").innerHTML))
myMap.set("$s5",parseInt(document.getElementById("$s5").innerHTML))
myMap.set("$s6",parseInt(document.getElementById("$s6").innerHTML))
myMap.set("$s7",parseInt(document.getElementById("$s7").innerHTML))


myMap.set("$t0",parseInt(document.getElementById("$t0").innerHTML))
myMap.set("$t1",parseInt(document.getElementById("$t1").innerHTML))
myMap.set("$t2",parseInt(document.getElementById("$t2").innerHTML))
myMap.set("$t3",parseInt(document.getElementById("$t3").innerHTML))
myMap.set("$t4",parseInt(document.getElementById("$t4").innerHTML))
myMap.set("$t5",parseInt(document.getElementById("$t5").innerHTML))
myMap.set("$t6",parseInt(document.getElementById("$t6").innerHTML))
myMap.set("$t7",parseInt(document.getElementById("$t7").innerHTML))
myMap.set("$t8",parseInt(document.getElementById("$t8").innerHTML))
myMap.set("$t9",parseInt(document.getElementById("$t9").innerHTML))


myMap.set("$a0",parseInt(document.getElementById("$a0").innerHTML))
myMap.set("$a1",parseInt(document.getElementById("$a1").innerHTML))
myMap.set("$a2",parseInt(document.getElementById("$a2").innerHTML))
myMap.set("$a3",parseInt(document.getElementById("$a3").innerHTML))


myMap.set("$v0",parseInt(document.getElementById("$v0").innerHTML))
myMap.set("$v1",parseInt(document.getElementById("$v1").innerHTML))


for(var j=0;j<2001;j++){
    myMap.set(j.toString(),j);
}

let B_Map = new Map();
B_Map.set("add","10000")
B_Map.set("addi","01000")
B_Map.set("sub","10010")
B_Map.set("lw","100011")
B_Map.set("sw","101011")
B_Map.set("or","100101")
B_Map.set("and","100100")
B_Map.set("nor", "100111")
B_Map.set("slt","101010")
B_Map.set("sll","00000")
B_Map.set("srl","00010")
B_Map.set("andi", "001100")
B_Map.set("ori", "001101")
B_Map.set("slti", "001010")


B_Map.set("$s0","10000")
B_Map.set("$s1","10001")
B_Map.set("$s2","10010")
B_Map.set("$s3","10011")
B_Map.set("$s4","10100")
B_Map.set("$s5","10101")
B_Map.set("$s6","10110")
B_Map.set("$s7","10111")


B_Map.set("$t0","01000")
B_Map.set("$t1","01001")
B_Map.set("$t2","01010")
B_Map.set("$t3","01011")
B_Map.set("$t4","01100")
B_Map.set("$t5","01101")
B_Map.set("$t6","01110")
B_Map.set("$t7","01111")
B_Map.set("$t8","11000")
B_Map.set("$t9","11001")


B_Map.set("$a0","00100")
B_Map.set("$a1","00101")
B_Map.set("$a2","00110")
B_Map.set("$a3","00111")


B_Map.set("$v0","00010")
B_Map.set("$v1","00011")


let Inst_Map = new Map();
Inst_Map.set(1,0)
Inst_Map.set("Stage",0)

var LS_Map = new Map();
LS_Map.set("$a0",0);
LS_Map.set("$a1",0);
LS_Map.set("$a2",0);
LS_Map.set("$a3",0);

var LV_Map = new Map();
var a0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var a1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var a2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var a3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];




// let Color_Map = new Map();
Color_Map.set("RS1_",0)
Color_Map.set("RS2_1",0)
Color_Map.set("RS2_2",0)
Color_Map.set("RD_",0)
Color_Map.set("RS2_MUX",0)
Color_Map.set("RS1_RS2_RD",0)
Color_Map.set("MEMIF",0)
Color_Map.set("PC_Add",0)
Color_Map.set("Default4",0)
Color_Map.set("Add_BranchMUX",0)
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
Color_Map.set("Add_BranchMUX",0)
Color_Map.set("Default4",0)
Color_Map.set("Add",0)
Color_Map.set("PC_Add",0)
Color_Map.set("PC_RegisterFile",0)
Color_Map.set("RegWrite",0)
Color_Map.set("Last16_",0)
Color_Map.set("L16_",0)
Color_Map.set("Inst_memory_Arrow",0)
Color_Map.set("Ellipse_Branch",0)
Color_Map.set("Shift2_Result",0)
Color_Map.set("Branch_Mux",0)
Color_Map.set("Branch_MUX1_Result",0)
Color_Map.set("PC_Add_Result_Branch",0)
Color_Map.set(0,0)

