

document.getElementById('getOne').addEventListener('click',getOne);



var cityName=document.getElementById('cityName');



function getOne(){
    // hava durumu apisinin url si
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=6a79d8348b6a616a6a13fc5d5b60ce94`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true)

    xhr.onload=function (){
        if(this.status === 200){
            let responseWeather=JSON.parse(this.responseText)
            console.log(responseWeather)

            // hava durumunu görmek istediğimiz şehrin bilgisini HTML e yazdıran fonksiyon.
            showCityWeather(responseWeather,273);
           
            
            
        }
        else{
            console.log("404 hatası")
            alert();
            setTimeout( ()=>{
                document.getElementById('showWeather').innerHTML="";
            },1500)
            
        }
    }

    xhr.send();
}

// hava sıcaklığı api den kelvin olarak geliyor. Dereceye çevirmek için kelvin parametresi yazdık.
function showCityWeather(cityName,kelvin){
    document.getElementById('showWeather').innerHTML=
    `
    <h3>${cityName.name}</h3>
    <div><label>Hava Sıcaklığı : ${Math.round(cityName.main.temp-kelvin)} °</label></div>
    <div><label>Hİssedilen Hava Sıcaklığı : ${Math.round(cityName.main.feels_like-kelvin)} °</label></div>
    <div><label>Nem : %${cityName.main.humidity}</label></div>
    
        `
   
}

function alert(){
    document.getElementById('showWeather').innerHTML=`
    
    <div class="alert alert-danger">
        ${cityName.value} isminde şehir bulunamadı.
    </div>

    `
}