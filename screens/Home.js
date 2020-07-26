import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = (props) => {
  console.log('==========================');
  console.log('Entered Home Screen');
  console.log('==========================');

  const data = [
    {
      id: '1',
      name: 'Jhon Doe',
      email: 'Jhon@abc.com',
      salary: '8 LPA',
      position: 'Mern Stack Developer',
      Phone: '123456',
      picture:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
    {
      id: '2',
      name: 'Maxwell',
      email: 'Maxwell@abc.com',
      salary: '1 LPA',
      position: 'Graphic Designer',
      Phone: '123456',
      picture:
        'https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      name: 'Peter Parker',
      email: 'peter@abc.com',
      salary: '4 LPA',
      position: 'UI/UX',
      Phone: '123456',
      picture:
        'https://images.unsplash.com/photo-1560884117-8e9be30e4aec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
  ];

  const renderList = (item) => {
    return (
      <Card
        style={styles.myCard}
        key={item.id}
        onPress={() => {
          console.log('Card Clicked');
          props.navigation.navigate('Profile', {item});
        }}>
        <View style={styles.cardView}>
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
            source={{
              uri: item.picture,
            }}
          />
          <View style={styles.cardContent}>
            <Text style={[styles.text, {fontSize: 20, color: '#fff'}]}>
              {item.name}
            </Text>
            <Text style={[styles.text, {color: '#fff'}]}>{item.sdetail}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return renderList(item);
        }}
      />

      <FAB
        onPress={() => {
          console.log('Add Button Pressed');
          props.navigation.navigate('Create');
        }}
        style={styles.fab}
        large
        icon="plus"
        theme={{colors: {accent: '#ffD400'}}}
        // onPress={() => console.log('Add Button Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  myCard: {
    margin: 5,
    padding: 5,
    backgroundColor: '#000',
    borderWidth: 1,
    borderBottomColor: '#ffD400',
  },

  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    padding: 5,
  },
  cardContent: {},
  text: {
    fontSize: 15,
    marginLeft: 20,
    color: '#000',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
