import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

const CreatePersonScreen = () => {
  console.log('==========================');
  console.log('Create Person  Screen');
  console.log('==========================');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [cast, setCast] = useState('');
  const [description, setDescription] = useState('');
  const [modal, setModal] = useState(false);
  //   console.log(name);
  return (
    <View style={[styles.root]}>
      <TextInput
        label="Name"
        style={styles.inputStyle}
        theme={theme}
        value={name}
        mode="flat"
        onChange={(text) => setName(text)}></TextInput>

      <TextInput
        label="Age"
        style={styles.inputStyle}
        theme={theme}
        value={age}
        keyboardType="number-pad"
        mode="flat"
        onChange={(text) => setAge(text)}></TextInput>
      <TextInput
        label="Phone"
        style={styles.inputStyle}
        theme={theme}
        keyboardType="number-pad"
        value={phone}
        mode="flat"
        onChange={(text) => setPhone(text)}></TextInput>

      <TextInput
        label="Qualification"
        style={styles.inputStyle}
        theme={theme}
        value={qualification}
        mode="flat"
        onChange={(text) => setQualification(text)}></TextInput>

      <TextInput
        label="Cast"
        style={styles.inputStyle}
        theme={theme}
        value={cast}
        mode="flat"
        onChange={(text) => setCast(text)}></TextInput>

      <TextInput
        label="Description"
        style={styles.inputStyle}
        theme={theme}
        value={description}
        mode="flat"
        onChange={(text) => setDescription(text)}></TextInput>
      <View style={styles.buttons}>
        <Button
          style={{margin: 6, paddingVertical: 5}}
          icon="upload"
          theme={theme}
          // style={styles.inputStyle}
          mode="contained"
          onPress={() => setModal(true)}>
          Image
        </Button>

        <Button
          style={{margin: 6, paddingVertical: 5}}
          icon="arrow-down-circle-outline"
          theme={theme}
          // style={styles.inputStyle}
          mode="contained"
          onPress={() => setModal(true)}>
          Save
        </Button>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModal(false)}
        visible={modal}>
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              mode="contained"
              theme={theme}
              onPress={() => setModal(false)}>
              Camera
            </Button>

            <Button
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => setModal(false)}>
              Gallery
            </Button>
          </View>
          <Button
            theme={theme}
            style={{marginHorizontal: '20%'}}
            onPress={() => setModal(false)}>
            cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const theme = {
  colors: {
    primary: '#ffD400',
    placeholder: '#ffD400',
    text: '#ffD400',
  },
};

const styles = StyleSheet.create({
  overlay: {
    // opacity: 0.9,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    height: '100%',
  },
  inputStyle: {
    margin: 6,
    backgroundColor: '#000',
    borderWidth: 1,
    borderLeftColor: '#ffD400',
    color: '#ffD400',
    // borderRadius: 15,
    // borderColor: '#ffD400',
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#2c2c2d',
    paddingVertical: 20,
    borderWidth: 1,
    // borderColor: '#ffD400',
    // borderBottomColor: 'transparent',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CreatePersonScreen;
