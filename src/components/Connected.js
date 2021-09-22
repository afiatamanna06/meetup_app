import { Box, Container,Heading } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/image'
import deviceLeft from '../assets/device-left.webp'
import deviceRight from '../assets/device-right.webp'
import meetupLogo from '../assets/meetup-logo.svg'
import androidAppstore from '../assets/android-app-download.png'
import iosAppstore from '../assets/ios-app-download.png'

const Connected = () => {
    return (
        <div>
            <Box my='20'>
                <Container maxWidth='container.xl'>
                    <Box pos='relative' justifyContent='space-between' d='flex' alignItems='center'>
                        <Box display={{sm: 'none',
                                       md: 'block',
                                       lg: 'block',
                                       xl: 'block',
                                       base: 'none'}}>
                            <Image w='260px' src={deviceLeft}></Image>
                        </Box>
                        <Box pos='relative' align='center' mx='auto'>
                            <Image w='80px' left='0' src={meetupLogo}></Image>
                            <Heading as='h6' size='md' my='7'>
                                Stay connected. <br /> Download the app.
                            </Heading>
                            <Box d='flex'>
                                <Image _hover={{ opacity: '0.95', filter: 'brightness(85%)' }} cursor='pointer' w='180px' p='5' src={iosAppstore}></Image>
                                <Image _hover={{ opacity: '0.95', filter: 'brightness(85%)' }} cursor='pointer' w='180px' p='5' src={androidAppstore} borderRadius='29px'></Image>
                            </Box>
                        </Box>
                        <Box display='block'>
                            <Image w='260px' src={deviceRight}></Image>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Connected
