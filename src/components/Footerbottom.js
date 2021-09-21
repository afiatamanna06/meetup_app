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
                            <Box d='flex'>
                                <Link mr='4'>
                                    <svg
                                        data-swarm-icon="true"
                                        height="28"
                                        fill="#ffffff"
                                        mr="3"
                                        width="28"
                                        viewBox="0 0 28 28"
                                        >
                                        <path d="M26.5 14c0-6.904-5.596-12.5-12.5-12.5S1.5 7.096 1.5 14c0 6.24 4.571 11.41 10.547 12.348v-8.735H8.873V14h3.174v-2.754c0-3.133 1.866-4.863 4.721-4.863 1.368 0 2.798.244 2.798.244v3.076H17.99c-1.553 0-2.037.964-2.037 1.952V14h3.467l-.554 3.613h-2.913v8.735C21.93 25.41 26.5 20.24 26.5 14"></path>
                                    </svg>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footerbottom
