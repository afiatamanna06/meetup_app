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
                    <Button>Log In</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Banner
