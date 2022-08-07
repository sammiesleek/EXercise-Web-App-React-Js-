import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { FetchData, exerciseOptions } from '../utils/FetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises  from '../components/SimilarExercises'
import { youtubeSearch } from '../utils/FetchData'

const ExerciseDetail = () => {
  const {id} = useParams();
  const [exerciseData, setexerciseData] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([])

  const [relatedexer, setrelatedexer] = useState([])
  const [relequipment, setrelequipment] = useState([])

  useEffect(() => {
      const fetchExerciseDetails = async()=>{

        const youtubeSearchurl = 'https://youtube-search-and-download.p.rapidapi.com'


        const returnedData = await  FetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions )
        setexerciseData(returnedData)

        const exerciseVidesoData = await FetchData(`${youtubeSearchurl}/search?query=${returnedData?.name}`, youtubeSearch)
        // console.log({exerciseVidesoData})
        setexerciseVideos(exerciseVidesoData)


        const rtdbytarget = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${returnedData?.target}`,exerciseOptions )
        setrelatedexer(rtdbytarget)

        const rtdbyequi = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${returnedData?.equipment}`, exerciseOptions )
        setrelequipment(rtdbyequi)

        // console.log(relequipment)

      }
      fetchExerciseDetails()
  }, [id])
  

  return (
   <Box>
       <Detail exerciseDetails={exerciseData} />
       <ExerciseVideos exerciseVideos={exerciseVideos} exername={exerciseData.name} />
       <SimilarExercises relatedexer={relatedexer} relatedEquip={relequipment} />

   </Box>
  )
}

export default ExerciseDetail