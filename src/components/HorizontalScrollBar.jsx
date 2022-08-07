import React from 'react'
import { useContext } from 'react'
import { Box,Typography } from '@mui/material'
import Bodypart from './Bodypart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({data, bodyPart,setbodyPart, isBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map(item=>(
       <Box key={item} itemId={item} title={item} m="0 40px">

          {isBodyPart ? <Bodypart  item={item} bodyPart={bodyPart} setbodyPart={setbodyPart}   />: <ExerciseCard exercise={item} />}
       </Box>
    ))}
    
    </ScrollMenu>
  )
}

export default HorizontalScrollBar