import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../../actions/user.action';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.userReducer.searchResults);

    const performSearch = () => {
        if (searchText.length > 2) {
            setLoading(true);
            dispatch(searchUsers(searchText))
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        performSearch();
    }, [searchText]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recherche</Text>
            <TextInput
                style={styles.input}
                placeholder="Rechercher..."
                onChangeText={setSearchText}
                value={searchText}
                onSubmitEditing={performSearch}
            />

            {loading ? (
                <Text style={styles.loadingText}>Chargement en cours...</Text>
            ) : (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.item}
                        >
                            <Text>{item.pseudo}</Text>
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
        backgroundColor: "#2C2828",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 30,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        fontSize: 16,
        color: 'white',
        borderRadius: 8,
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        color: 'white',
        backgroundColor: 'red',
    },
});

export default Search;
