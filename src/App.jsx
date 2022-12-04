import { useState, useEffect, useRef, createContext } from 'react'
import { Container, Text, Box, Input, Flex, Stack, Button, Center, Spinner, } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
//useBitcoinData is a custom hook
// import { useBusinessNews, NewsContext, useEntertainmentNews, useNewsData } from './store'
export let NewsContext = createContext([])
import Items from './components/Items'
const api_key = import.meta.env.VITE_API_KEY
var today = new Date().toISOString().split('T')[0]
function App() {
  const total = useRef(10)

  var url = `https://newsapi.org/v2/everything?q=business&from=${today}&sortBy=publishedAt&apiKey=${api_key}&pageSize=${total.current}`
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // console.log(useNews().length)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // console.log([]);
    setLoading(true);
    switch (index) {
      case 0:
        url = `https://newsapi.org/v2/everything?q=business&from=${today}&sortBy=publishedAt&apiKey=${api_key}&pageSize=${total.current}`
        break;
      case 1:
        url = `https://newsapi.org/v2/everything?q=entertainment&from=${today}&sortBy=publishedAt&apiKey=${api_key}&pageSize=${total.current}`
        break;
      case 2:
        url = `https://newsapi.org/v2/everything?q=science&from=${today}&sortBy=publishedAt&apiKey=${api_key}&pageSize=${total.current}`
        break;
      case 3:
        url = `https://newsapi.org/v2/everything?q=sports&from=${today}&sortBy=publishedAt&apiKey=${api_key}&pageSize=${total.current}`
        break;
      case 4:
        url = `https://newsapi.org/v2/everything?q=technology&from=${today}&sortBy=publishedAt&apiKey=${api_key}&pageSize=${total.current}`
        break;
    }
    fetch(url).then((response) => response.json()).then((data) => {
      setLoading(false)
      setData(data.articles);
    }).catch((e) => {
      setLoading(false)
      setError(true)
    })
    // console.log(data)
  }, [index])
  return (
    <NewsContext.Provider value={{ data, setData, error, loading }}>
      <Box bg='white'>
        <Box px={2} py={'40px'}>
          <Text fontSize={30} fontWeight={'bold'}>News Today</Text>
          <Text fontSize={25} color='blackAlpha.600' fontWeight={'bold'}>{new Date().toDateString()} </Text>
        </Box>
        <Tabs onChange={(i) => setIndex(i)} ml={2} variant='soft-rounded' colorScheme='blackAlpha'>
          <TabList overflow={'scroll'}  >
            <Tab>Business</Tab>
            <Tab>Entertainment</Tab>
            <Tab>Science</Tab>
            <Tab>sports</Tab>
            <Tab>Technology</Tab>
          </TabList>
          <TabPanels p={0}>
            <TabPanel>
              <Items />
            </TabPanel>
            <TabPanel>
              <Items />
            </TabPanel>
            <TabPanel>
              <Items />
            </TabPanel>
            <TabPanel>
              <Items />
            </TabPanel>
            <TabPanel>
              <Items />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box >
    </NewsContext.Provider>

  )
}

export default App
