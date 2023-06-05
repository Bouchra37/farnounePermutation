import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ProfilComponent = () => {
  const [profileData, setProfileData] = useState({
    "_id": "64768525577ce4ce6dada196",
    "email": "lachgar.m@gmail.com",
    "nom": "LACHGAR",
    "prenom": "Mohamed",
    "tel": "0676514312",
    "grade": "PH",
    "specialite": "Informatique",
    "faculteActuelle": "ENSAJ",
    "villeFaculteActuelle": "El Jadida",
    "villeDesiree": "Marrakech;Meknès",
    "password": "$2b$10$hA95cy9jXo.jRPgn5zDVRu.CetUNnoAnyDrTPrm7u7eFR1ZoVHqL6",
    "__v": 0
  });

  const handleChangeEmail = (text) => {
    setProfileData({ ...profileData, email: text });
  };

  const handleChangeNom = (text) => {
    setProfileData({ ...profileData, nom: text });
  };

  const handleChangePrenom = (text) => {
    setProfileData({ ...profileData, prenom: text });
  };

  const handleChangeTel = (text) => {
    setProfileData({ ...profileData, tel: text });
  };

  const handleChangeGrade = (text) => {
    setProfileData({ ...profileData, grade: text });
  };

  const handleChangeSpecialite = (text) => {
    setProfileData({ ...profileData, specialite: text });
  };

  const handleChangeFaculteActuelle = (text) => {
    setProfileData({ ...profileData, faculteActuelle: text });
  };

  const handleChangeVilleFaculteActuelle = (text) => {
    setProfileData({ ...profileData, villeFaculteActuelle: text });
  };

  const handleChangeVilleDesiree = (text) => {
    setProfileData({ ...profileData, villeDesiree: text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>Profil</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeEmail}
          value={profileData.email}
        />

        <Text style={styles.label}>Nom:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeNom}
          value={profileData.nom}
        />

        <Text style={styles.label}>Prénom:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangePrenom}
          value={profileData.prenom}
        />

        <Text style={styles.label}>Téléphone:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeTel}
          value={profileData.tel}
        />

        <Text style={styles.label}>Grade:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeGrade}
          value={profileData.grade}
        />

        <Text style={styles.label}>Spécialité:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeSpecialite}
          value={profileData.specialite}
        />

        <Text style={styles.label}>Faculté actuelle:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeFaculteActuelle}
          value={profileData.faculteActuelle}
        />

        <Text style={styles.label}>Ville faculté actuelle:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeVilleFaculteActuelle}
          value={profileData.villeFaculteActuelle}
        />

        <Text style={styles.label}>Villes désirées:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeVilleDesiree}
          value={profileData.villeDesiree}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F6FA',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333333',
    fontFamily: 'Arial',
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
    fontFamily: 'Arial',
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    color: '#333333',
    fontFamily: 'Arial',
    backgroundColor: '#FFFFFF',
  },
});

export default ProfilComponent;
