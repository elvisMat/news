import React, { useContext, useRef } from 'react'
import Item from './Item'
import { Container, Text, Box, Input, Flex, Stack, Button, Center, Spinner, } from '@chakra-ui/react'
import { useNews } from '../store'
function Items() {
    let { data, setData, error, loading } = useNews();
    const id = useRef(1)

    return (
        <>
            {loading ? <Center>
                <Spinner />
            </Center> :
                <Box>
                    <Flex flexWrap={'wrap'}  justifyContent='space-evenly' alignItems={'baseline'}>

                        {
                            data.map((el) => {

                                return el.author == "Featured-ads" ?
                                    null :
                                    <Box key={id.current++}  width={['100%','48%','23%']}>

                                        <Item author={el.author} title={el.title} img={el.urlToImage} />
                                    </Box>
                            })
                        }
                    </Flex>
                </Box>
            }

            {error && <Center>A error occured while loading data from API</Center>}
        </>
    )
}

export default Items