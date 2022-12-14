import { Avatar, Box, Heading, Text, Button } from '@chakra-ui/react'

export default function ContactsList({ contacts, removeContact }) {
  return (
    <>
      {contacts.map((e, i) => (
        <Box key={i} w={300} m='20px auto'>
          <Avatar name={e.f} />
          <Heading as='h4' size='lg'>
            {e.f} {e.l}
          </Heading>
          <Text fontSize='xl'>+380{e.p}</Text>
          <Button value={i} onClick={removeContact}>
            Remove
          </Button>
        </Box>
      ))}
    </>
  )
}
