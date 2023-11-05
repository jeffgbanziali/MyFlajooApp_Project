import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Filter from './Filter';
import Filter2 from './Filter2';
import Filter3 from './Filter3';
import Filter4 from './Filter4';
import Filter5 from './Filter5';
import Filter6 from './Filter6';
import Filter7 from './Filter7';
import Filter8 from './Filter8';
import Filter9 from './Filter9';

const ImageCustum = ({ onSelectEffect, selectedImage }) => {


    const filterStyles = {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 70,
    };
    return (
        <ScrollView
            style={{
                width: '90%',
            }}
            horizontal
        >
            <View style={{  width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('brightness')}
                >
                    <Filter imageUri={selectedImage.uri} filterName="brightness" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('sepia')}
                >
                    <Filter2 imageUri={selectedImage.uri} filterName="sepia" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('grayscale')}
                >
                    <Filter3 imageUri={selectedImage.uri} filterName="grayscale" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('amaro')}
                >
                    <Filter4 imageUri={selectedImage.uri} filterName="amaro" />
                </TouchableOpacity>


                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('brannan')}
                >
                    <Filter5 imageUri={selectedImage.uri} filterName="brannan" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('contrast')}
                >
                    <Filter6 imageUri={selectedImage.uri} filterName="contrast" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('saturation')}
                >
                    <Filter7 imageUri={selectedImage.uri} filterName="saturation" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('temperature')}
                >
                    <Filter8 imageUri={selectedImage.uri} filterName="temperature" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={filterStyles}
                    onPress={() => onSelectEffect('valencia')}
                >
                    <Filter9 imageUri={selectedImage.uri} filterName="valencia" />
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

export default ImageCustum;
