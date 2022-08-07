
export const exerciseOptions ={
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'f85c73ee10msh5519d6ecc55872fp161f49jsn6de535ef7381',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeSearch ={
  method: 'GET',
  headers:{
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}


export const FetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data
} 