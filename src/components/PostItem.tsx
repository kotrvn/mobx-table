import { nanoid } from "nanoid";
import { IoStar, IoTrash } from "react-icons/io5";
import { styled } from "styled-components"
import { Rating } from "./Rating";


export type PostItemProps = {
    id: number;
    title: string;
    handler?: (id: number) => void;
    removeHandler?: (id: number) => void;
    rateHandler?: (id: number, value: number) => void;
    rateMenu?: boolean;
    canRemove?: boolean;
    rating?: number
}

const IconButton = styled.button`
    flex-shrink: 0;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    padding: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--color-text);
    border: 1px solid var(--colors-text);
    cursor: pointer;
`

const PostItemElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem;
    margin: 1rem 0;
    border: 1px solid var(--colors-text);
    cursor: pointer;
    overflow: hidden;
`

const PostItemText = styled.div`
    margin-right: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const PostItemInner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const PostItemRate = styled.div`
    background-color: var(--colors-bg);
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 1rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid var(--colors-text);
    z-index: 1;
`
const PostItemWrapper = styled.div`
    position: relative;
`

export const PostItem: React.FC<PostItemProps> = ({ id, title, handler, removeHandler, rateHandler, rateMenu, canRemove = false, rating, }) => {    

    const rateItems = [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5},
    ];

    return (
        <PostItemWrapper>
            <PostItemElement onClick={() => handler(id)}>
                <PostItemInner>
                    <PostItemText>{title}</PostItemText>
                    {canRemove && (
                        <IconButton onClick={() => removeHandler(id)}><IoTrash /></IconButton>
                        )
                    }
                </PostItemInner>
                {rating && <Rating rating={rating} id={id} handler={rateHandler} />}
            </PostItemElement>
            
            {rateMenu && (
                <PostItemRate>
                    {rateItems.map((item) => {
                        console.log(item);
                        
                        return (
                            <IconButton key={nanoid()} onClick={() => rateHandler(id, item?.value)}>
                                <IoStar />
                            </IconButton>
                        )
                    })}
                </PostItemRate>
            )}
        </PostItemWrapper>
    )
}