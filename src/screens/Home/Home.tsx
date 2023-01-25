import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';

import * as S from './styles';
const Home: React.FC = () => {
  const webViewRef = useRef<RNWebView>(null);
  const [hide, setHide] = useState(false);

  const goback = () => {
    webViewRef.current?.goBack();
  };

  const reload = () => {
    webViewRef.current?.reload();
  };

  return (
    <View focusable={false}>
      {!hide ? (
        <S.NavBar>
          <S.Button onPress={goback}>
            <S.Title>Back</S.Title>
          </S.Button>
          <S.Button onPress={() => setHide(!hide)}>
            <S.Title>Hide</S.Title>
          </S.Button>
          <S.Button onPress={reload}>
            <S.Title>Reload</S.Title>
          </S.Button>
        </S.NavBar>
      ) : (
        <S.CloudButton  onPress={() => setHide(!hide)}>
          <S.Point focusable={false}/>
          <S.Point focusable={false}/>
          <S.Point focusable={false}/>
        </S.CloudButton>
      )}

      <S.Container focusable={false}>
        <RNWebView
          ref={webViewRef}
          source={{uri: 'https://www.xbox.com/pt-br/play'}}
          onLoad={() => console.log('loaded')}
          javaScriptEnabled
        />
      </S.Container>
    </View>
  );
};

export default Home;
