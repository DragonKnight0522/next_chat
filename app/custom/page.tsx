import React from 'react';
import Button from "@/components/custom/button";
import NavBar from '@/components/custom/navBar';
import Container from '@/components/custom/container';
import SearchBox from '@/components/custom/searchBox';
import DatabaseItem from '@/components/custom/databaseItem';
import Main from '@/components/custom/main';

const page = () => {
  return (
    <div className="px-24 pt-10">
      <div className="flex justify-end">
        <Button className='px-6 py-3 rounded-full text-base'>Log Out</Button>
      </div>
      <div className='flex'>
        <div className="w-56">
          <NavBar />
        </div>
        <Container>
          <div className="flex justify-center mt-10 mb-12">
            <SearchBox />
          </div>
          <Main>
            {new Array(12).fill(1).map((item, index) => <DatabaseItem  key={index} />)}
          </Main>
        </Container>
      </div>
    </div>
  );
}

export default page;
