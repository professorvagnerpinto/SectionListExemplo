/**
 * Vídeo #3:SectionList - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/sectionlist
 */

import React, {Component} from 'react';
import {View, StyleSheet, SectionList, Text} from 'react-native';

export default class SectionListExemplo extends Component {

      constructor(props) {
        super(props);
        this.state = {
          listData: [
            {
              title: 'A', data: [ //section
                {key: '1', nome: 'Ana', idade: 3}], //item
            },
            {
              title: 'D', data: [
                {key: '2', nome: 'Diana', idade: 9}],
            },
            {
              title: 'R', data: [
                {key: '3', nome: 'Rafael', idade: 8},
                {key: '4', nome: 'Rian', idade: 7},
                {key: '5', nome: 'Rita', idade: 8}],
            },
          ],

        };
      }


      listRender(item){
          return (
              <Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
          );
      }

      listSectionRender(section){
          return (
              <Text style={styles.section}>{section.title}</Text>
          );
      }

      render(){
          return (
              <View style={styles.body}>
                  <SectionList sections={this.state.listData}
                               renderItem={({item}) => this.listRender(item)}
                               renderSectionHeader={({section}) => this.listSectionRender(section)}/>
              </View>
          );
      }

    }//fim classe

    const styles = StyleSheet.create({
        body: {
            //paddingTop:20 //para IOs
            flex: 1,
            //backgroundColor:'#222222'
        },
        item: {
            fontSize: 18,
            height: 40,
            padding: 10,
        },
        section: {
          fontSize: 16,
          backgroundColor:'#CCCCCC',
          padding: 10
        },
    });


