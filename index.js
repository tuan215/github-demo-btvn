//tinh binh phuong cho tung so
// let num=[3,4,5,4,5,6,7,7,77]

let num=[3,4,5,4,5,6,7,7,77];
let binhphuong=[];
for(let i=0; i<num.length; i++ ){
    binhphuong.push(num[i]**2);
}
console.log("Binh phuong cac so cua mang:"+ binhphuong)

//tim so nguyen to
// let num2=[3,5,6,6,7,8,8,8,9,9,33]
 
let num2=[1,3,5,6,6,7,7,8,8,8,9,9,11,33];
let songuyento=[];
let n=0;
for(let i=0; i<num2.length; i++)
{
    for(let j=2; j< num2[i]; j++)
    {
        if (num2[i] % j == 0)
        {
            n=0;
            break;
        }
        else 
        {
            n=1;
        }
    }
    if (n==1) {
        songuyento.push(num2[i]);
    }
}
console.log('Day cac so nguyen to trong mang:'+ songuyento)

//tao gio hang hoa qua
let card=[];
let fruit_1={
    stt:"1",
    ten:"Tao",
    gia:10000,
    ngayhethan:"4/2/2023",
    donviphanphoi:{
        tendonvi: "S1",
        diachi:"hai ba trung",
    }
}

let fruit_2={
    stt:"2",
    ten:"Cam",
    gia:30000,
    ngayhethan:"1/2/2023",
    donviphanphoi:{
        tendonvi: "S3",
        diachi:"ha dong",
    }
}

let fruit_3={
    stt:"3",
    ten:"Dao",
    gia:20000,
    ngayhethan:"5/2/2023",
    donviphanphoi:{
        tendonvi: "S2",
        diachi:"thanh xuan",
    }
}
card.push(fruit_1,fruit_2,fruit_3);
for(let i=0; i<card.length; i++){
    console.log("So thu tu:" + card[i].stt);
    console.log("Ten hang hoa:" + card[i].ten);
    console.log("Gia hang hoa:" + card[i].gia);
    console.log("Ngay het han:" + card[i].ngayhethan);
    console.log("Don vi phan phoi:" + card[i].donviphanphoi.tendonvi +" - "+ card[i].donviphanphoi.diachi)
}


let index = parseInt(prompt("stt:"));
for(let i=0;i<card.length;i++){
    if (i = index){
        let update= prompt("Nhap ngay sua");
        card[i].ngayhethan=update;
        console.log("Ngay het han moi:" +card[i].ngayhethan)
    }
}
