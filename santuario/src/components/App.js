import React from 'react';
import Main from './Main';

const sections = [
  { title: 'Nosotros', url: 'about-us' },
  { title: 'Calendario', url: 'calendar'}
];

export default function App() {
  return (
    <Main title="Comunidad San Francisco Xavier"
      sections={sections} />
  );
}