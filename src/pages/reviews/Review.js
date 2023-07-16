import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

import styles from '../../styles/Comment.module.css'
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { axiosReq } from '../../api/axiosDefaults';

// FOR DELETE MODAL 
// import { axiosRes } from "../../api/axiosDefaults";
// import { MoreDropdown } from "../../components/MoreDropdown";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


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
        review_id,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    // FOR DELETE MODAL
    // const history = useHistory();


    // CREATE A REVIEW
    const [showCreateForm, setShowCreateForm] = useState(false);
    const handleShowCreateForm = () => {
        setShowCreateForm(true);
    };
    const handleCloseCreateForm = () => setShowCreateForm(false);

    // OPEN AND CLOSE REVIEW COMMENTS SECTION
    const [displayReviewComments, setDisplayReviewComments] = useState(false);
    
    const [reviewComments, setReviewComments] = useState({ results: [] });

    useEffect(() => {
      
      const handleMount = async () => {
        try {
          const {data: reviewComments} = await (
            axiosReq.get(`/reviews/?post=${id}`)
          );

          setReviewComments(reviewComments)
        } catch (err) {
        }
      };

      handleMount();
    }, [currentUser,id]);

  // MENTOR HELP FROM AKSHAT
  let averageRating = 0;
  const reviewCount = reviewComments.results.length;
  if(reviewCount > 0) {
    averageRating = reviewComments.results.reduce((acc, ele) => (ele.rating + acc), 0)/reviewCount;
  }

// DELETE REVIEW
  // const handleDelete = async () => {
  //   try {
  //     await axiosRes.delete(`/reviews/${id}/`);
  //     history.goBack();
  //   } catch (err) {
  //   }
  // };

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
            <Link to={`/posts/${id}`}>
              <span className={`d-inline-column ${styles.Title}`}>
                {title}
                <br />
              </span>
            </Link>
          </Col>

          <Col lg={4}>
            <div>
              <span className="mb-3">
                <Rating readonly initialValue={averageRating} size={25} />
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
                    ({reviewCount})
                  </span>
                </Button>
              </OverlayTrigger>
            </div>
          </Col>
          <Col lg={2}>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Sorry, you can't review your own event.</Tooltip>} 
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
          {reviewCount ? (
            reviewComments.results.map((review) => (
              <ReviewComment
                key={review.id}
                {...review}
                setPosts={setPosts}
                setReviewComments={setReviewComments}
                postId={id}
                review_count={reviewCount}
                avgRating={averageRating}
              />
            ))
          ) : (
            <span>Nothing to see here!</span>
          )}
        </Container>
      )}
      <ReviewCreateForm
        postId={id}
        showPopUp={showCreateForm}
        handleCloseCreateForm={handleCloseCreateForm}
        setPosts={setPosts}
        setReviewComments={setReviewComments}
      />
    </>
  );
}

export default Review