const request = require('request')

const geoCode = (address, callback) =>{

    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ2F2bmV3dG9uODciLCJhIjoiY2p3c2FydHRwMXM5dTQ0bzZqaTd4czl6ZiJ9.YG5mM2IV7rPiDKpJUmjMOA&limit=1`
     request({url, json :true },(error, {body})=>{
         if (error){
             callback("unable to connect to location services",undefined)
         }
         else if(body.features.length === 0 ){
             callback("unable to find loation try another search",undefined)

         }
         else{
             const longlat = body.features[0].center
        
             callback(undefined,{
                 longitude: body.features[0].center[1],
                 latitude:  body.features[0].center[0],
                 location:  body.features[0].place_name
             })
         }

 
     })

}

module.exports = geoCode