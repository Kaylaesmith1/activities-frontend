// import Modal from "react-bootstrap/Modal";
// import Button from 'react-bootstrap/Button';

// import btnStyles from "../styles/Button.module.css";

// const ConfirmDelete = (props) => {

//   const {
//     showPopUp,
//     handleClose,
//     handleReviewDelete,
//     type,
//     message,
//   } = props

//   return (

//     <Modal show={showPopUp} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Are you sure?</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>{message}</Modal.Body>
//     <Modal.Footer>

//       {type === "review" && 
//         <>
//           <Button className={`${btnStyles.Button} ${btnStyles.Delete}`} onClick = {handleReviewDelete}>
//             Confirm Delete
//           </Button>
//           <Button className={`${btnStyles.Button} ${btnStyles.Modal}`} onClick={handleClose}>
//             Cancel
//           </Button>

//         </>
//       }
//     </Modal.Footer>
//   </Modal>
//     )
// }
 
// export default ConfirmDelete;