import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function DepartmentTab() {

  return (
   <>
   <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>MIT</Tab>
    <Tab>Engineering</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Courses</Tab>
    <Tab>Materials</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>

  );
}

export default DepartmentTab;
