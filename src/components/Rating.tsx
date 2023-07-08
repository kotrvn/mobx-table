import { nanoid } from "nanoid";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { styled } from "styled-components"


export type PostItemProps = {
    id: number;
    rating: number;
    handler?: (id: number, value: number) => void;
}

const RatingElement = styled.div`
    width: 100%;
    left: 0;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
    margin-top: 1rem;
`

const rateItems = [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
];

export const Rating: React.FC<PostItemProps> = ({ id, rating, handler }) => {    
    return (
        <RatingElement>
            {rateItems.map((item) => {
                console.log(item);
                return (
                    <div key={nanoid()} onClick={() => handler(id, item?.value)}>
                        {rating < item.value ? <IoStarOutline /> : <IoStar />}
                    </div>
                )
            })}
        </RatingElement>
    )
}