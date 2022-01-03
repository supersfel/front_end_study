const sleep = n => new Promise(resolve => setTimeout(resolve,n))

// {id,title, body}

const posts =[
    {
        id : 1,
        title : '정민규의 나이',
        body : '25살'
    },
    {
        id : 2,
        title : '정민규의 성별',
        body : '남자'
    },
    {
        id : 3,
        title : '정민규의 최애메뉴',
        body : '치킨'
    },
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
}

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id)
}