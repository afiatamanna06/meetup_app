import React from 'react'
import { Badge, Box } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import Illustration from '../assets/illustration.svg'
import { Grid } from '@chakra-ui/layout'
import imageOne from '../assets/image-one.jpg'
import imageTwo from '../assets/image-two.jpg'
import imageThree from '../assets/image-three.jpg'
import rightArrow from '../assets/right-arrow.svg'
import searchLogo from '../assets/loupe.png'
import locationLogo from '../assets/location-pin.png'
import { Button } from '@chakra-ui/button'
import {
    FormControl,
    Input,
  } from "@chakra-ui/react"

const Main = () => {
    return (
        <div>
            <Box>
                <Container maxWidth="container.xl">
                    <Box d="flex" alignItems="center" flexDirection={{ sm: 'column', md: 'row', lg: 'row', xl: 'row', base: 'column' }} py='20'>
                        <Box mr={{sm: '4',
                                 md: '6',
                                 lg: '6',
                                 xl: '6',
                                 base: '4'}} ml={{sm: '4',
                                                  md: '16',
                                                  lg: '16',
                                                  xl: '16',
                                                  base: '4'}} mb='7'>
                            <Heading size='3xl' as='h1'>
                                <Box fontWeight='black'>Dive in! There are so many things to do on Meetup</Box>
                            </Heading>
                            <Box mt='6' fontWeight="medium" fontSize='larger'>
                                Join a group to meet people, make friends, find support, grow a
                                business, and explore your interests. Thousands of events are
                                happening every day, both online and in person!
                            </Box>
                        </Box>
                        <Box w='100%'>
                            <Image w='100%' h='40' src={Illustration} alt='illustration'/>
                        </Box>
                    </Box>
                </Container>
            </Box> 

            <Container maxWidth='container.xl' mt={10}>
                <Grid templateColumns={{ sm: 'repeat(1, 1fr)',
                                         md: 'repeat(3, 1fr)',
                                         lg: 'repeat(3, 1fr)',
                                         xl: 'repeat(3, 1fr)',
                                         base: 'repeat(1, 1fr)'}} gap={5} mr={{sm: '4',
                                                                                md: '16',
                                                                                lg: '16',
                                                                                xl: '16',
                                                                                base: '4'}} ml={{sm: '4',
                                                                                                md: '16',
                                                                                                lg: '16',
                                                                                                xl: '16',
                                                                                                base: '4'}} >
                                                            <Box _hover={{ opacity: '0.85'}}>
                        <Image w='100%' borderRadius='lg' src={imageOne} alt='image three'></Image>
                        <Button colorScheme='teal' variant='link' mt='3' w='37%' pl='6'>
                        Make new friend
                        <Image w='17%' ml='2' src={rightArrow} alt='right arrow'></Image>
                        </Button>
                    </Box>
                    <Box _hover={{ opacity: '0.85'}}>
                        <Image w='100%' borderRadius='lg' src={imageTwo} alt='image three'></Image>
                        <Button colorScheme='teal' variant='link' mt='3' w='37%' pl='12'>
                        Explore the outdoors
                        <Image w='17%' ml='2' src={rightArrow} alt='right arrow'></Image>
                        </Button>
                    </Box>
                    <Box _hover={{ opacity: '0.85'}}>
                        <Image w='100%' borderRadius='lg' src={imageThree} alt='image three'></Image>
                        <Button colorScheme='teal' variant='link' mt='3' w='37%' pl='8'>
                        Connect over tech
                        <Image w='17%' ml='2' src={rightArrow} alt='right arrow'></Image>
                        </Button>
                    </Box>
                </Grid>
            </Container>

            <Container maxWidth='container.xl'>
                <Box flexDirection='row' display='flex' my='10' flexWrap='wrap' justifyContent={{sm: 'flex-start',
                                                                                                md: 'space-between',
                                                                                                lg: 'space-between',
                                                                                                xl: 'space-between',
                                                                                                base: 'flex-start'}} mr={{sm: '4',
                                                                                                                            md: '16',
                                                                                                                            lg: '16',
                                                                                                                            xl: '16',
                                                                                                                            base: '4'}} ml={{sm: '4',
                                                                                                                                            md: '16',
                                                                                                                                            lg: '16',
                                                                                                                                            xl: '16',
                                                                                                                                            base: '4'}}>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Boost your career
                    </Badge>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Find your zen
                    </Badge>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Get moving
                    </Badge>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Share launguage + culture
                    </Badge>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Read with friends
                    </Badge>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Write together
                    </Badge>
                    <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                        Hone your craft
                    </Badge>
                </Box>
            </Container>

            <Container maxWidth='container.xl' mt='20'>
                <Grid templateColumns={{sm: 'repeat(1, 1fr)',
                                        md: 'repeat(2, 1fr)',
                                        lg: 'repeat(2, 1fr)',
                                        xl: 'repeat(2, 1fr)',
                                        base: 'repeat(1, 1fr)'}} gap={6} mr={{sm: '4',
                                                                                md: '16',
                                                                                lg: '16',
                                                                                xl: '16',
                                                                                base: '4'}} ml={{sm: '4',
                                                                                                md: '16',
                                                                                                lg: '16',
                                                                                                xl: '16',
                                                                                                base: '4'}}>
                    <Box>
                        <Heading as='h3' size='lg' mb='7'>What do you want to do?</Heading>
                        <Box d='flex' alignItems='center' flexDirection={{sm: 'column',
                                                                          md: 'row',
                                                                          lg: 'row',
                                                                          xl: 'row',
                                                                          base: 'column'}} w='100%'>
                            <Box w='100%' mr={{sm: '0', md: '2', lg: '2', xl: '2', base: '0'}} flexBasis={{
                                                                                                        sm: '100%',
                                                                                                        md: '50%',
                                                                                                        lg: '50%',
                                                                                                        xl: '50%',
                                                                                                        base: '100%'
                                                                                                    }}>
                                <FormControl>
                                    <Box pos='relative'>
        `                               <Input _focus={{ outline: 0 }} pl={8} placeholder="Search for 'tennis'" type='text' w='100%' backgroundImage={searchLogo} backgroundPosition='.5rem' backgroundRepeat='no-repeat'>
                                        </Input>
                                    </Box>
                                </FormControl>
                            </Box>
                            <Box w='100%' mr={{sm: '0', md: '2', lg: '2', xl: '2', base: '0'}} flexBasis={{
                                                                                                        sm: '100%',
                                                                                                        md: '50%',
                                                                                                        lg: '50%',
                                                                                                        xl: '50%',
                                                                                                        base: '100%'
                                                                                                    }}>
                                <FormControl>
                                    <Box pos='relative'>
        `                               <Input _focus={{ outline: 0 }} pl={8} placeholder="Location" type='text' w='100%' backgroundImage={locationLogo} backgroundPosition='.5rem' backgroundRepeat='no-repeat'></Input>
                                    </Box>
                                </FormControl>
                            </Box>
                        </Box>
                        <Button _hover={{ opacity: "0.8" }} _focus={{ outline: 0 }} color='white' bg='red.200' fontSize='large' w='100%' mt='5' pt='6' pb='6' borderRadius='11px'>
                            <Box fontWeight='black'>Search</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Heading as='h3' size='lg' mb='7' display={{sm: 'none',
                                                                    md: 'block',
                                                                    lg: 'block',
                                                                    xl: 'block',
                                                                    base: 'none'}}>See what’s happening</Heading>
                        <Box display='flex' flexWrap='wrap' justifyContent='flex-start'>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                Starting soon
                            </Badge>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                Today
                            </Badge>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                Tomorrow
                            </Badge>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                This Week
                            </Badge>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                Online
                            </Badge>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                In person
                            </Badge>
                            <Badge _hover={{ opacity: "0.9" }} cursor='pointer' borderRadius='3xl' py={2} px={5} mr='4' mb='4' color='white' bg='blue.100' textTransform='none' fontSize='medium'>
                                Trending near you
                            </Badge>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </div>
    )
}

export default Main
