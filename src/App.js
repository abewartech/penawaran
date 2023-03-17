import {
  Heading,
  Button,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Stack,
  Box,
  ButtonGroup,
  Container,
  Checkbox,
  HStack,
  VStack
} from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.lg" mt="24px">
      <Grid align="center" justify="center" gap={2} autoFlow="row dense">
        <Card align="center">
          <CardHeader>
            <Heading size="md">Penawaran</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading mb={5}>What’s your fleet?</Heading>
                <HStack spacing={4}>
                  <VStack align="start">
                    <Checkbox size="lg" colorScheme="green" mb={2} mt={2}>
                      Air transportation
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="green" mb={2}>
                      Land transportation
                    </Checkbox>
                  </VStack>
                  <VStack align="start">
                    <Checkbox size="lg" colorScheme="green" mb={2} mt={2}>
                      Sea transportation
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="green" mb={2}>
                      Inland transportation
                    </Checkbox>
                  </VStack>
                </HStack>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Submit
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Help?
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Grid>
    </Container>
  );
}

export default App;
