import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class SubmissionRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
  }

  renderSubmissionContent() {
    if (!this.state.isCollapsed) {
      return <Text style={styles.contentText}>{this.props.submission.content}</Text>
    }
  }

  handlePress() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text style={styles.text}>
            {this.props.submission.title}
          </Text>
          { this.renderSubmissionContent() }
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  contentText: {
    paddingTop: 10,
    marginLeft: 20,
    fontSize: 13,
  }
});

export default SubmissionRow;
