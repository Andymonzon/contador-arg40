import { ChakraProvider, Button, Flex, Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <ChakraProvider>
      <Flex align={'center'} justify={'center'} w-={'100vh'} h={'100vh'} flexDirection={'column'}>
        <Flex gap='3' align={'center'} justify={'center'} flexDirection={{ base: 'column', sm: 'row' }}>
          <Button onClick={increment} colorScheme='teal' size='lg' display='flex' align='center' justify='center' gap='3'>
            Add
            <AddIcon boxSize={4} />
          </Button>
          <Button onClick={decrement} colorScheme='red' size='lg' display='flex' align='center' justify='center' gap='3'>
            Remove
            <AddIcon boxSize={4} />
          </Button>
        </Flex>
        <Box>
          <p>Count: <span>{count}</span></p>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default App
