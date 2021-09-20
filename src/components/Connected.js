import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import deviceLeft from '../assets/device-left.webp'
import deviceRight from '../assets/device-right.webp'
import meetupLogo from '../assets/meetup-logo.svg'
import androidAppstore from '../assets/android-app-download.svg'
import iosAppstore from '../assets/ios-app-download.svg'

const Connected = () => {
    return (
        <div>
            <Box my='20'>
                <Container maxWidth='container.xl'>
                    <Box pos='relative' justifyContent='space-between' d='flex' alignItems='center'>
                        <Box></Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Connected
