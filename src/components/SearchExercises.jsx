import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Button ,Stack, TextField, Typography, } from '@mui/material'
import { exerciseOptions, FetchData } from '../utils/FetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({bodyPart,setbodyPart,setexercises}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setbodyParts] = useState([])

  useEffect(() => {  
    const fetchExerData= async () => {
       const bodyPartsdata = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions );

       setbodyParts(['all', ...bodyPartsdata])
       
      }
      fetchExerData()
    }, [])
    


  const handleExercise = async()=>{


      const exerciseData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions )

      const searchedExercise = exerciseData.filter(exercise => exercise.name.toLowerCase().includes(search) 
      || exercise.name.toLowerCase().includes(search) 
      || exercise.equipment.toLowerCase().includes(search) 
      || exercise.target.toLowerCase().includes(search) 
      || exercise.id.toLowerCase().includes(search) 
      || exercise.bodyPart.toLowerCase().includes(search) 
      
      );

      console.log(searchedExercise)



      setSearch('');
      setexercises(searchedExercise);



  }
  return (
    <Stack mt='37px' alignItems='center' justifyContent='center' p='20px'>
        <Typography fontWeight={700}  sx={{fontSize:{lg:'44px', xs:'30px'}, textAlign:'center'}} textAlign='center' marginBottom='50px'>
            Awesome Exercises you <br/> should know
        </Typography>
        <Box mb='72px' position='relative' >
            <TextField height='76px' value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} placeholder='Search Exercise' type='text' 
            sx={{input:{fontWeight:'700', border:'none', borderRadius:'4px'}, width:{lg:'800px', xs:'350'}, backgroundColor:'#fff'  , borderRadius:'40px'    }} 
            />

            {search &&

               <Button  variant='contained'color='error' href="#exercises"  className='' sx={{backgroundColor:'#ff2625', color:'#fff', textTransform:'none', width:{lg:'150px', xs:'80px'},  fontSize:{lg:'20px',xs:'14px'}, height:'56px', position:'absolute', right:'0'}} onClick={handleExercise} > 

                Search
            </Button>

            
           
            }

             


        </Box>
        <Box sx={{position:'relative',width:'100%', p:'20px'}}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} isBodyPart>

            </HorizontalScrollBar>
        </Box>
    </Stack>
  )
}

export default SearchExercises