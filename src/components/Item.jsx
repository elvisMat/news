import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import FallBack from './FallBack'
function Item({ title, img,author }) {
    return (
        <Box pb={"50px"} borderRadius={8}>
            <Box px={2}>

                <Text>By:  {author || "Unknown"}</Text>
            </Box>
            <Image  borderRadius={'8px'} fallbackSrc='https://via.placeholder.com/100' height={'200px'} src={img} width={'100%'} />
            <Box px={2}>
                <Text fontWeight={'bold'} color={'blackAlpha.800'}>{title}</Text>

            </Box>
        </Box>
    )
}
export default Item