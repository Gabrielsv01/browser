import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';

import * as S from './styles';
const Home: React.FC = () => {
  const webViewRef = useRef<RNWebView>(null);

  const goback = () => {
    webViewRef.current?.goBack();
  };

  const reload = () => {
    webViewRef.current?.reload();
  };

  return (
    <View>
      <S.NavBar>
        <S.Button onPress={goback}>
          <S.Title>Back</S.Title>
        </S.Button>
        <S.Button onPress={reload}>
          <S.Title>Reload</S.Title>
        </S.Button>
      </S.NavBar>
      <S.Container>
        <RNWebView
          ref={webViewRef}
          source={{uri: 'https://www.xbox.com/pt-br/play'}}
          onLoad={() => console.log('loaded')}
          javaScriptEnabled
          originWhitelist={['*']}
        />
      </S.Container>
    </View>
  );
};

export default Home;
