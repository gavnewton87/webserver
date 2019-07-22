const request = require('request')

const forecast =(longitude,latitude,callback) =>{

    const url = `https://api.darksky.net/forecast/ed7a4701fa733fc5a5aafd591eaa3e50/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?lang=en&units=si`


    request({url,json:true},(error,{body})=>{
 
        if (error){
            callback(`unable to connect to weather app please check our internet connection`,undefined)
           }
        else if (body.error) {
            callback(`unable to find that location try another location`,undefined)

        }
        else{ callback(undefined, {
            currenttemp: body.currently.temperature,
            chancePerc: body.currently.precipProbability,
            summary: body.daily.summary,
            location: body.timezone

        })

        }


    })
    

}
module.exports = forecast