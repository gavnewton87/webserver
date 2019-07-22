
// nodemon src/app.js -e js,hbs
const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')


const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

// Define PAths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
app.use(express.static(publicDirectoryPath))


// set up handlbars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsDirectory)
hbs.registerPartials(partialsPath)




//setup static directory 
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather APP test',
        name: 'Gavin Newton',
        
    })
})


app.get('',(req,res) => {

    res.send("weather")
})

app.get('/help',(req,res)=>{
    res.render('help',{
        email: 'help@geebots.com',
        telephonenumber: '01162237556',
        title: 'Help',
        name:'Gavin Newton',
        message:'Here is the help page, you should be able to find everything you need' 
        
    })

})


app.get('/about',(req,res) =>{

    res.render('about',{
        title: 'All about us ',
        message: 'here you will find all about our website ',
        name: 'Gavin Newton'
    })

})


app.get('/controlroom',(req,res)=>{

    res.render('controlroom',{
        title:'Control Room, send a message or use the arrow function',
        Message: "raspberryPiMessage",
        name: 'Gavin Newton',
    })
    
})


app.get('/weather',(req,res)=>{

    const city = req.query.address

    if(!city){
        return res.send({
            error:'you must provide an address'
        })
    }else{
        geoCode(city, (error,{latitude,longitude,location}= {})=> {
            if (error){
               return res.send({error})
            }
        
    
             
             
        
         forecast(latitude, longitude, (error, forecastData) => {
             if(error){
                 return res.send({error})
             }

             res.send({
                forecast:{
                    Summary: forecastData.summary,
                    rain: forecastData.chancePerc,
                    temp: forecastData.currenttemp,
               },
       
                   location:{
                       City: city,
                       Address: req.query.address,
                       Location:location}

        })  })

    })   }        
})




    
       
 
    



    
    
    
       
   



app.get('/products', (req,res)=>{
    if (!req.query.search){
        res.send({
            error: 'you must provide a search term'
        })
        console.log('no search term provided')
    }
    else{
    console.log(req.query.search)
    res.send({
        products :[],
    })


}

})


app.get('/help/*',(req,res)=>{

    res.render('help404',{
        title: 'help page',
        message:'Article not found please use the search bar to try again',
        name:'Gavin Newton',
        
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 error',
        name: 'Gavin Newton',
        message:'Thanks for visiting'
    })

    
})


app.listen(3000,()=>{
    console.log('server is up on port 3000')


})
   


