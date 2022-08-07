import React from 'react'
import { Box,Typography,Stack } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'
import ExerciseCard from './ExerciseCard'

const SimilarExercises = ({relatedexer,relatedEquip}) => {
  const reducedexer = relatedexer.slice(0,5)
  const reducedequip = relatedEquip.slice(0,5)
  return (
    <Box sx={{mt:{lg:'100px',xs:'0px'}}}>
      <Typography variant='h3' mb={5}>
        Exercises that target same muscle group 
      </Typography>
        <Stack  direction='row' sx={{p:'2', position:'relative'}}>

          {relatedexer.length  > 0 ? <HorizontalScrollBar data={reducedexer}  /> : <Loader/> }

        </Stack>
      <Typography variant='h3' mb={5} mt={10}>
        Exercises that use the same equipment
      </Typography>
        <Stack  direction='row' sx={{p:'2', position:'relative'}}>

          {reducedequip.length  > 0 ? <HorizontalScrollBar data={reducedequip}  /> : <Loader/> }

        </Stack>

    </Box>
  )
}

export default SimilarExercises