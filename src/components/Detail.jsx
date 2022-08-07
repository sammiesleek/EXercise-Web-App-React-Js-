import React from 'react'
import { Stack, Typography,Button } from '@mui/material'
import BodyPartImage from '../assets/assets/icons/body-part.png'
import TargetImage from '../assets/assets/icons/target.png'
import equipmentImg from '../assets/assets/icons/equipment.png'

const Detail = ({exerciseDetails}) => {

 

  const {bodyPart,gifUrl,name,target,equipment}=exerciseDetails;

   const extraDetail =[
    {
      name:bodyPart,
      icon:BodyPartImage,
    },
    {
      name:equipment,
      icon:equipmentImg,
    },
    {
      name:target,
      icon:TargetImage,
    }
  ]
  return (
   <>
     <Stack gap="60px" sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt="" /> 

      <Stack sx={{gap:{lg:'35px', xs:'20px'}, width:'100%'}}>
          <Typography variant='h3'>
            {name}
          </Typography>
          <Typography variant='h5'>
              Exercises keep you strong. {name}  {'  '}
              is one of the best exercises to target your {target}. It will help you improve ypur mood and gain energy.
          </Typography>
          {extraDetail.map((item,index)=>(
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button sx={{background:'#ff2db', borderRadius:'50%', width:'100px', height:'100px'}} >
                <img src={item.icon} alt="" style={{width:'50px', height:'50px'}} />
              </Button >
              <Typography variant='h6'>
                  {item.name}
              </Typography>
            </Stack>
          ))}
      </Stack>
    </Stack>
   </>
  )
}

export default Detail