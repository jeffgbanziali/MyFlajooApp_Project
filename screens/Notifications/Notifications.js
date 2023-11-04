import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { Surface } from 'gl-react-expo';
import Grayscale from '../../components/CustumProject/FilterName/GrayScale';
import Sepia from '../../components/CustumProject/FilterName/Sepia';
import Temperature from '../../components/CustumProject/FilterName/Temperature';

const Notifications = () => {
    const [currentFilter, setCurrentFilter] = useState("grayscale");

    const renderFilter = () => {
        switch (currentFilter) {
            case "grayscale":
                return <Grayscale on={true}>{{ uri: "https://leclaireur.fnac.com/wp-content/uploads/2022/10/naruto-header-jpeg.jpg" }}</Grayscale>;
            case "sepia":
                return <Sepia on={true}>{{ uri: "https://leclaireur.fnac.com/wp-content/uploads/2022/10/naruto-header-jpeg.jpg" }}</Sepia>;
            case "invertColors":
                return <Temperature on={true}>{{ uri: "https://leclaireur.fnac.com/wp-content/uploads/2022/10/naruto-header-jpeg.jpg" }}</Temperature>;
            default:
                return <Image source={{ uri: "https://leclaireur.fnac.com/wp-content/uploads/2022/10/naruto-header-jpeg.jpg" }} style={{ width: 100, height: 100 }} />;
        }
    };

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Surface style={{ width: 100, height: 100 }}>
                {renderFilter()}
            </Surface>
            <Button
                title="Grayscale"
                onPress={() => setCurrentFilter("grayscale")}
            />
            <Button
                title="Sepia"
                onPress={() => setCurrentFilter("sepia")}
            />
            <Button
                title="Invert Colors"
                onPress={() => setCurrentFilter("invertColors")}
            />
            <Button
                title="Clear Filter"
                onPress={() => setCurrentFilter("none")}
            />
        </View>
    );
}

export default Notifications;







/*
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Notifications = () => {
    const [filterName, setFilterName] = useState('none');

    const handleFilterChange = (newFilter) => {
        setFilterName(newFilter);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Filter
                uri="https://leclaireur.fnac.com/wp-content/uploads/2022/10/naruto-header-jpeg.jpg"
                aspectRatio={1}
                filterName={filterName}
                onDraw={(surface) => {
                }}
            />
            <Text style={{ marginTop: 20 }}>Current Filter: {filterName}</Text>
            <Button onPress={() => handleFilterChange('none')} title="No Filter" />
            <Button onPress={() => handleFilterChange('brannan')} title="Brannan Filter" />
            <Button onPress={() => handleFilterChange('valencia')} title="Valencia Filter" />
            <Button onPress={() => handleFilterChange('grayscale')} title="GrayScale Filter" />
        </View>
    );
};

export default Notifications;
*/