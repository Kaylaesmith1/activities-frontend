import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from "../../styles/Comment.module.css";
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from '../../api/axiosDefaults';
import ConfirmDelete from '../../components/ConfirmDelete';
import ReviewEditForm from './ReviewEditForm';
import Media from 'react-bootstrap/Media';
import { Rating } from "react-simple-star-rating";

const ReviewComment = (props) => {

  const { 
    profile_id,
    owner,
    profile_image,
    updated_at,
    review,
    rating,
    id,
    setPosts,
    setReviewComments,
  } = props;
   
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

// DELETE REVIEW CONFIRMATION POP UP
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const handleShow = () => {
    setShow(true);
    setMessage(`Sure you want to delete your review?`);
    setType("review");
  };
  const handleClose = () => setShow(false);

// EDIT REVIEW POP UP
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowEditModal = () => {
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  }
  
  const handleReviewDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`)
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.filter((post) => {
          return post.id !== id
        }),
      }));

      setReviewComments((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
    }));
    history.push(`/reviews/`)
    } catch (err) {
      
    }
    }

  return (
    <div>
        <Media>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={45} />
          </Link>
          <Media.Body>
            <span className={styles.Username}>{owner} </span>
            <span className={styles.Date}>{updated_at}</span>
            <p className={styles.Comment}>{review}</p>
            <p>
              <Rating readonly initialValue={rating} size={25} />
            </p>
          </Media.Body>
          {is_owner &&  (
          <MoreDropdown
            handleEdit={handleShowEditModal} 
            handleShow={handleShow}
          />
          )}
        </Media>
        <hr />
        <ConfirmDelete
          showPopUp={show}
          handleClose={handleClose}
          handleReviewDelete={handleReviewDelete}
          type={type}
          message={message}
        />
        <ReviewEditForm 
          showEditModal={showEditModal}
          handleCloseEditModal={handleCloseEditModal}
          setReviewComments={setReviewComments}
          reviewId={id}
          review={review}
          rating={rating}
        />
    </div>
  )
}

export default ReviewComment