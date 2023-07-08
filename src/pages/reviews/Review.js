import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

import styles from '../../styles/Comment.module.css'
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { axiosReq } from '../../api/axiosDefaults';
// import DateFormatter from "../../utils/DateFormatter";
import ReviewCreateForm from './ReviewCreateForm';
import ReviewComment from './ReviewComment';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';

import { Rating } from "react-simple-star-rating";

const Review = (props) => {

    const {
        id,
        owner, 
        profile_id,
        profile_image,
        title,
        // event_date,
        review_id,
        review_count,
        average_rating,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    // Variables to display Create Review modal popup
    const [showCreateForm, setShowCreateForm] = useState(false);
    const handleShowCreateForm = () => {
        setShowCreateForm(true);
    };
    const handleCloseCreateForm = () => setShowCreateForm(false);

    // Variables to toggle open and closed the review comments component
    const [displayReviewComments, setDisplayReviewComments] = useState(false);
    
    const [reviewComments, setReviewComments] = useState({ results: [] });

    useEffect(() => {
      
      const handleMount = async () => {
        try {
          const {data: reviewComments} = await (
            axiosReq.get(`/reviews/?event=${id}`)
          );

          setReviewComments(reviewComments)
        } catch (err) {
        }
      };

      handleMount();
    }, [currentUser,id]);

  return (
    <>
      <Container className={`${styles.Review} ${appStyles.Content}`}>
        <Row noGutters className="px-3 text-center">
          <Col lg={2} className="text-lg-left">
            <div>
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
              </Link>
            </div>
          </Col>

          <Col lg={4}>
            <Link to={`/events/${id}`}>
              <span className={`d-inline-column ${styles.Title}`}>
                {title}
                <br />
              </span>
            </Link>

            {/* <span className={`${styles.Date}`}>
              <DateFormatter event_date={event_date} />
            </span> */}
          </Col>

          <Col lg={4}>
            <div>
              <span className="mb-3">
                <Rating readonly initialValue={average_rating} size={25} />
              </span>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Click here to read reviews</Tooltip>}
              >
                <Button
                  className={btnStyles.NumReviews}
                  onClick={() => {
                    setDisplayReviewComments(!displayReviewComments);
                  }}
                >
                  <span className={`d-inline-column ${styles.Title}`}>
                    ({review_count})
                  </span>
                </Button>
              </OverlayTrigger>
            </div>
          </Col>
          <Col lg={2}>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>You can't review your own event, sorry!</Tooltip>
                }
              >
                <Button className={`${btnStyles.Button} ${btnStyles.Review}`}>
                  Post a Review
                </Button>
              </OverlayTrigger>
            ) : review_id ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You've already reviewed this event</Tooltip>}
              >
                <Button className={`${btnStyles.Button} ${btnStyles.Review}`}>
                  Post a Review
                </Button>
              </OverlayTrigger>
            ) : (
              <Button
                onClick={handleShowCreateForm}
                className={`${btnStyles.Button} ${btnStyles.Review}`}
              >
                Post a Review
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      {displayReviewComments && (
        <Container className={`${appStyles.Content} mb-3`}>
          {reviewComments.results.length ? (
            reviewComments.results.map((review) => (
              <ReviewComment
                key={review.id}
                {...review}
                setPosts={setPosts}
                setReviewComments={setReviewComments}
                eventId={id}
                review_count={review_count}
                avgRating={average_rating}
              />
            ))
          ) : (
            <span>Nothing to see here!</span>
          )}
        </Container>
      )}
      <ReviewCreateForm
        id={id}
        showModal={showCreateForm}
        handleCloseCreateForm={handleCloseCreateForm}
        setPosts={setPosts}
        setReviewComments={setReviewComments}
      />
    </>
  );
}

export default Review




// import React from "react";
// import Media from "react-bootstrap/Media";
// import { Link } from "react-router-dom";
// import { Rating } from "react-simple-star-rating";
// import Avatar from "../../components/Avatar";
// import styles from "../../styles/Comment.module.css";


// const Review = (props) => {
//   const {
//     profile_id,
//     profile_image,
//     owner,
//     updated_at,
//     content,
//     rating,

//   } = props;

//   return (
//     <>
//       <hr />
//       <Media>
//         <Link to={`/profiles/${profile_id}`}>
//           <Avatar src={profile_image} height={55} />
//         </Link>
//         <Media.Body className="align-self-center ml-2">
//           <span className={styles.Owner}>{owner}</span>
//           <span className={styles.Date}>{updated_at}</span>
//           <p>
//             Rating:
//             <Rating readonly initialValue={rating} size={25} />
//           </p>
//           <p>
//             Review:
//             {content}
//           </p>
//         </Media.Body>
//       </Media>
//     </>
//   );
// };

// export default Review;