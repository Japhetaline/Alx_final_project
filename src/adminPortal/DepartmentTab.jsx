import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function DepartmentTab() {

  return (
   <>
   <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>MIT</Tab>
    <Tab>Engineering</Tab>
    <Tab>Physiology</Tab>
    <Tab>Medicine</Tab>
    <Tab>Nursing</Tab>
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
    //second tab
    <TabPanel>
    <TabList>
    <Tab>Courses</Tab>
    <Tab>Materials</Tab>
  </TabList>
    </TabPanel>

//third tab
    <TabPanel>
    <TabList>
    <Tab>Courses</Tab>
    <Tab>Materials</Tab>
  </TabList>
    </TabPanel>

//fourth tab
    <TabPanel>
    <TabList>
    <Tab>Courses</Tab>
    <Tab>Materials</Tab>
  </TabList>
    </TabPanel>

//fifth tab
    <TabPanel>
    <TabList>
    <Tab>Courses</Tab>
    <Tab>Materials</Tab>
  </TabList>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>

  );
}

export default DepartmentTab;
