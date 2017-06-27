const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  ListView,
  TouchableOpacity
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

// data 
const projects = [
  {
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
  {
    "title":"Project 2",
    "description":"This project will show a list of restaurants around you",
    "due_date":"21st March 2017",
    "submissions": [
      {
        "title":"Submission 5",
        "content":"Some submission content"
      },
      {
        "title":"Submission 6",
        "content":"Some submission content"
      },
      {
        "title":"Submission 7",
        "content":"Some submission content"
      },
      {
        "title":"Submission 8",
        "content":"Some submission content"
      }
    ]
  },
  {
    "title":"Project 3",
    "description":"This project is a chrome extension",
    "due_date":"22nd March 2017",
    "submissions": [
      {
        "title":"Submission 9",
        "content":"Some submission content"
      },
      {
        "title":"Submission 10",
        "content":"Some submission content"
      },
      {
        "title":"Submission 11",
        "content":"Some submission content"
      },
      {
        "title":"Submission 12",
        "content":"Some submission content"
      }
    ]
  }
];

class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(projects)
    };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(rowData) {
    console.log("Handle press : ", rowData);
    this.props.onItemSelected(rowData);
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{ uri }}/>
            <Text style={styles.name}>Project Manager</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(project) => 
            <TouchableOpacity
              onPress={() => this.handlePress(project)}>
                <Text style={styles.text}>{project.title}</Text>
                <Text style={styles.dueDateText}>Due by {project.due_date}</Text>
            </TouchableOpacity>
          }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    height: 100
  },
  avatar: {
    width: 70,
    height: 35,
    borderRadius: 35,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
    paddingLeft: 10,
    color:'white',
    fontSize:20
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
  text: {
    marginLeft: 12,
    paddingBottom: 12,
    fontSize: 16,
    color:'white'
  },
  dueDateText: {
    marginLeft: 12,
    paddingBottom: 12,
    fontSize: 13,
    color:'white'    
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default Menu;
