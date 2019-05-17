/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon, SearchBar, TabBar, WhiteSpace } from 'antd-mobile-rn';

import SalePage from './SalePage';

const PlaceHolder = props => (
    <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...props}
    >
      <Text style={{ color: '#bbb' }}>Block</Text>
    </View>
);

export default class saleMobile extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  renderContent(pageText: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
          <SearchBar  placeholder="Search" showCancelButton />
          <Text style={{ margin: 50 }}>{pageText}</Text>
        </View>
    );
  }
  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#f5f5f5"
        >
          <TabBar.Item
              title="工作"
              // icon={<Icon type="home" />}
              //RN 官方的 TabBar 不支持 Icon（字体），必须是 RN 的 Image 类型, 只能传 imagesource
              icon={require('../saleMobile/img/work1.png')}
              badge={2}
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => this.onChangeTab('blueTab')}
          >
            {this.renderContent('工作')}
          </TabBar.Item>

          <TabBar.Item
              icon={require('../saleMobile/img/crm16.png')}
              title="CRM"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => this.onChangeTab('greenTab')}
          >
            {/*{this.renderContent('CRM')}*/}
              <SalePage />

          </TabBar.Item>

          <TabBar.Item
              icon={require('../saleMobile/img/me.png')}
              title="我"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => this.onChangeTab('yellowTab')}
          >
            {this.renderContent('我的')}
          </TabBar.Item>
        </TabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('saleMobile', () => saleMobile);
