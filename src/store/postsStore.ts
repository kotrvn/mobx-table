import { Post } from '../types/post';
import { makeAutoObservable } from "mobx";

class PostsStore {
    posts: Post[] = [];
    favoritePosts: Post[] = [];
    ratedPosts: Post[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getPostsAction = () => {
        fetch("https://jsonplaceholder.typicode.com/posts ")
            .then(response => response.json())
            .then(json => {
                this.posts = [...this.posts, ...json]
            })
    }

    handleAddtoFavorite = (id: number) => {
        const currentPost = this?.posts.find((item: Post) => item.id === id)
        const hasPostInFavorite = this.favoritePosts.find(item => item.id === id ? true : false)
        if(!hasPostInFavorite) {
            this.favoritePosts.push({...currentPost, showRateMenu: false})
        }        
    }

    handleRemoveFavorite = (id: number) =>  {
        this.favoritePosts = this.favoritePosts.filter((item: Post) => item.id !== id)
    }

    handleRemoveRated = (id: number) =>  {
        this.ratedPosts = this.ratedPosts.filter((item: Post) => item.id !== id)
    }

    handleShowRateMenu = (id: number) => {
        const hasPostInRated = this.ratedPosts.find(item => item.id === id ? true : false)
        this.favoritePosts.forEach((item) => {
            if (item.id === id && !hasPostInRated) {
                item.showRateMenu = !item.showRateMenu
            }
        })
    }


    handleRateItem = (id: number, value: number) => {
        const currentPost = this?.favoritePosts.find((item: Post) => item.id === id)
        const hasPostInRated = this.ratedPosts.find(item => item.id === id ? true : false)

        if (!hasPostInRated) {
            this.favoritePosts.forEach((item) => {
                if (item.id === id) {
                    item.showRateMenu = false
                }
            })
            this.ratedPosts.push({...currentPost, showRateMenu: false, rating: value })
        } 
    }

    handleUpdateRating = (id: number, value: number) => {        
        this.ratedPosts.forEach((item) => {
            if (item.id === id) {
                item.rating = value
            }
        })
    }

    
    
 }

export default new PostsStore();