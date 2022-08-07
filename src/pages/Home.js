import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
const Home = () => {
  const [exercises, setexercises] = useState([])
  const [bodyPart, setbodyPart] = useState('all')
  return (
    <Box display='flex' flexDirection='column' >
      <HeroBanner/>
      <SearchExercises setexercises={setexercises}  bodyPart={bodyPart} setbodyPart={setbodyPart} />
      <Exercises setexercises={setexercises}  bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home