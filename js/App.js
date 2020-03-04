import React, {Component} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import FavesProvider from './context/FavesContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <NavigationContainer>
            <RootNav />
          </NavigationContainer>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
