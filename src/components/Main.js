import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'

const Main = () => {
    return (
        <div>
            <Box>
                <Container maxWidth="container.xl">
                    <Box d="flex" alignItems="center" flexDirection='row' py='20'>
                        <Box>
                            <Box>
                                Join a group to meet people, make friends, find support, grow a
                                business, and explore your interests. Thousands of events are
                                happening every day, both online and in person!
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box> 
        </div>
    )
}

export default Main
