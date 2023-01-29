import { Box } from "components/box/Box"
import StyledReviews_css from "../reviews/StyledReviews.module.css"
import { useEffect, useState } from "react";
import { fetchOnReviews } from "components/fetchApi/FetchApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const {reviews, review} = StyledReviews_css;

const Review = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  background-color: #F0F0F0;
  border-radius: 10px;
  /* padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 500px;
  /* margin: 20px auto; */
  /* padding: 20px; */
  /* border: 1px solid #ddd; */
  /* border-radius: 10px; */
  /* box-shadow: 0 0 10px #ddd; */
  p {
    margin: 0;
    font-size: 1.2rem;
  }
  a {
    font-size: 1.2rem;
    color: blue;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 200px;
    p {
      font-size: 1rem;
    }
    a {
      font-size: 1rem;
    }
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 10px auto;
  padding: 5px;
  background-color: #f2f2f2;
  border-radius: 10px;

  p {
    width: 80%;
    font-size: 16px;
    margin: 5px 0;
  }

  a {
    width: 80%;
    font-size: 14px;
    color: #0366d6;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const StyledAuthor = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 5px 0;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const DateStyle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const StyledError = styled.p`
  font-size: 36px;
  font-weight: 800;
  color: red;
  text-align: center;
`

const ReviewsLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: blue;
  padding: 10px 0;
  &:hover {
    color: darkblue;
  }
`;

const Reviews = () => {
    const [reviewsArray, setReviewsArray] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams()

    useEffect(()=>{
        fetchOnReviews(params.movieId).then((data)=>{setReviewsArray(data)}).catch((error)=>{setError(error)})
    },[params])

    // console.log(reviewsArray)
    return (
        <Box as={"ul"} className={reviews} justifyContent="space-evenly" mt={4}>
            {reviewsArray && reviewsArray.data.results.map(({author, created_at, url, id})=>{
                return (
                    <Review key={id} className={review}>
                        <ReviewContainer>
                            <StyledAuthor>Author: {author}</StyledAuthor>
                            <DateStyle>Created at: {created_at}</DateStyle>
                            <ReviewsLink href={url}>Посилання на джерело відгуку</ReviewsLink>
                        </ReviewContainer>
                    </Review>
                )

            })}
            {reviewsArray && reviewsArray.data.results.length === 0 ? <StyledError>Нажаль відгуків немає</StyledError> : null}
            {error && <Box display="flex" justifyContent="center" alignItems="center" mt={5}> 
                <h3>{error.message}</h3> 
            </Box>} 
        </Box>
    )
}

export default Reviews;