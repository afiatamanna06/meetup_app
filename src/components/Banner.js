import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import brandLogo from '../assets/brand-logo.svg'
import { Button } from '@chakra-ui/button'

const Banner = () => {
    return (
        <div>
            <Box d='flex' alignItems='center' justifyContent='space-between' ml={16} mr={16}>
                <Image boxSize='90px' src={brandLogo} alt='brand'/>
                <Box>
                    <Button pr={3} mr={3} color='gray' colorScheme='white' fontSize='lg' variant='ghost' background='white'>Log In</Button>
                    <Button  colorScheme='white' color='gray' fontSize='lg' variant='ghost' background='white'>Sign Up</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Banner
