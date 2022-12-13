import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Utils } from 'tuya-panel-kit';
import ControllerBar from './ControllBar';
import WhiteSlider from './WhiteSlider';
import ColourSlider from './ColourSlider';
import Scenes from './Scenes';
import SceneSlider from './SceneSlider';
import SceneColors from './SceneColors';
import ControleLampLumini from './ControleLampLumini';

const { convertX: cx } = Utils.RatioUtils;

const HomeBottomView = () => (
  <View style={[styles.container]}>

    {/* barra de controle ou navegação */}
    <ControllerBar />

    {/* tela de controle modo white/cct */}
    <WhiteSlider />
    
    {/* 
        //controle do componente colorido 
        <ColourSlider />
    */}

    {/* tela de cenas */}
    <Scenes />
    
    {/* slide configuração nivel / tempe cor / tempo*/}
    <SceneSlider />

    {/* slide configuração cor */}
    <SceneColors />
  
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: cx(140),
  },
});

export default HomeBottomView;
