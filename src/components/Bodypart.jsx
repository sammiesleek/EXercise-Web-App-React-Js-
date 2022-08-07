import React from 'react' 
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/assets/icons/gym.png'
import { VisibilityContext, ScrollMenu } from 'react-horizontal-scrolling-menu';


const Bodypart = ({item,bodyPart,setbodyPart}) => {
  return (
    <Stack type="button" 
    alignItems="center"
    justifyContent="center" className='bodyPart-card' sx={{
        borderRight: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width:'200px',
        height:'220px',
        cursor:'pointer',
        gap:'47px', 
    }}
     onClick={()=> {setbodyPart(item);
          window.scrollTo({top:1800,left:100, behaviour:'smooth'})
     }}>
        <img src={Icon} alt="dumbbell" style={{width:'50px', height:"50px" }} />
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default Bodypart