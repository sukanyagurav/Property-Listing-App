import React, { useEffect, useState } from 'react'

const useFetchData = () => {
  const [properties,setProperties] = useState([])
  const [categories,setCategories] = useState([])
  const [data,setData]= useState([])
  const [selectedCategories,setSelectedCategories] = useState([])
  const [superhost,setSuperhost] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [bedroom,setBedroom] = useState(0)

  useEffect(()=>{
    async function getCategories(){
        const data = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
        const dataProperty = await data.json()
        setProperties(dataProperty)
        setData(dataProperty)
        const uniqueCategories =[...new Set(dataProperty.map(data=> data.location))]
        setIsLoading(true)
        setCategories(['All Stays',...uniqueCategories])
    }
    getCategories()
   
  },[])
 function filteredProperties(){
    let filteredProperties=data
    if(selectedCategories.length > 0){
      filteredProperties=filteredProperties.filter(item => selectedCategories.includes(item.location))
    }
    if(superhost){
      filteredProperties = filteredProperties.filter(property =>property.superhost)
    }
    if(bedroom){
      filteredProperties = filteredProperties.filter(property =>property.capacity.bedroom === bedroom)
    }
   
    return filteredProperties
 }
 function handleTabChange(tabName){
  if(tabName == 'All Stays'){
    setSelectedCategories([])
  }else if(selectedCategories.includes(tabName)){
    const filters = selectedCategories.filter(item=>item != tabName)
    setSelectedCategories(filters)
  }else{
    setSelectedCategories([...selectedCategories,tabName])
  }
  console.log(selectedCategories)
 }
  useEffect(()=>{
    const filtered = filteredProperties()
    setProperties(filtered)
   
  },[superhost,bedroom,selectedCategories])
  return {
    categories,setSuperhost,superhost,properties,isLoading,setBedroom,selectedCategories,handleTabChange
  }
}

export default useFetchData
