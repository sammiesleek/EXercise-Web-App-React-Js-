import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { FetchData, exerciseOptions } from '../utils/FetchData'
import Detail from './Detail'
import ExerciseVideos from './ExerciseVideos'
import SimilarExercises  from './SimilarExercises'

const ExerciseDetails = () => {

  return (
   <Box>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis quidem enim error exercitationem sunt dicta officia voluptatem aliquam corrupti?
       <Detail/>
       <ExerciseVideos/>
       <SimilarExercises/>

   </Box>
  )
}

export default ExerciseDetails