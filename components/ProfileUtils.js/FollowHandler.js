import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../Context/Utils';
import { followUser, unfollowUser } from '../../actions/user.action';

const FollowHandler = ({ idToFollow, type }) => {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();



    const handleFollow = () => {
        dispatch(followUser(userData._id, idToFollow));
        setIsFollowed(true);
    };

    const handleUnfollow = () => {
        dispatch(unfollowUser(userData._id, idToFollow));
        setIsFollowed(false);
    };

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if (userData.following.includes(idToFollow)) {
                setIsFollowed(true);
            } else setIsFollowed(false);
        }
    }, [userData, idToFollow]);


    return (
        <>
            {
                isFollowed && !isEmpty(userData) && (<View>
                    {type === "suggestion " && <Pressable
                        onPress={handleUnfollow}
                    >
                        <Text>
                            Following
                        </Text>

                    </Pressable>}
                    {type === "Posts " && <Pressable
                        onPress={handleUnfollow}
                    >
                        <Text>
                            <Feather
                                name="user-minus"
                                size={20}
                                color="black"

                            />
                        </Text>

                    </Pressable>}
                </View>
                )
            }
            {isFollowed === false && !isEmpty(userData) && (
                <View>
                    <Pressable
                        onPress={handleFollow}
                    >
                        <Text>Follow</Text>
                    </Pressable>
                </View>
            )}

        </>
    )
}

export default FollowHandler