<!DOCTYPE html>
<html>
<head>
    <title>adding elements Java Script</title>
</head>
<style>
    li {
        width: 30%;
    }

    li img {
        width: 100%;
    }
</style>
<script>
    var items = [
        ['image/img1.jpg',89,'ยำมาม่าทะเล'],
        ['image/img2.jpg',79,'ยำวุ้นเส้น'],
        ['image/img3.jpg',359,'ยำรวม'],
        ['image/img4.jpg',159,'ยำแซลม่อน'],
        ['image/img5.jpg',159,'ยำทะเล'],
        ['image/img6.jpg',199,'ยำปูซ่า'],
        ['image/img7.jpg',79,'ยำไส้กรอก'],
        ['image/img8.jpg',79,'ยำหมูยอ'],
        ['image/img9.jpg',119,'ยำกุ้งสุด'],
        ['image/img10.jpg',69,'ไก่ย่าง'],
    ];

    function shop(){
        var main = document.getElementById('name foods');
        
        for(var i = 0;i < items.length;i++)
        {

        

            var ele = document.createElement('li');
            var pic = document.createElement('img');
            var price = document.createElement('h1');
            var desc = document.createElement('h2');
            var add = document.createElement('node');
            var typeBox = document.createElement('input');

            main.appendChild(ele);
            ele.appendChild(pic);
            ele.appendChild(price);
            ele.appendChild(desc); 
            ele.appendChild(add);
            ele.appendChild(typeBox);

            pic.src = items[i][0];
            price.innerHTML = '฿' + items[i][1];
            desc.innerHTML = '฿' + items[i][2];
            add.innerHTML = 'add';
            typeBox.type = 'number';
        }
    }
    function Showme(){

    }
</script>
<body onload="shop()">
    <ul id ="name foods">

    </ul>
</body>
<body>
<button type = "node" onclick ="Showme()">Showme!!</button>
</body>
</html>