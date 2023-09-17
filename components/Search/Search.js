import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchText.length > 2) {
            setLoading(true);

            // Remplacez l'URL par votre propre endpoint API
            const apiUrl = `http://192.168.0.14:3000/`;

            axios.get(apiUrl)
                .then((response) => {
                    setSearchResults(response.data);
                })
                .catch((error) => {
                    console.error('Erreur de recherche :', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setSearchResults([]);
        }
    }, [searchText]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recherche</Text>
            <TextInput
                style={styles.input}
                placeholder="Rechercher..."
                onChangeText={setSearchText}
                value={searchText}
            />
            {loading ? (
                <Text style={styles.loadingText}>Chargement en cours...</Text>
            ) : (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.item}

                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
});

export default Search;
