import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TabBarIOS
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import DetailsTab from './DetailsTab';
import SubmissionsTab from './SubmissionsTab';


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
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

class Basic extends Component {
  state = {
    isOpen: false,
    selectedItem: {
    "title":"Project 1",
    "description":"This project will create a side bar",
    "due_date":"20th March 2017",
    "submissions": [
      {
        "title":"Submission 1",
        "content":"Some submission content"
      },
      {
        "title":"Submission 2",
        "content":"Some submission content"
      },
      {
        "title":"Submission 3",
        "content":"Some submission content"
      },
      {
        "title":"Submission 4",
        "content":"Some submission content"
      }
    ]
  },
    selectedTab: "Details"
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    console.log("Item selected : ", item);
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item
              selected={this.state.selectedTab === 'Details'}
              title="Project Details"
              onPress={() => {
                  this.setState({
                      selectedTab: 'Details',
                  })
              }}>
                <DetailsTab selectedItem={this.state.selectedItem} />
            </TabBarIOS.Item>

            <TabBarIOS.Item
              selected={this.state.selectedTab === 'Submissions'}
              title="Submissions"
              onPress={() => {
                    this.setState({
                        selectedTab: 'Submissions',
                    })
              }}>
                <SubmissionsTab selectedItem={this.state.selectedItem} />
            </TabBarIOS.Item>
          </TabBarIOS>
      </SideMenu>
    );
  }
};

export default Basic;
