import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';

class DetailsTab extends Component {

  render() {
    const { title, description, due_date } = this.props.selectedItem;
    const { paddingBottom } = styles;
    return (
      <View style={styles.container}>
        <Text style={paddingBottom}>{title}</Text>
        <Text style={paddingBottom}>{description}</Text>
        <Text style={paddingBottom}>{due_date}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  detailsText: {
    fontSize: 20
  }
}); 

export default DetailsTab;
