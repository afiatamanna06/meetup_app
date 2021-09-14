import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import brandLogo from './logo.jpg'
import { Button } from '@chakra-ui/button'

const Banner = () => {
    return (
        <div>
            <Box d='flex' alignItems='center' justifyContent='space-between' ml={6} mr={6}>
                <Image boxSize='90px' src={brandLogo} alt='brand'/>
                <Box>
                    <Button pr={3} colorScheme='gray' fontSize='sm' variant='link'>Log In</Button>
                    <Button  colorScheme='gray' fontSize='sm' variant='link'>Sign Up</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Banner
