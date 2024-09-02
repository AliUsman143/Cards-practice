
"use client"
import React from 'react'
import axios from 'axios'

const Fetchingdata = () => {

const Apidata = async()=>{
const data = await axios.get("imdb231.p.rapidapi.com/api/imdb/title-countries-of-origin/v1?id=tt12037194&languageCountry=en_US")
console.log("🚀 ~ data ~ resp:", data)
return data
}

const store = Apidata()
console.log("🚀 ~ Fetchingdata ~ store:", store)

  return (
    <div>Fetchingdata</div>
  )
}

export default Fetchingdata
