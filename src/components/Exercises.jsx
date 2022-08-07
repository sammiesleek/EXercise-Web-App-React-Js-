import { useState, useEffect } from "react"
import { Pagination, Box,Typography, Stack } from "@mui/material"

import  {exerciseOptions,FetchData} from '../utils/FetchData'
import ExerciseCard from "./ExerciseCard"


const Exercises = ({setexercises,exercises,bodyPart}) => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisePerpage = 10

  const indexOflastexercise = currentPage * exercisePerpage;
  const indexOfFirstexercise =  indexOflastexercise -exercisePerpage;
  const currentExercises = exercises.slice(indexOfFirstexercise, indexOflastexercise)



 



  const paginate =(e, value)=>{
    setcurrentPage(value)
    // window.scrollTo({top:1800, behavior:'smooth'})
  }
    useEffect(() => {

      const fetchExreciseData = async()=>{
    
        let exerciseData =[];
        if(bodyPart === 'all'){
           exerciseData =    await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions )
        }else{
           exerciseData =    await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList/${bodyPart}`    , exerciseOptions )
        }

        setexercises(exerciseData)


      }
      fetchExreciseData()

    }, [bodyPart])
    


  return (
      <Box id="exercises" sx={{mt:{lg:'110px'}}} mt="50px" p="20px" >
        <Typography variant="h3" mb="46px" >
          Showing Results
        </Typography>
        <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}}  flexWrap='wrap' justifyContent='center'  >
          {currentExercises?.map((exercise,index) =>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))}

        </Stack>
        <Stack mt="100px" alignItems="center">
            {exercises.length > 10 && 
             <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisePerpage )} page={currentPage} onChange={paginate} size="large">

            </Pagination>
              }
        </Stack>
      </Box>
  )
}

export default Exercises