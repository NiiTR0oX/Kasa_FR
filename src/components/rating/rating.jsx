import StarGrey from './../../assets/images/rating/StarGrey.png';
import StarRed from './../../assets/images/rating/StarRed.png';

export default function Rating({rating}) {

    return (
        <>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? StarRed : StarGrey} alt="star" />
                )
            })}
        </>
    )
}