import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm"
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";
import ReviewsPage from './pages/reviews/ReviewsPage';


import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

import BackToTop from "./hooks/BackToTop";
import btnStyles from "./styles/Button.module.css";
import { Button } from "react-bootstrap";






function App() {

  BackToTop();
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";


  return (
    <>

        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <PostsPage message="Sorry, no results match your search. Try another keyword."/>} />
              <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="Sorry, no results were found. Try searching a different keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="You haven't liked anything with that keyword. Try searching a different term or liking a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />

              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />}/>
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />}/>
              <Route exact path="/profiles/:id/edit/" render={() => <ProfileEditForm />}/>
              <Route exact path="/reviews" render={() => <ReviewsPage />} />

              
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
        
        <div>
  <Button
    className={`${btnStyles.Button} ${btnStyles.BackToTop} fixed-bottom-5 left-7 z-50 cursor-pointer`}
    onClick={handleBackToTop}
    title="Back to Top"
    id="scrollBtn"
  >
    <i className="fa-solid fa-circle-arrow-up" alt="back to top"></i>
    <br />
    <span>Back to Top</span>
  </Button>

</div>

        </>
  );
}

export default App;