






// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data.puzzle)
//     })



// })


// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data)=>{
//         if (data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
        
        
        

       


//     })



// })

const weatherform = document.querySelector('form')
const search_input = document.querySelector('input')
const error_message = document.getElementById('error_message')
const weather_forecast = document.getElementById('weather_forecast')

weatherform.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const location = search_input.value
    document.querySelector('#error_message').textContent = "loading........"
    document.querySelector('#weather_forecast').textContent = ""
    document.querySelector('#city_name').textContent = ""
    document.querySelector('#current_temperature').textContent = ""
    document.querySelector('#chance_of_rain').textContent = ""
    document.querySelector('#weather_forecast').textContent = ""



    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
                document.querySelector('#error_message').textContent = data.error
                document.querySelector('#weather_forecast').textContent = ""
                document.querySelector('#city_name').textContent = ""
                document.querySelector('#current_temperature').textContent = ""
                document.querySelector('#chance_of_rain').textContent = ""
                document.querySelector('#weather_forecast').textContent = ""

            }
            else{
                document.querySelector('#error_message').textContent = ""
                document.querySelector('#city_name').textContent = `Weather for ${data.location.City}: `
                document.querySelector('#current_temperature').textContent = `Current Temp:${data.forecast.temp}`
                document.querySelector('#chance_of_rain').textContent = `Chance of rain: ${data.forecast.rain}`
                document.querySelector('#weather_forecast').textContent = ` Summary for the week: ${data.forecast.Summary}`
                
                
            }

        })
    })

    // {
    //     "forecast": {
    //     "Summary": "Light rain today and next Sunday, with high temperatures rising to 33°C on Friday.",
    //     "rain": 0.01,
    //     "temp": 22.22
    //     },
    //     "location": {
    //     "City": "berlin",
    //     "Address": "berlin",
    //     "Location": "Berlin, Germany"
    //     }
    //     }



    



})

document.getElementById("button1").addEventListener('click', buttonprint)

function buttonprint(){
    


    console.log('hello')
}
    
  















