import React from 'react'
import { Box, Container, Grid, Heading, Link } from '@chakra-ui/layout'
import Upcommingone from '../assets/upcomming-one.png'
import Upcommingtwo from '../assets/upcomming-two.jpg'
import Upcommingthree from '../assets/upcomming-three.jpg'
import Upcommingfour from '../assets/upcomming-four.jpg'

const Upcomming = () => {
    return (
        <div>
            <Box mt='20'>
                <Container maxWidth='container.xl'>
                    <Box display='flex' alignItems='center' justifyContent='space-between' mb='7'>
                        <Box>
                            <Heading as='h3' alignItems='center' size='lg'>
                                Upcoming online events
                            </Heading>
                        </Box>
                        <Box>
                            <Link fontWeight='semibold' color='teal.500'>
                                Explore more events
                            </Link>
                        </Box>
                    </Box>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <Box>
                            <Box>
                                
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Upcomming
