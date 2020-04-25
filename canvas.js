var canvas = document.querySelector('canvas')

canvas.width = 1200
canvas.height = 800

let Color_Map = new Map();
var c = canvas.getContext('2d')

function Dot(x,y){
    this.x = x;
    this.y = y;
    c.beginPath()
    c.arc(this.x,this.y,3,Math.PI*2,false)
    c.fill();
}
function Arrow(x,y){
    this.x = x;
    this.y = y;
    
    c.beginPath()
    c.moveTo(this.x,this.y)
    c.lineTo(this.x, this.y-10)
    c.lineTo(this.x+7, this.y-5)
    c.lineTo(this.x, this.y)
    c.fill()
}
function Control_(i){
    //instruction 31-26
    Color_end()
    Color(i)
    c.font = "20px Arial"
    c.fillText("Instruction [31-26]",238,268,120)
    c.beginPath()
    c.moveTo(355,278);  
    c.lineTo(234,278);
    c.lineTo(234,396);
    c.stroke();
    var a=new Arrow(355,283);
    Color_end()
}
// Control_(Color_Map.get(0));

function RS1_(i){
    //instruction 25-21
    c.font = "20px Arial"
    Color(i)
    c.fillText("Instruction [25-21]",238,387,120)
    c.beginPath()
    c.moveTo(234,396);  
    c.lineTo(395,396);
    c.stroke();
    var dot = new Dot(234,397)
    var a=new Arrow(393,401);
    Color_end();
}
// RS1_(Color_Map.get(0));

function RS2_1(i){
//instruction 20-16
Color(i);
c.font = "20px Arial"
c.fillText("Instruction [20-16]",238,427,120)
c.beginPath()
    c.moveTo(233,433);  
    c.lineTo(330,433);
    c.stroke();
    var dot = new Dot(233,433) 
    Color_end();
}
function RS2_2(i){
    //instruction 20-16
    Color(i);
    c.beginPath()
        c.moveTo(330,433);  
        c.lineTo(394,433);
        c.stroke();
        var a=new Arrow(394,437);
        Color_end();
    }
// RS2_(Color_Map.get(0));

function RD_(i){
//instruction 15-11
Color(i);
c.font = "17px Arial"
c.fillText("Instruction [15-11]",238,505,120)
    c.beginPath()
    c.moveTo(234,515);  
    c.lineTo(350,515);
    c.stroke();
    var dot = new Dot(234,515)
    var a=new Arrow(350,520);
    Color_end();
}
// RD_(Color_Map.get(0));

function Last16_(i){
    //instruction 15-0
    Color(i);
    c.font = "20px Arial"
    c.fillText("Instruction [15-0]",238,612,120)
    c.beginPath()
    c.moveTo(234,514);
    c.lineTo(234,622);
    c.lineTo(408,622);
    c.stroke();
    var dot = new Dot(233,622)
    Color_end()

}
// /16
function L16_(i){
    Color(i);
    c.fillText("16",427,606,120);
    c.beginPath();
    c.moveTo(408,622);
    c.lineTo(445,622);
    c.moveTo(423,616);
    c.lineTo(435,628);
    c.stroke();
    var a=new Arrow(445,627);
    Color_end()
}
// Last16_(Color_Map.get(0));

function RS1_RS2_RD(i){
    //line combine instrctions in ID
    c.beginPath();
    Color(i);
    c.moveTo(234,396);
    c.lineTo(234,515);
    // c.lineTo(234,622);
    c.stroke();
    Color_end();
}
// RS1_RS2_RD(Color_Map.get(0));

function RS2_MUX(i){
    //from instruction 20-16 to mux in IF
    c.beginPath();
    Color(i);
    c.moveTo(330,435);
    c.lineTo(330,466);
    c.lineTo(350,465);
    c.stroke();
    var dot = new Dot(330,434)
    var a=new Arrow(350,470);
    Color_end();
}
// RD_MUX(Color_Map.get(0));

function MUXIF(i){
    //mux in IF
    c.beginPath();
    Color(i);
    c.arc(373,464,14,Math.PI,false)
    c.lineTo(387,520)
    c.moveTo(359,464)
    c.lineTo(359,518)
    c.arc(373,517,14,Math.PI,Math.PI*2,true)
    c.font = "18px Arial";
    c.fillText("0",368,484-14,10)
    c.fillText("M",370,501-14,10)
    c.fillText("u",370,514-14,10)
    c.fillText("x",370,529-14,10)
    c.fillText("1",368,543-14,10)
    
    
    c.moveTo(387,489);
    c.lineTo(396,489);
    c.stroke();
    var a=new Arrow(396,493);
    Color_end();
}
// MUXIF(Color_Map.get(0));

function control(i){
    Color(i);
    c.font = "18px Arial"
    c.fillText("Control",365,285,60)
    c.moveTo(427,277)
    c.ellipse(396,285,33,78,0,Math.PI*2,false);
    c.stroke();
    Color_end()
}
// control(Color_Map.get(0));

function signExtendLW(i){
    Color(i);
    c.beginPath();
    c.moveTo(513,622);
    c.ellipse(484,622,29,48,0,Math.PI*2,false)
    c.font = "15px Arial"
    c.fillText("Sign-",467,617)
    c.fillText("extend",463,637)
    c.stroke();
    Color_end();
}
// signExtendLW(Color_Map.get(0));

function signExtendLW_shift1(i){
    //line from sign extend to shift
    Color(i);
    c.beginPath();
    c.moveTo(515,622)
    c.lineTo(568,622)
    c.lineTo(568,537)
    c.moveTo(530,615)
    c.lineTo(541,627)
    c.font = "20px Arial"
    c.fillText("32",532,608,120)
    c.stroke()
    Color_end();
}
function signExtendLW_shift2(i){
    //line from sign extend to shift
    Color(i);
    c.beginPath();
    c.moveTo(568,537)
    c.lineTo(568,194)
    c.lineTo(572,194)
    c.stroke()
    var d=new Arrow(572,200);
    Color_end();
}
// signExtendLW_shift(Color_Map.get(0));

function signExtendLW_MUX(i){
    Color(i);
    c.beginPath();
    c.moveTo(566,535);
    c.lineTo(580,535);
    c.stroke();
    var arrow=new Arrow(580,540);
    var dot=new Dot(568,535);
    Color_end();
}
// signExtendLW_MUX(Color_Map.get(0));

function ReadData1_(i){
//line from register in ID to ALU IN ex
    Color(i);
    c.beginPath();
    c.moveTo(541,421);
    c.lineTo(627,421);
    c.stroke();
    var arrow=new Arrow(627,425);
    Color_end()
}
// ReadData1_(Color_Map.get(0));

function RegisterFile(i){
    Color(i);
    c.beginPath();
    c.rect(404,373,138,187)
    c.font="15px Arial";
    c.fillText("Read",417,393,36);
    c.fillText("register 1",417,408,63);
    c.fillText("Read",417,439,36);
    c.fillText("register 2",417,454,65);
    c.fillText("Write",417,486,35);
    c.fillText("register",417,502,49);
    c.fillText("Read",496,480,35);
    c.fillText("data2",489,498,42);
    c.fillText("Write",416,533,36);
    c.fillText("data",416,550,29);
    c.fillText("Registers",462,552,71);
    c.fillText("Read",496,415,36)
    c.fillText("data1",496,432,40)
    
    c.stroke();
    Color_end();
}
// RegisterFile(Color_Map.get(0));

function Controll_MUXIF(i){
  //line from mux to control in IF
  Color(i);
  c.font="18px Arial";
  c.fillText("RegDst",407,185,120)
  c.beginPath();
  c.moveTo(375,530);
  c.lineTo(375,546);
  c.lineTo(225,546)
  c.lineTo(225,168)
  c.lineTo(398,168)
  c.lineTo(398,208);
  c.stroke()
  Color_end();
}
// Controll_MUXIF(Color_Map.get(0));

function ReadData2_MUXID1(i){
    Color(i);
    //line from register to mux(from ID TO EX)
    c.beginPath();
    c.moveTo(541,485)
    c.lineTo(551,485)
    
    c.stroke()
    Color_end();
}
function ReadData2_MUXID2(i){
    Color(i);
    //line from register to mux(from ID TO EX)
    c.beginPath();
    c.moveTo(551,485)
    c.lineTo(580,485)
    c.stroke()
    var arrow = new Arrow(580,490)
    Color_end();
}
// ReadData2_MUXID(Color_Map.get(0));

function RegWrite(i){
    Color(i);
    c.moveTo(413,355);
    c.lineTo(473,355);
    c.lineTo(473,371);
    c.fillText("RegWrite",442,351,60)
    c.stroke();
    Color_end();
}
// RegWrite(Color_Map.get(0)); 

function Last5_(i){
    //instruction 5-0
    Color(i);
    c.beginPath()
    c.font = "20px Arial"
    c.fillText("Instruction [5-0]",417,698,120)
    c.moveTo(408,622);
    c.lineTo(408,707);
    c.lineTo(578,707);
    c.lineTo(579,630);
    c.lineTo(594,630);
    c.stroke();
    var arrow = new Arrow(594,635)
    var x=new Dot(408,622);
    c.font = "20px Arial"
    c.fillText("Instruction [5-0]",417,698,120)
    Color_end();
}
// Last5_(Color_Map.get(0));

function ALUOp(i){
    //line ALUOp from control to ALUcontrol
    Color(i);
    c.font = "18px Arial"
    c.fillText("ALUOp",442,292,60);
    c.beginPath();
    c.moveTo(633,678)
    c.lineTo(633,719)
    c.lineTo(558,719)
    c.lineTo(557,296)
    c.lineTo(432,296)
    c.stroke()
    Color_end();
}
// ALUOp(Color_Map.get(0));


function Memory(i){
    Color(i);
    c.beginPath();
    //rect
    c.strokeRect(758,433,112,167);
    c.font="20px Arial";
    c.fillText("Address ",767,484,57);
    c.fillText("Read ",828,466,35)
    c.fillText("data ",834,490,29)
    c.fillText("Write ",767,553,35)
    c.fillText("data ",767,575,28)
    c.fillText("Data ",821,546,32)
    c.fillText("memory ",807,565,60)
    c.stroke()
    Color_end();
}
// Memory(Color_Map.get(0));


function ReadData_MUXMEM(i){
    Color(i);
   //arrow and line from reisterfile in mem to multiplexer
    c.beginPath();
    c.moveTo(871,480);
    c.lineTo(889,480);
    //the above is the line before the arrow
    
    c.stroke()
    var arrow = new Arrow(890,485)
    Color_end();
}
// ReadData_MUXMEM(Color_Map.get(0));

function MUXMEM(i){
    Color(i);
    //multiplexer
    c.beginPath()
    c.moveTo(902,477);
    c.lineTo(902,534);
    c.moveTo(928,477)
    c.lineTo(928,534)
    c.arc(915,480,13,0,Math.PI,true);
    c.arc(915,534,13,Math.PI,Math.PI*2,true);
    c.font="15px Arial";
    c.fillText("1",908,482,15);
    c.fillText("0 ",907,545,15);
    c.fillText("M ",910,498,15);
    c.fillText("U ",910,515,15);
    c.fillText("X ",910,530,15);
    c.stroke();
    Color_end();
}
// MUXMEM(Color_Map.get(0));

function MUXMEM_RegisterFile(i){
    Color(i);
    //line to registerfile FROM MEM MULTIPLEXER
    c.beginPath();
    c.moveTo(928,506)
    c.lineTo(939,506)
    c.lineTo(939,727)
    c.lineTo(392,727)
    c.lineTo(392,537)
    c.lineTo(395,537)
    c.moveTo(396,534);
    c.lineTo(404,535);
    
    c.stroke();
    var arrow = new Arrow(395,540)
    Color_end();
}
// MUXMEM_RegisterFile(Color_Map.get(0));

function ALUControl(i){
    Color(i);
    c.beginPath()
    c.ellipse(632,629,29,48,0,Math.PI*2,false)
    c.moveTo(679,514);
    c.lineTo(679,631);
    c.lineTo(661,631);
    c.font="20px Arial";
    c.fillText("ALU",617,625,30);
    c.fillText("control",606,643,52)
    c.stroke();
    Color_end();
}
// ALUControl(Color_Map.get(0));

function MUXID(i){
    //aside alu control
    Color(i);
    c.beginPath();
    c.arc(602,482,13,0,Math.PI,true);
    c.stroke();
    c.beginPath();
    c.arc(602,537,13,0,Math.PI,false);
    c.stroke();
    c.beginPath();
    c.moveTo(615,537);
    c.lineTo(615,482);
    c.stroke();
    c.beginPath();
    c.moveTo(589,537);
    c.lineTo(589,482);
    c.stroke();
    c.font="15px Arial";
    c.fillText("0", 595, 485, 120);
    c.fill();
    c.fillText("M", 595, 498, 120);
    c.fill();
    c.fillText("U", 595, 515, 120);
    c.fill();
    c.fillText("X", 595, 530, 120);
    c.fill();
    c.fillText("1", 595, 545, 120);
    Color_end();
}
// MUXID(Color_Map.get(0));

function MUXID_ALUEX(i){
    Color(i);
    c.beginPath();
    c.moveTo(615,507);
    c.lineTo(628,507);
    c.stroke();
    var arrow = new Arrow(628,512);
    Color_end();
}
// MUXID_ALUEX(Color_Map.get(0))


function ALUEX(i){
    Color(i);
    c.beginPath();
    c.moveTo(637,403);
    c.lineTo(637,450);
    c.lineTo(649,465);
    c.lineTo(637,483);
    c.lineTo(637,532);
    c.lineTo(727,495);
    c.lineTo(727,434);
    c.lineTo(637,403);
    c.stroke();
    c.beginPath();
    c.font="20px Arial";
    c.fillText("ALU",655,467,140);
    c.fill();
    c.beginPath();
    c.font="15px Arial";
    c.fillText("ALU",691,480,140);
    c.fillText("result", 683,493,140);
    c.font="17px Arial";
    c.fillText("Zero", 689,449,150);
    c.fill();
    Color_end();
}
// ALUEX(Color_Map.get(0));

function ALUEX_Memory(i){
    Color(i)
    c.beginPath();
    c.moveTo(727,481);
    c.lineTo(750,480);
    c.stroke();
    
    var arrow = new Arrow(746,485);
    Color_end()
}
// ALUEX_Memory(Color_Map.get(0));

function MemWrite(i){
    //from the registerfile in MEM TO CONTROL
    Color(i);
    c.beginPath();
    c.moveTo(812,434);
    c.lineTo(811,313);
    c.lineTo(429,313);
    c.stroke();
    c.beginPath();
    c.font="18px Arial";
    c.fillText("MemWrite",442,309,120);
    c.fill();
    Color_end();
}
// MemWrite(Color_Map.get(0));

function MemtoReg(i){
    //MEMTOREG to CONTROL
    Color(i)
    c.beginPath();
    c.moveTo(915,465);
    c.lineTo(915,276);
    c.lineTo(431,275);
    c.stroke();
    c.beginPath();
    c.fillText("MemtoReg",442,270,120);
    c.fill();
    Color_end();
}
// MemtoReg(Color_Map.get(0));

function ALUSrc(i){
    //ALUSrc from CONTROL to MUX
    Color(i)
    c.beginPath();
    c.moveTo(602,469);
    c.lineTo(602,335);
    c.lineTo(422,335);
    c.stroke();
    c.beginPath();
    c.fillText("ALUSrc",442,330,120);
    c.fill();
    Color_end();
}
// ALUSrc(Color_Map.get(0));

function And(i){
    Color(i);
    c.beginPath();
    c.moveTo(726,446);
    c.lineTo(741,446);
    c.lineTo(741,232);
    c.lineTo(753,232);
    c.stroke();
    c.beginPath();
    c.arc(770,220,20,0.5*Math.PI, 1.5*Math.PI,true);
    c.moveTo(770,200);
    c.lineTo(754,200);
    c.lineTo(754,240);
    c.lineTo(770,240);
    c.moveTo(800,164);
    c.lineTo(800,220);
    c.lineTo(790,220);


    c.stroke();
    Color_end();
}
// And(Color_Map.get(0));

function Branch(i){
    Color(i);
    //line from control to and
    c.moveTo(752,210);
    c.lineTo(712,210);
    c.lineTo(712,235);
    c.lineTo(427,235);
    c.stroke();
    c.beginPath();
    c.fillText("Branch",442,229,120 );
    c.fill();
    Color_end();
}
// Branch(Color_Map.get(0));

function ALUEX_MUXMEM(i){
    Color(i);
    //from ALU IN EX TO MUX IN MEM
    c.beginPath();
    c.moveTo(738,481);
    c.lineTo(738,614);
    c.lineTo(883,614);
    c.lineTo(883,532);
    c.lineTo(894,532);
    c.stroke();
    var arrow = new Arrow(894,538);
    Color_end();
}
// ALUEX_MUXMEM(Color_Map.get(0));

function WriteData_(i){
    Color(i);
    //from REGISTERFILE IN EX to REG MEM(WRITE DATA)
    c.beginPath();
    c.moveTo(550,485);
    c.lineTo(550,567);
    c.lineTo(750,567);
    c.stroke();
    var arrow = new Arrow(750,572);
    var nab = new Dot(550,485);
    Color_end();
}
// WriteData_(Color_Map.get(0));

function MemRead(i){
    Color(i);
    //MEMREAD FROM CONTROL 
    c.beginPath();
    c.moveTo(813,601);
    c.lineTo(813,630);
    c.lineTo(956,630);
    c.lineTo(955,256);
    c.lineTo(431,256);
    c.stroke();
    c.beginPath();
    c.fillText("MemRead",442,252,120);
    c.fill();
    Color_end();
}
// MemRead(Color_Map.get(0));

//Line1
function BranchMUX_PC(i){
    Color(i);
    c.beginPath();
    c.moveTo(52,407);
    c.lineTo(46,407);
    c.lineTo(46,20);
    c.lineTo(910,20);
    c.lineTo(910,113);
    c.lineTo(878,113);
    // c.strokeStyle = 'black';
    c.stroke();
    var dd=new Arrow(52,412);
    Color_end();
}
// BranchMUX_PC(Color_Map.get(0));

//PC
function PC(i){
    Color(i);
    c.beginPath();
    c.rect(60,355,31,101);
    c.font = "15px Arial";
    c.fillText("PC",66,410);
    c.stroke();
    Color_end();
}
// PC(Color_Map.get(0));

//Dot1
// Dot(100,406);
//Line2(instruction fetch line)
function PC_RegisterFile(i){
    Color(i)
    c.beginPath();
    c.moveTo(92,406);
    c.lineTo(100,406);
    c.moveTo(100,406);
    c.lineTo(107,406);
    c.stroke();
    var a=new Arrow(107,411);
    Color_end();
}
// PC_RegisterFile(Color_Map.get(0));

function PC_Add(i){
    Color(i);
    c.beginPath();
    c.moveTo(100,406);
    c.lineTo(100,73);
    c.lineTo(155,73);
    c.stroke();
    var b=new Arrow(155,78);
    var ee=new Dot(100,406)
    Color_end();
}
// PC_Add(Color_Map.get("PC_Add"));
// //ALU1
function Add(i){
    Color(i);
    c.beginPath();
    c.moveTo(164,49);
    c.lineTo(164,96);
    c.lineTo(177,113);
    c.lineTo(167,130);
    c.lineTo(167,178);
    c.lineTo(213,145);
    c.lineTo(213,82);
    c.lineTo(164,49);
    c.font = "15px Arial";
    c.fillText("Add", 179, 120);
    c.stroke();
    Color_end(); 
}
// Add(Color_Map.get(0));

function Default4(i){
    Color(i);
    c.beginPath();
    c.moveTo(140,154);
    c.lineTo(158,154);
    c.stroke();
    c.font = "15px Arial";
    c.fillText("4",128,158.5);
    var v=new Arrow(158,159.5);
    Color_end();
}
// Default4(Color_Map.get(0));
//ALU PC4 result
function Add_BranchMUX(i){
    Color(i);
    c.beginPath();
    c.moveTo(214,113);
    c.lineTo(545,113);
    c.lineTo(545,102);
    c.stroke();
    
    c.beginPath();
    c.moveTo(545,102);
    c.lineTo(545,77);
    c.lineTo(776,77);
    c.stroke();
    var ss=new Arrow(776,81.5);
    var xx=new Dot(545,102);
    Color_end();
}

// Add_BranchMUX(Color_Map.get(0));

// MUX1
function BranchMUX(i){
    Color(i);
    c.beginPath();
    c.arc(798,77,13,Math.PI,0,false);
    c.stroke();
    c.beginPath();
    c.arc(798,151,13,Math.PI,0,true);
    c.stroke();
    c.beginPath();
    c.moveTo(785,77);
    c.lineTo(785,151);
    c.stroke();
    c.beginPath();
    c.moveTo(811,75);
    c.lineTo(811,151);
    c.stroke();
    c.fillText("0", 794,81);
    c.fillText("1",794,154);
    c.fillText("M",792,100);
    c.fillText("U",792,115);
    c.fillText("X",792,130);
    Color_end();
}
// BranchMUX(Color_Map.get(0));


function BranchALU(i){
    Color(i);
    c.beginPath();    
    c.beginPath();
    c.moveTo(651,90);
    c.lineTo(650,136);
    c.lineTo(664,153);
    c.lineTo(650,170);
    c.lineTo(650,218);
    c.lineTo(742,182);
    c.lineTo(742,123);
    c.lineTo(651,90);
    c.stroke();
    c.font = "15px Arial";
    c.fillText("Add", 667,157);
    c.font = "15px Arial";
    c.fillText("ALU",703,145);
    c.font = "15px Arial";
    c.fillText("result", 702,160);
    
    c.stroke();
    Color_end();
}
// BranchALU(Color_Map.get(0));


function BranchALU_BranchMUX(i){
    Color(i);
    c.beginPath();
    c.moveTo(742,152);
    c.lineTo(777,152);
    c.stroke();
    var f=new Arrow(777,157);
    Color_end()
}
// BranchALU_BranchMUX(Color_Map.get(0));

function _BranchALU(i){
    Color(i);
    c.beginPath();
    c.moveTo(545,102);
    c.lineTo(643,102);
    c.stroke();
    var a=new Arrow(643,107);
    Color_end()
}
// _BranchALU(Color_Map.get(0))

function Shift(i){
    Color(i);
    c.beginPath();
    c.moveTo(632,194);
    c.lineTo(642,194);
    c.stroke();
    
    c.beginPath();
    c.ellipse(606,194,25,33,Math.PI*2,0,Math.PI*2,false);
    c.stroke();
    c.font = "15px Arial";
    c.fillText("Shift", 590,185);
    c.font = "15px Arial";
    c.fillText("left 2", 590,210);
    var t=new Arrow(642,199);
    Color_end();
}
// Shift(Color_Map.get(0));

function MEMIF(i){
    Color(i);
        c.beginPath();
        c.rect(120,385,96,141);
        c.moveTo(216,463);
        c.lineTo(234,463)
        // c.stroke();
        c.fillText("Read",128,402,36);
        c.fillText("address",128,418,55);
        c.fillText("Instruction",135,457,72);
        c.fillText("[31-0]",165,479,42);
        c.fillText("Instruction",127,500,81);
        c.fillText("memory",138,517,59);
        c.stroke();
        var bb=new Dot(234,463)
        Color_end()
}
// MEMIF(Color_Map.get(0));
function InstructionFetch(){
    ColorRed();
    c.beginPath();
    c.moveTo(41,790);
    c.font = "25px Arial";
    c.fillText("Instruction Fetch",41,790,2000);
    c.stroke();
    Color_end();
}
function InstructionDecode(){
    ColorRed();
    c.beginPath();
    c.moveTo(300,790);
    c.font = "25px Arial";
    c.fillText("Instruction Decode",300,790,2000);
    c.stroke();
    Color_end();
}
function ExecutionD(){
    ColorRed();
    c.beginPath();
    c.moveTo(578,790);
    c.font = "25px Arial";
    c.fillText("Execution",578,790,2000);
    c.stroke();
    Color_end();
}
function MemoryD(){
    ColorRed();
    c.beginPath();
    c.moveTo(737,790);
    c.font = "25px Arial";
    c.fillText("Memory",737,790,2000);
    c.stroke();
    Color_end();
}
function WriteBackD(){
    ColorRed();
    c.beginPath();
    c.moveTo(870,790);
    c.font = "25px Arial";
    c.fillText("Write Back",870,790,2000);
    c.stroke();
    Color_end();
}
function drawOpRep(val){
    ColorRed();
    c.beginPath();
    c.moveTo(244,296);
    c.font = "16px Arial";
    c.fillText(val,244,296,2000);
    c.stroke();
    Color_end();
}
function drawRsRep(val){
    ColorRed();
    c.beginPath();
    c.moveTo(244,410);
    c.font = "16px Arial";
    c.fillText(val,244,410,2000);
    c.stroke();
    Color_end();
}
function drawRtRep(val){
    ColorRed();
    c.beginPath();
    c.moveTo(244,450);
    c.font = "16px Arial";
    c.fillText(val,244,450,2000);
    c.stroke();
    Color_end();
}
function drawRdRep(val){
    ColorRed();
    c.beginPath();
    c.moveTo(244,530);
    c.font = "16px Arial";
    c.fillText(val,244,530,2000);
    c.stroke();
    Color_end();
}
function drawfunctRep(val){
    ColorRed();
    c.beginPath();
    c.moveTo(421,723);
    c.font = "16px Arial";
    c.fillText(val,421,723,2000);
    c.stroke();
    Color_end();
}
function drawRsVal(val){
    ColorRed();
    c.beginPath();
    c.moveTo(640,425);
    c.font = "20px Arial";
    c.fillText(val,640,425,2000);
    c.stroke();
    Color_end();
}
function drawRtVal(val){
    ColorRed();
    c.beginPath();
    c.moveTo(640,516);
    c.font = "20px Arial";
    c.fillText(val,640,516,2000);
    c.stroke();
    Color_end();
}
function drawRtVal1(val){
    ColorRed();
    c.beginPath();
    c.moveTo(742,590);
    c.font = "20px Arial";
    c.fillText(val,742,590,2000);
    c.stroke();
    Color_end();
}
function drawWBresult1(val){
    ColorRed();
    c.beginPath();
    c.moveTo(889,555);
    c.font = "20px Arial";
    c.fillText(val,889,555,2000);
    c.stroke();
    Color_end();
}
function drawWBresult2(val){
    ColorRed();
    c.beginPath();
    c.moveTo(377,555);
    c.font = "20px Arial";
    c.fillText(val,377,555,2000);
    c.stroke();
    Color_end();
}
function drawWBresult3(val){
    ColorRed();
    c.beginPath();
    c.moveTo(879,502);
    c.font = "20px Arial";
    c.fillText(val,879,502,2000);
    c.stroke();
    Color_end();
}
function drawCstRep(val){
    ColorRed();
    c.beginPath();
    c.moveTo(240,645);
    c.font = "16px Arial";
    c.fillText(val,240,645,2000);
    c.stroke();
    Color_end();
}
function Inst_memory_Arrow(i){
    Color(i);
    Dot(220,463);
    c.beginPath();
    c.moveTo(220,463);
    c.lineTo(220,53);
    c.lineTo(318,53);
    c.stroke();
    Arrow(318,58);
    c.beginPath();
    c.moveTo(304,47);
    c.lineTo(316,60);
    c.font = "16px Arial";
    c.fillText("26",305,76,1000);
    c.font="13px Arial";
    c.fillText("Instruction [25-0]", 207, 42, 2000);
    c.stroke();
    Color_end();
}
//Inst_memory_Arrow();

function Ellipse_Branch(i){
    Color(i);
    c.beginPath();
    c.ellipse(348.5,55,22,27,2*Math.PI, 0, 360, false);
    c.font = "13px Arial";
    c.fillText("Shift", 334,48,1000);
    c.fillText("left 2", 334,65,1000);
    c.stroke();
    Color_end();
}
//Ellipse_Branch();

function Shift2_Result(i){
    Color(i);
    c.beginPath();
    c.moveTo(370,53);
    c.lineTo(828,52);
    c.lineTo(828,83);
    c.lineTo(840,83);
    c.moveTo(377,45);
    c.lineTo(389,60);
    c.font = "16px Arial";
    c.fillText("28",380,76,1000);
    c.font ="13px Arial";
    c.fillText("Jump Address [31-0]",382,42,2000);
    c.stroke();
    Arrow(840,88);
    Color_end();
}
function Branch_Mux(i){
    Color(i);
    c.beginPath();
    c.arc(863,79,14,0,Math.PI, true);
    c.stroke();
    c.beginPath();
    c.moveTo(849.5,79);
    c.lineTo(849.5,144);
    c.stroke();
    c.beginPath();
    c.arc(863,144,14,0,Math.PI, false);
    c.moveTo(877,144);
    c.lineTo(877,79);
    c.font = "19px Arial";
    c.fillText("1", 858,84);
    c.font = "17px Arial";
    c.fillText("M",858,99);
    c.fillText("U", 858, 116);
    c.fillText("X", 858, 132);
    c.font= "19px Arial";
    c.fillText("0", 858, 152);
    c.stroke();
    //MUX Signal
    c.beginPath();
    c.moveTo(863,66);
    c.lineTo(863,36);
    c.lineTo(525,36);
    c.lineTo(525,213);
    c.lineTo(407.5,213);
    c.font = "18px Arial";
    c.fillText("Jump",415,207,1000);
    c.font="14px Arial";
    c.fillText("PC+4 [31-28]",438,80,2000);
    c.stroke();
    Color_end();
}
function Branch_MUX1_Result(i){
    Color(i);
    c.beginPath();
    c.moveTo(810,145);
    c.lineTo(842,145);
    c.stroke();
    Arrow(842,150);
    Color_end();
}
//Branch_MUX1_Result();
function PC_Add_Result_Branch(i){
    Color(i);
    c.beginPath();
    c.moveTo(298,113);
    c.lineTo(298,91);
    c.lineTo(431,91);
    c.lineTo(431,53);
    c.stroke();
    Dot(298,113);
    Color_end();
}
function Color(i){
    if(i==1){
        c.strokeStyle = "blue";
        c.fillStyle = "blue";
    }

}
function ColorRed(){
        c.strokeStyle = "red";
        c.fillStyle = "red";
}

function Redraw(){
    c.clearRect(0,0,canvas.width,canvas.height);
}
function Color_end(){
    c.strokeStyle = "Black";
    c.fillStyle = "Black";
}
