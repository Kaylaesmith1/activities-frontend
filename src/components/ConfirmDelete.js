import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

import btnStyles from "../styles/Button.module.css";

const ConfirmDelete = (props) => {

  const {
    showPopUp,
    handleClose,
    // handleEventDelete,
    // handleCommentDelete,
    handleReviewDelete,
    type,
    message,
  } = props


  return (

    <Modal show={showPopUp} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Are you sure?</Modal.Title>
    </Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>
{/* DELETE MODAL TO DELETE AN EVENT */}
      {/* {type === "event" && 
        <>
          <Button className={`${btnStyles.Button} ${btnStyles.Delete}`} onClick = {handleEventDelete}>
            Confirm Delete
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Modal}`} onClick={handleClose}>
            Cancel
          </Button>

        </>
      } */}
      { /* Delete Modal content for deleting a comment */ }
      {/* {type === "comment" && 
        <>
          <Button className={`${btnStyles.Button} ${btnStyles.Delete}`} onClick = {handleCommentDelete}>
            Confirm Delete
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Modal}`} onClick={handleClose}>
            Cancel
          </Button>

        </>
      } */}
      { /* Delete Modal content for deleting a review */ }
      {type === "review" && 
        <>
          <Button className={`${btnStyles.Button} ${btnStyles.Delete}`} onClick = {handleReviewDelete}>
            Confirm Delete
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Modal}`} onClick={handleClose}>
            Cancel
          </Button>

        </>
      }
    </Modal.Footer>
  </Modal>
    )
}
 
export default ConfirmDelete;