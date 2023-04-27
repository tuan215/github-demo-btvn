




function totalOfCompany(bennifitOfEmployee){
    let sum=0;
    for(let i = 0; i < bennifitOfEmployee.length; i++){
    sum+= bennifitOfEmployee[i];
    }
    return sum;
}
let aCompany= totalOfCompany([2,3,45,9,19])
console.log(aCompany);

/*
input: money, numberOfProduct
output: product
*/
let total= +prompt("Please insert money");
function vendingMachine(money,numberOfProduct){
    switch (numberOfProduct) {
        case 1:
            console.log("Pessi");
            return money - 2;
        case 2:
            console.log("Revice");
            return money - 2;
        case 3:
            console.log("Dr.thanh");
            return money - 1;
        case 4:
            console.log("Cocacola");
            return money - 3;
        default:
            return money;
    }
}
let fund = vendingMachine(10,1);
if(isNaN(total)){
    console.log(" Co lam moi co an")
} else if (!isNaN(total) && total>0 && parseInt(total)=== total){
    while (total>0){
        let num = +prompt("Please number of product:");
        if (total< vendingMachine(num)){
            console.log("So du khong du mua san pham nay");
            break;
        }else{
            console.log("Ban da thanh toan thanh cong, Vui long nhan san pham")
            total = total - vendingMachine(total, num);
        }
    }
}


// viet them khi vong while het tien phai dung lai
// khoong sua ham tren




