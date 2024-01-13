import React, { useEffect } from 'react';
import Header from '../src/components/Header/header';
import FirstSectionMain from '../src/components/SectionOneMain/section';
import NoteComponent from '../src/components/searchSectionMain/search';
import FooterComponent from '../src/components/footer/footer';


export default function Home() {

  return (
    <>
    <Header />
    <FirstSectionMain />
    <NoteComponent />
    <FooterComponent />
    </>
  );
}
