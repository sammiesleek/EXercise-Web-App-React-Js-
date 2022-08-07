import React from 'react'
import { Box,Stack, Typography } from '@mui/material'
import { ErrorInfo } from 'react'

const ExerciseVideos = ({exerciseVideos,exername}) => {
  // console.log(exerciseVideos.contents)
  // console.log(ErrorInfo)
  return (

   <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb="33px">

        Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}> {exername} </span>exercise videos

      </Typography>
      <Stack sx={{flexDirection:{lg:'row'}, flexWrap:'wrap', alignItems:'center', gap:{lg:'20px',xs:'0'}}}>
        {exerciseVideos?.contents?.slice(0,3).map((video,index)=>(
            <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${video?.video?.videoId}`} target="_blank" rel='noreferrer' >
            <img src={video?.video?.thumbnails[0]?.url} alt="" style={{height:'300px', width:'300px'}} />
            <Typography  variant='h5' color="#000">
              {video.video.title}
            </Typography>
            <Typography  variant='h6' color="#000">
              {video.video.channelName}
            </Typography>
            </a>
        ))}

      </Stack>
   </Box>
  )
}

export default ExerciseVideos