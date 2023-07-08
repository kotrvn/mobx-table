import { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import postsStore from '../store/postsStore'
import { observer } from "mobx-react-lite";
import { PostItem } from "../components/PostItem";
import { nanoid } from "nanoid";



export type CardProps = {

}

export const CardsElement = styled.div`
    display: flex;
    align-items: center;
    height: 60vh;
    margin: 2rem 0;
`;

export const Cards = observer(() => {

    const { 
        posts, 
        getPostsAction, 
        favoritePosts, 
        ratedPosts,
        handleAddtoFavorite, 
        handleRemoveFavorite,
        handleRemoveRated,
        handleShowRateMenu,
        handleRateItem,
        handleUpdateRating,
    } = postsStore;


    useEffect(() => {
        getPostsAction()
    }, [])
        
    
    return (
        <Container>
            <CardsElement>
                <Card>
                    <div>
                        <h2>Посты:</h2>
                        {posts.map(({ title, id }) => {
                            return (
                                <PostItem key={nanoid()} title={title} id={id} handler={handleAddtoFavorite} />        
                            )
                        })}
                    </div>
                </Card>
                <Card>
                    <div>
                        <h2>Избранное:</h2>
                        {!favoritePosts?.length ? (<div>Список пуст.</div>) : (
                            <div>
                                {favoritePosts?.map(({ title, id, showRateMenu }) => {
                                    console.log(showRateMenu);
                                    
                            return (
                                <PostItem 
                                    key={id} 
                                    title={title}
                                    removeHandler={handleRemoveFavorite}
                                    handler={handleShowRateMenu}
                                    rateMenu={showRateMenu}
                                    rateHandler={handleRateItem}
                                    id={id} 
                                    canRemove
                                />        
                            )
                        })}
                            </div>
                        )}
                        
                    </div>
                </Card>
                <Card>
                    <div>
                        <h2>Рейтинг:</h2>
                        {!ratedPosts.length ? (<div>Список пуст.</div>) : (
                            <div>
                                {ratedPosts.map(({id, title, rating}) => {
                            return (
                                <PostItem 
                                    key={id} 
                                    title={title} 
                                    id={id} 
                                    handler={() => {}}
                                    removeHandler={handleRemoveRated} 
                                    rateHandler={handleUpdateRating}
                                    rating={rating}
                                    canRemove  
                                />        
                            )
                        })}
                            </div>
                        )}
                        
                    </div>
                </Card>
            </CardsElement>
        </Container>
    )
});
