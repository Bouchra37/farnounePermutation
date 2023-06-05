import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'react-native-bcrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConnexionComponent = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConnexion = () => {
    // Appeler l'API pour vérifier l'utilisateur
    fetch('https://troubled-red-garb.cyclic.app/professeurs')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email);

        if (user) {
          // Comparer le mot de passe saisi avec le hash du mot de passe
          bcrypt.compare(password, user.password, async (error, result) => {
            if (result) {
              // Connexion réussie, appeler la fonction de rappel onLogin
              onLogin();

              // Stocker l'état de connexion dans AsyncStorage
              try {
                await AsyncStorage.setItem('isLogged', 'true');
              } catch (error) {
                console.error('Erreur lors de la sauvegarde du statut de connexion:', error);
              }

              // Naviguer vers d'autres écrans
              navigation.navigate('Accueil');
              navigation.navigate('Profil');
              navigation.navigate('A propos');
              navigation.navigate('Recherche');
            } else {
              // Mot de passe incorrect
              setErrorMessage('Mot de passe incorrect');
            }
          });
        } else {
          // Utilisateur non trouvé
          setErrorMessage('Identifiants invalides');
        }
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sign In</Text>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
        />
        {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
        <Button title="Log in" onPress={handleConnexion} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
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
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default ConnexionComponent;
