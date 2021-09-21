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
                                <Link mr='4'>
                                    <svg
                                        data-swarm-icon="true"
                                        height="28"
                                        fill="#ffffff"
                                        mr="3"
                                        width="28"
                                        viewBox="0 0 28 28"
                                        >
                                        <path d="M9.167 24.641c9.811 0 15.18-8.136 15.18-15.18 0-.228 0-.457-.01-.686A10.869 10.869 0 0027 6.007c-.957.427-1.987.708-3.07.843a5.368 5.368 0 002.352-2.955 10.612 10.612 0 01-3.392 1.29A5.325 5.325 0 0019 3.5a5.342 5.342 0 00-5.338 5.337c0 .417.052.822.135 1.218C9.365 9.836 5.432 7.703 2.8 4.478a5.336 5.336 0 00-.718 2.684 5.35 5.35 0 002.372 4.443 5.396 5.396 0 01-2.414-.666v.073a5.346 5.346 0 004.277 5.233 5.201 5.201 0 01-1.405.187c-.343 0-.676-.03-.999-.093a5.335 5.335 0 004.984 3.704 10.7 10.7 0 01-6.628 2.289c-.426 0-.853-.021-1.269-.073a15.176 15.176 0 008.167 2.382"></path>
                                    </svg>
                                </Link>
                                <Link mr='4'>
                                    <svg
                                        data-swarm-icon="true"
                                        height="28"
                                        fill="#ffffff"
                                        mr="3"
                                        width="28"
                                        viewBox="0 0 28 28"
                                        >
                                        <path d="M14.34 5c1.56.008 8.039.066 9.818.543 1.119.299 2 1.18 2.299 2.298C27 9.87 27 14.1 27 14.1v.01c0 .23-.016 4.278-.543 6.248a3.256 3.256 0 01-2.299 2.298c-1.82.488-8.562.538-9.92.543h-.477c-1.357-.005-8.099-.055-9.92-.543a3.256 3.256 0 01-2.298-2.298c-.481-1.796-.536-5.32-.542-6.102v-.313c.006-.782.06-4.305.542-6.102.3-1.118 1.18-2 2.299-2.298C5.622 5.066 12.1 5.008 13.66 5zm-2.94 5.2V18l6.755-3.9-6.755-3.9z"></path>
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
