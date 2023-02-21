function tinhtien()
    {
    var soluong,g,tien,loai;
    soluong=0;
    loai=xl.value;
    soluong=Number(sl.value);
    g=mg.value;
    thanhtien.innerText="";
    tl(g,soluong,tien,loai);
    }
    function tl(g,soluong,tien,loai){
       
        if(g==2&&loai>1&&soluong>0){
            tien=soluong*20000;
            
        }
        else if(g==3&&loai>1&&soluong>0){
            tien=soluong*50000;
        }
        else if(g==4&&loai>1&&soluong>0){
            tien=soluong*100000;
        }
        else if(g==5&&loai>1&&soluong>0){
            tien=soluong*200000;
        }
        else if(g==6&&loai>1&&soluong>0){
            tien=soluong*500000;
        }
        else {
            alert("Vui lòng chọn đủ thông tin");
        }
        thanhtien.innerText+="Tổng tiền :"+tien+" nghìn đồng";
      
    }
