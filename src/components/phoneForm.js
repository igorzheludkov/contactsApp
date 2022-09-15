import { Input, Stack, InputGroup, InputLeftAddon, Box, Heading, Button } from '@chakra-ui/react'
import { useState } from 'react'

export default function PhoneForm({ getContact }) {
  const [formData, setFormData] = useState({ f: '', l: '', p: '' })

  return (
    <Box w={300} mx='auto'>
      <Heading m='20px auto'>PhoneBook</Heading>
      <Stack spacing={3}>
        <Input
          value={formData.f}
          onChange={(e) => setFormData({ ...formData, f: e.target.value })}
          placeholder='First name'
          size='lg'
        />
        <Input
          value={formData.l}
          onChange={(e) => setFormData({ ...formData, l: e.target.value })}
          placeholder='Last name'
          size='lg'
        />
        <InputGroup size='lg'>
          <InputLeftAddon children='+380' />
          <Input
            value={formData.p}
            onChange={(e) => setFormData({ ...formData, p: e.target.value })}
            type='tel'
            placeholder='Phone'
          />
        </InputGroup>
      </Stack>
      <Button value={JSON.stringify(formData)} onClick={getContact} m='20px 0' colorScheme='blue'>
        Add contact
      </Button>
    </Box>
  )
}
