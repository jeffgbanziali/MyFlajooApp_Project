import { USER } from "./Users";


export const POSTS = [
    {
        imageUrl: 'https://media.senscritique.com/media/000020015830/1200/new_gods_nezha_reborn.jpg',
        user: USER[0].user,
        time: '1h ago',
        likes: '1,230',
        caption: 'This is a caption so raaaaaaad vaiijtr rtrgjgnrjrt bhbhbplpppl,lmlml,l,mlml ibibjbi ibubibiub ibubiubib ibubbiub ibubiubkijbibbui ubiuob',
        profilePicture: USER[0].image,
        comments: [
            {
                user: "koukouda",
                comment: 'This is a comment',
            },
            {
                user: "koukouda",
                comment: 'This is a comment',
            },
            {
                user: "eff Flaj",
                comment: 'This is a comment',
            },
        ]
    },
    {
        imageUrl: 'https://pbs.twimg.com/media/D031BfXX4AAnZPB.jpg:large',
        user: USER[0].user,
        time: '10 min ago',
        likes: '1,230',
        caption: 'This is a caption',
        profilePicture: USER[0].image,
        comments: [
            {
                user: "koukouda",
                comment: 'This is a comment',
            },
            {
                user: "koukouda",
                comment: 'This is a comment',
            },
            {
                user: "eff Flaj",
                comment: 'This is a comment',
            },
        ]
    }

]