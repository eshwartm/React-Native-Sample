import React, { Component } from 'react';
import { 
  View, 
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import SubmissionRow from './SubmissionRow';

class SubmissionsTab extends Component {

  componentWillMount() {
    this.updateDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedItem !== nextProps.selectedItem) { 
      this.updateDataSource(nextProps);
    }
  }

  updateDataSource(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ 
      dataSource: ds.cloneWithRows(props.selectedItem.submissions)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Submissions
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(submission) => 
            <SubmissionRow submission={submission} />
          }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    
    );
  }
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    paddingLeft: 20
  },
  headingStyle: {
    fontSize: 20
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
}); 


export default SubmissionsTab;
