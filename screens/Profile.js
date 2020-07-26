import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, Linking, Platform} from 'react-native';
import {Title, Card, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

const Profile = (props) => {
  // functions

  const {
    id,
    name,
    picture,
    phone,
    salary,
    email,
    position,
  } = props.route.params.item;

  const openDial = () => {
    Platform.OS === 'android'
      ? Linking.openURL(`tel:${phone}`)
      : Linking.openURL(`telprompt:${phone}`);

    // if (Platform.OS === 'android') {
    //   Linking.openURL('tel:123456789');
    // } else {
    //   Linking.openURL('telprompt:123456789');
    // }
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        //    colors={['#0033ff', '#6bc1ff']}
        colors={['#ffD400', '#ffdd3c', '#f5e642']}
        // colors={['#01579b', '#0288d1', '#039be5']}
        // colors={['#007542', '#1e8c45', '#3aa346']}
        style={{height: '20%'}}
      />

      <View style={styles.image}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            marginTop: -70,
            borderWidth: 2,
            borderColor: '#ffD400',
          }}
          source={{
            uri: picture,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Title style={{color: '#fff', fontSize: 40, paddingTop: 20}}>
          {name}
        </Title>
        <Text style={{fontSize: 15, color: '#fff'}}>{position}</Text>
      </View>

      <Card
        style={styles.card}
        onPress={() => {
          Linking.openURL(email);
        }}>
        <View style={styles.cardContent}>
          <Icon
            style={styles.icon}
            name="email"
            type="material"
            color="#ffD400"
          />
          <Text style={styles.mytext}>{email}</Text>
        </View>
      </Card>

      <Card style={styles.card} onPress={() => openDial(phone)}>
        <View style={styles.cardContent}>
          <Icon
            style={styles.icon}
            name="phone"
            type="material"
            color="#ffD400"
          />
          <Text style={styles.mytext}>123465789</Text>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Icon
            style={styles.icon}
            name="dollar-sign"
            type="font-awesome-5"
            color="#ffD400"
          />
          <Text style={styles.mytext}> {salary}</Text>
        </View>
      </Card>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingTop: 30,
          marginHorizontal: 25,
        }}>
        <Button
          style={{margin: 6, paddingVertical: 5}}
          icon="account-edit"
          theme={theme}
          style={styles.inputStyle}
          mode="contained">
          Edit
        </Button>

        <Button
          style={{margin: 6, paddingVertical: 5}}
          icon="delete"
          theme={theme2}
          style={styles.inputStyle}
          mode="contained">
          Fired
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: '#ffD400',
  },
};

const theme2 = {
  colors: {
    primary: '#F32013',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    alignItems: 'center',
    // borderBottomColor: '#f5e642',
  },
  card: {
    margin: 3,
    marginTop: 10,
    // marginLeft: 20,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ffD400',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  mytext: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
  },
  inputStyle: {
    margin: 6,
  },
});
export default Profile;
