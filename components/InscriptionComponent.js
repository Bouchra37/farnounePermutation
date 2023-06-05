
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Button, TextInput, Text, StyleSheet, ScrollView } from 'react-native';



const InscriptionComponent = () => {
  
const [nom, onChangeNom] = useState('');
const [prenom, onChangePrenom] = useState('');
const [tel, onChangeTel] = useState('');
const [email, onChangeEmail] = useState('');
const [motPasse, onChangeMotPasse] = useState('');
const [grade, onChangeGrade] = useState('');
const [etablissement, onChangeEtablissement] = useState('');
const [specialite, onChangeSpecialite] = useState('');
const [villeActuelle, onChangeVilleActuelle] = useState('');
const [villeDesiree, onChangeVilleDesiree] = useState('');

send =function(){
  alert("l'inscription envoyée " + nom);
}

  return (
    
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Registration</Text>
          <SafeAreaView>
            <Text>Last name</Text>
            <TextInput style={styles.input} onChangeText={onChangeNom} value={nom} />
      
            <Text>First name</Text>
            <TextInput style={styles.input} onChangeText={onChangePrenom} value={prenom} />
      
            <Text>Phone</Text>
            <TextInput style={styles.input} onChangeText={onChangeTel} value={tel} />
      
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} />
      
            <Text>Password</Text>
            <TextInput style={styles.input} onChangeText={onChangeMotPasse} value={motPasse} />
      
            <Text>Rank</Text>
            <TextInput style={styles.input} onChangeText={onChangeGrade} value={grade} />
      
            <Text>Institution (abbreviation: FST, FS, EST, ENSA ...)</Text>
            <TextInput style={styles.input} onChangeText={onChangeEtablissement} value={etablissement} />
      
            <Text>Specialization</Text>
            <TextInput style={styles.input} onChangeText={onChangeSpecialite} value={specialite} />
      
            <Text>Current city</Text>
            <TextInput style={styles.input} onChangeText={onChangeVilleActuelle} value={villeActuelle} />
      
            <Text>Wanted city</Text>
            <TextInput style={styles.input} onChangeText={onChangeVilleDesiree} value={villeDesiree} />
      
          </SafeAreaView>
            <Button  title="Send" onPress={() => send()} />
           
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#ffffff',
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InscriptionComponent;