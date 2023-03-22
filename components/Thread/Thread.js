import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post.actions'
import { isEmpty } from '../Context/Utils'
import Posts from '../homepage/PostsComponents/Posts'

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer)

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts())
            setLoadPost(false)
        }
    }, [loadPost, dispatch])

    return (
        <View>
            <View>
                {!isEmpty(posts[0]) &&
                    posts.map(post => {
                        return (
                            <View>
                                <Posts post={post} key={post._id} />
                            </View>
                        )
                    })}
            </View>
        </View>
    )
}

export default Thread
