import { create } from 'zustand'

const userStore = create((set) => ({
    title: 'All users',
    count: 0,
    addCount: () => set((state) => ({
        count: state.count + 1
    }))
}))

export default userStore

/* 

#dz React router.
Создайте 3 страницы users, posts, todos используя react-router, и на каждой странице выводить данные из 
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/todos
*/