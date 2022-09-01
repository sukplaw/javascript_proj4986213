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
        ['image/img1.jpg',89,'Air Jordan XXXVI Low Luka PF'],
        ['image/img2.jpg',79,'Nike Air Zoom G.T. Cut 2'],
        ['image/img3.jpg',359,'KD Trey 5 X EP'],
        ['image/img4.jpg',159,'Zion 2 PF'],
        ['image/img5.jpg',159,'Kyrie Infinity EP'],
        ['image/img6.jpg',199,'LeBron 19'],
        ['image/img7.jpg',79,'KD14 EP'],
        ['image/img8.jpg',79,'Air Jordan XXXVI PF'],
        ['image/img9.jpg',119,'Air Jordan 5 Retro Low PSG'],
        ['image/img10.jpg',69,'Nike Air Zoom G.T. Jump'],
    ];

    function basket(){
        var main = document.getElementById('name shoes');
        
        for(var i = 0;i < items.length;i++)
        {

        

            var ele = document.createElement('li');
            var pic = document.createElement('img');
            var price = document.createElement('h1');
            var desc = document.createElement('h2');
            var add = document.createElement('button');
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
<body onload="basket()">
    <ul id ="name shoes">

    </ul>
</body>
<body>
<button type = "button" onclick ="Showme()">Showme!!</button>
</body>
</html>