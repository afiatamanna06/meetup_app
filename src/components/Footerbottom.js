import { Button } from '@chakra-ui/button'
import { Box, Container, Divider, Heading, Link, List, ListItem } from '@chakra-ui/layout'
import React from 'react'
import androidAppstore from '../assets/android-app-download.png'
import iosAppstore from '../assets/ios-app-download.png'

const Footerbottom = () => {
    return (
        <div>
            <Box color='white' background='#212121' py='10' mt='5'>
                <Container maxW='container.xl'>
                    <Box d='flex' alignItems='center'>
                        <Heading size='md'>
                            Create your own Meetup group.
                        </Heading>
                        <Button colorScheme='white' variant='outline' ml='4'>
                            Get Started
                        </Button>
                    </Box>
                    <Divider my='10'/>
                    <Box d='flex' alignItems='top' flexDir='row'>
                        <Box flex='1' mb='0'>
                            <Heading size='sm'>Your Account</Heading>
                            <List mt='4' spacing={2}>
                                <ListItem>
                                    <Link color='#A2A2A2'>Groups</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Calendar</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Topics</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Cities</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Online Events</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Local Guides</Link>
                                </ListItem>
                            </List>
                        </Box>

                        <Box flex='1' mb='0'>
                            <Heading size='sm'>Your Account</Heading>
                            <List mt='4' spacing={2}>
                                <ListItem>
                                    <Link color='#A2A2A2'>Sign up</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Log in</Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='#A2A2A2'>Help</Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Box justifyContent='space-between' d='flex' flexDirection='row' alignItems='center' mt='15'>
                        <Box d='flex' flexDirection='column'>
                            <Box mb='2'>Follow us</Box>
                            <Box>
                                
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footerbottom
