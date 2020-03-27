var canvas = document.querySelector('canvas')

canvas.width = 1200
canvas.height = 800

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
// var dot = new Dot(234,397)
function Id_Stage(){
    c.font = "20px Arial"
    c.fillText("Instruction [31-26]",238,268,120)
    c.fillText("Instruction [25-21]",238,387,120)
    c.fillText("Instruction [20-16]",238,433,120)
    c.fillText("Instruction [15-11]",238,505,120)
    c.fillText("Instruction [15-0]",238,612,120)
    c.fillText("Controller",365,285,60)
    c.fillText("ALUOp",442,292,60)

    c.font = "18px Arial"
    c.fillText("RegWrite",442,351,60)
    c.fillText("0",372,484-14,10)
    c.fillText("M",374,501-14,10)
    c.fillText("u",374,514-14,10)
    c.fillText("x",374,529-14,10)
    c.fillText("1",372,543-14,10)
    var dot = new Dot(234,516)   
    var dot = new Dot(234,463)   
    var dot = new Dot(234,443)   
    var dot = new Dot(234,397)   
    var dot = new Dot(330,443)   
    var dot = new Dot(408,622) 
    var dot = new Dot(738,481)
    var dot = new Dot(568,536) 
    c.beginPath()
    c.moveTo(355,278);  
    c.lineTo(234,278);  
    c.lineTo(234,622) 
    c.lineTo(441,622); 
    c.moveTo(234,397)
    c.lineTo(396,396)
    c.moveTo(234,444)
    c.lineTo(395,443)
    c.moveTo(330,444)
    c.lineTo(330,466)
    c.lineTo(356,465)
    c.moveTo(234,515)
    c.lineTo(356,515)
    c.moveTo(395,536)
    c.lineTo(392,537)
    c.lineTo(392,726)
    c.lineTo(754,726)
    c.moveTo(234,464)
    c.lineTo(217,464)
    c.moveTo(366,464)
    c.arc(380,464,14,Math.PI,false)
    c.lineTo(395,518)
    c.moveTo(366,464)
    c.lineTo(366,518)
    c.arc(380,517,14,Math.PI,Math.PI*2,true)
    c.moveTo(427,277)
    c.ellipse(396,285,33,78,0,Math.PI*2,false)
    c.moveTo(513,622)
    c.ellipse(484,622,29,48,0,Math.PI*2,false)
    c.lineTo(567,621)
    c.lineTo(567,195)
    c.lineTo(571,195)
    c.moveTo(540,422)
    c.lineTo(628,422)
    c.moveTo(567,536)
    c.lineTo(576,536)
    c.stroke()
    var arrow = new Arrow(628,427)
    var arrow = new Arrow(571,200)
    c.rect(404,373,138,187)
    c.moveTo(382,530)
    c.lineTo(382,546)
    c.lineTo(225,546)
    c.lineTo(225,168)
    c.lineTo(430,168)
    c.lineTo(430,216)
    c.lineTo(414,216)
    c.moveTo(541,485)
    c.lineTo(576,485)
    c.moveTo(413,355)
    c.lineTo(473,355)
    c.lineTo(473,371)
    c.moveTo(408,622)
    c.lineTo(408,705)
    c.lineTo(580,706)
    c.lineTo(580,631)
    c.lineTo(589,631)
    c.moveTo(660,629)
    c.ellipse(632,629,29,48,0,Math.PI*2,false)
    c.moveTo(633,678)
    c.lineTo(633,719)
    c.lineTo(558,719)
    c.lineTo(557,296)
    c.lineTo(432,296)
    c.stroke()
    var arrow = new Arrow(576,489)
    var arrow = new Arrow(396,401)
    var arrow = new Arrow(396,448)
    var arrow = new Arrow(357,470)
    var arrow = new Arrow(356,520)
    var arrow = new Arrow(397,495)
    var arrow = new Arrow(395,542)
    var arrow = new Arrow(441,627)
    var arrow = new Arrow(355,283)
    var arrow = new Arrow(573,540)
    var arrow = new Arrow(589,636)
    var dot = new Dot(550,485);
    

}

var id = new Id_Stage();
function MEM(){

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
    //arrow
    c.moveTo(871,480);
    c.lineTo(889,480);
    // c.moveTo(890,478)
    // c.lineTo(890,482)
    // c.lineTo(901,480)
    // c.lineTo(890,478)
    // c.fill()
    c.stroke()
    var arrow = new Arrow(890,485)
    //multiplexer
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
    //line to registerfile
    c.moveTo(928,506)
    c.lineTo(939,506)
    c.lineTo(939,727)
    c.lineTo(392,727)
    c.lineTo(392,537)
    c.lineTo(395,537)
    //arrow
    c.moveTo(396,534);
    c.lineTo(404,537);
    // c.moveTo(395,537)
    c.lineTo(395,539)
    // // c.lineTo(901,480)
    c.lineTo(396,534)
    // c.fill()

    c.stroke();
}

MEM()


function ALU_Control(){

    c.beginPath()
    c.moveTo(679,514);
    c.lineTo(679,631);
    c.lineTo(661,631);
    // c.moveTo(633,631);
    // c.lineTo(633,720);
    // c.lineTo(556,720);
    // c.lineTo(556,294);
    // c.lineTo(431,294);
    // c.moveTo(632,631);
    // c.ellipse(632,631,47,47,Math.PI*2,0,Math.PI*2,false);
    c.font="20px Arial";
    c.fillText("ALU",617,625,30);
    c.fillText("control",606,643,52)
    c.stroke();
}
ALU_Control();
function Execution(){
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
    c.beginPath();
    c.moveTo(615,507);
    c.lineTo(628,507);
    c.stroke();
    var arrow = new Arrow(628,512);
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
    c.beginPath();
    c.moveTo(727,481);
    c.lineTo(750,480);
    c.stroke();
    var arrow = new Arrow(746,485);
    c.beginPath();
    c.moveTo(812,434);
    c.lineTo(811,313);
    c.lineTo(429,313);
    c.stroke();
    c.beginPath();
    c.font="18px Arial";
    c.fillText("MemWrite",442,309,120);
    c.fill();
    c.beginPath();
    c.moveTo(915,465);
    c.lineTo(915,276);
    c.lineTo(431,275);
    c.stroke();
    c.beginPath();
    c.fillText("MemtoReg",442,270,120);
    c.fill();
    c.beginPath();
    c.moveTo(602,469);
    c.lineTo(602,335);
    c.lineTo(422,335);
    c.stroke();
    c.beginPath();
    c.fillText("ALUSrc",442,330,120);
    c.fill();
    c.beginPath();
    c.moveTo(726,446);
    c.lineTo(741,446);
    c.lineTo(741,232);
    c.lineTo(753,232);
    c.stroke();
    c.beginPath();
    c.arc(774,220,24,0.5*Math.PI, 1.5*Math.PI,true);
    c.moveTo(774,196);
    c.lineTo(753,196);
    c.lineTo(753,244);
    c.lineTo(774,244);
    c.moveTo(752,210);
    c.lineTo(712,210);
    c.lineTo(712,235);
    c.lineTo(427,235);
    c.stroke();
    c.beginPath();
    c.fillText("Branch",442,229,120 );
    c.fill();
    c.beginPath();
    c.moveTo(738,481);
    c.lineTo(738,614);
    c.lineTo(883,614);
    c.lineTo(883,532);
    c.lineTo(894,532);
    c.stroke();
    var arrow = new Arrow(894,538);
    c.beginPath();
    c.moveTo(550,485);
    c.lineTo(550,567);
    c.lineTo(750,567);
    c.stroke();
    var arrow = new Arrow(750,572);
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

}
Execution();
//Line1
c.beginPath();
c.moveTo(52,407);
c.lineTo(46,407);
c.lineTo(46,20);
c.lineTo(833,20);
c.lineTo(833,113);
c.lineTo(812,113);
c.strokeStyle = 'black';
c.stroke();
//Arrow2
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
Arrow(52,412);

//PC
c.beginPath();
c.rect(60,355,31,101);
c.font = "15px Arial";
c.fillText("PC",66,410);
c.stroke();
//Dot
function Dot(x,y){
    this.x = x;
    this.y = y;
    c.beginPath()
    c.arc(this.x,this.y,3,Math.PI*2,false)
    c.fill();
}
Dot(100,406);
//Line2
c.beginPath();
c.moveTo(92,406);
c.lineTo(100,406);
c.moveTo(100,406);
c.lineTo(107,406);
c.stroke();
Arrow(107,411);

c.beginPath();
c.moveTo(100,406);
c.lineTo(100,73);
c.lineTo(155,73);
c.stroke();
Arrow(155,78);

//ALU1
c.beginPath();
c.moveTo(164,49);
c.lineTo(164,96);
c.lineTo(180,113);
c.lineTo(167,130);
c.lineTo(167,178);
c.lineTo(221,145);
c.lineTo(221,82);
c.lineTo(164,49);
c.font = "15px Arial";
c.fillText("Add", 185, 120);
c.stroke();

c.beginPath();
c.moveTo(140,154);
c.lineTo(158,154);
c.stroke();
Arrow(158,159.5);
c.font = "15px Arial";
c.fillText("4",128,158.5);

c.beginPath();
c.moveTo(221,113);
c.lineTo(545,113);
c.lineTo(545,102);
c.stroke();
Dot(545,102);

c.beginPath();
c.moveTo(545,102);
c.lineTo(545,77);
c.lineTo(776,77);
c.stroke();
Arrow(776,81.5);

//MUX1
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

c.beginPath();
c.moveTo(545,102);
c.lineTo(643,102);
c.stroke();
Arrow(643,107);
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
c.beginPath();
c.moveTo(742,152);
c.lineTo(777,152);
c.stroke();
Arrow(777,157);

c.beginPath();
c.moveTo(632,194);
c.lineTo(642,194);
c.stroke();
Arrow(642,199);
c.beginPath();
c.ellipse(606,194,25,33,Math.PI*2,0,Math.PI*2,false);
c.stroke();
c.font = "15px Arial";
c.fillText("Shift", 590,185);
c.font = "15px Arial";
c.fillText("left 2", 590,210);
c.rect(119,386,97,139)
c.stroke()
c.font = "15px Arial"
c.fillText("Sign-",467,617)
c.fillText("extend",463,637)
c.stroke()
function write(){
    //add text
    c.beginPath();
    c.font="20px Arial";
    // c.fillText("Add",184,116,28);
    // c.fillText("4",130,158,10);
    //pc
    // c.fillText("PC",68,410,19);
    //fetching
    c.fillText("Read",128,402,36);
    c.fillText("address",128,418,55);
    c.fillText("Instruction",135,457,72);
    c.fillText("[31-0]",165,479,42);
    c.fillText("Instruction",127,500,81);
    c.fillText("memory",138,517,59);
    //register file
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
}
write();