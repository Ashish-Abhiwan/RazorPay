import { Button, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react'

const ToogleBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <div>
        <Flex align="end" justify="center" direction="column" marginRight={'20'} marginTop={'10'}>
          <Button size="lg" onClick={() => toggleColorMode()}>
           Toggle Mode {colorMode}
          </Button>
        </Flex>
      </div>
    );
  };

export default ToogleBtn