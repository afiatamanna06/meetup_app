import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import brandLogo from '../assets/brand-logo.svg'
import { Button } from '@chakra-ui/button'

const Banner = () => {
    return (
        <div>
            <Box d='flex' alignItems='center' justifyContent='space-between' ml={10} mr={1}>
                <Image boxSize='90px' src={brandLogo} alt='brand'/>
                <Box d='flex' flexDir='row' right='0'>
                    <Button _hover={{ color: 'blue.100' }} _focus={{ outline: 0 }} pr={1} color='gray'  fontSize='lg' variant='ghost'>Log In</Button>
                    <Button _hover={{ color: 'blue.100' }} _focus={{ outline: 0 }} color='gray' fontSize='lg' variant='ghost'>Sign Up</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Banner
