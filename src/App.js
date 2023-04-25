import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import ShowcaseSection from './containers/ShowcaseSection';

const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <ShowcaseSection />
    </Layout>
  );
};

export default App;
