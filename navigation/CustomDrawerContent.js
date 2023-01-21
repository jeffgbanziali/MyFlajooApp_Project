const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => alert('Logout')} />
        </DrawerContentScrollView>
    );
}