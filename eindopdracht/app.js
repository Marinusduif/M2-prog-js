class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas= document.getElementById("canvasId") 
        let g = canvas.getContext("2d");
        console.log(canvas);

//background
        g.beginPath();
        g.fillStyle = "#1acc26";
        g.moveTo(100,1030);
        g.lineTo(1870,1030);
        g.lineTo(1870,100);
        g.lineTo(100,100);
        g.closePath();
        g.stroke();
        g.fill();

//grass        
        g.beginPath();
        g.fillStyle = "#44ba04";
        g.moveTo(100,1030);
        g.lineTo(1870,1030);
        g.lineTo(1870,850);
        g.lineTo(100,850);
        g.closePath();
        g.stroke();
        g.fill();

//aarde        
        g.beginPath();
        g.fillStyle = "#523f1b";
        g.moveTo(100,1030);
        g.lineTo(1870,1030);
        g.lineTo(1870,900);
        g.lineTo(100,900);
        g.closePath();
        g.stroke();
        g.fill();

//huis        
        g.beginPath();
        g.fillStyle = "#9a5a1e";
        g.moveTo(100,850);
        g.lineTo(750,850);
        g.lineTo(750,500);
        g.lineTo(100,500);
        g.closePath();
        g.stroke();
        g.fill();

//boomstronk1        
        g.beginPath();
        g.fillStyle = "#6e6d2f";
        g.moveTo(1600,850);
        g.lineTo(1550,850);
        g.lineTo(1550,450);
        g.lineTo(1600,450);
        g.closePath();
        g.stroke();
        g.fill();

//boomstruik1        
        g.beginPath();
        g.fillStyle = "#28ab00";
        g.moveTo(1700,500);
        g.lineTo(1450,500);
        g.lineTo(1450,300);
        g.lineTo(1700,300);
        g.closePath();
        g.stroke();
        g.fill();
        
//boomstronk2        
        g.beginPath();
        g.fillStyle = "#6e6d2f";
        g.moveTo(1200,850);
        g.lineTo(1250,850);
        g.lineTo(1250,450);
        g.lineTo(1200,450);
        g.closePath();
        g.stroke();
        g.fill();

//boomstruik2        
        g.beginPath();
        g.fillStyle = "#28ab00";
        g.moveTo(1300,500);
        g.lineTo(1150,500);
        g.lineTo(1150,300);
        g.lineTo(1300,300);
        g.closePath();
        g.stroke();
        g.fill();

//huisdeur
        g.beginPath();
        g.fillStyle = "#3f3b10";
        g.moveTo(600,850);
        g.lineTo(700,850);
        g.lineTo(700,650);
        g.lineTo(600,650);
        g.closePath();
        g.stroke();
        g.fill();

//huisdak        
        g.beginPath();
        g.fillStyle = "#9a5a1e";
        g.moveTo(100,500);
        g.lineTo(750,500);
        g.lineTo(750,500);
        g.lineTo(100,350);
        g.closePath();
        g.stroke();
        g.fill();

//fuckjoujan        
        g.beginPath();
        g.fillStyle = "#74daff";
        g.moveTo(150,775);
        g.lineTo(500,775);
        g.lineTo(500,650);
        g.lineTo(150,650);
        g.closePath();
        g.stroke();
        g.fill();

//wolken jan gaat hier niet naartoe        
        g.beginPath();
        g.fillStyle = "#ffffff";
        g.moveTo(100,100);
        g.lineTo(1870,100);
        g.lineTo(1870,200);
        g.lineTo(100,200);
        g.closePath();
        g.stroke();
        g.fill();

//ik ga de zon stelen        
        g.beginPath();
        g.fillStyle = "#fffb00";
        g.moveTo(100,100);
        g.lineTo(200,100);
        g.lineTo(200,200);
        g.lineTo(100,200);
        g.closePath();
        g.stroke();
        g.fill();
    

        
    }
}
let app = new App();
app.runApplication(); 
