# **Iowa Summer Activities**

The Iowa Summer Activities website was created to be a hub of information for people in the Des Moines (Iowa) area to checkout all types of summer activities. The city itself generally has a good handle on diseminating information about specific events but I wanted to incorporate general venues and activities into this sight that may not have a specific event date or time.

As such, visitors and residents alike can enjoy the number of activities and outdoor events that Des Moines has to offer, whether they're life-long Iowans or just visiting for a few days. This website will hopefully enable neighbors to connect with each other through similar interests while enjoying the hustle and bustle (or tranquility, depending on the activity) of the city in Summer.

Through the platform, registered, logged-in users can create events and upload information about them. Users can also create a profile and like and comment on others' posts, leave a review of an event and follow other users.

Though it could have a place in a real-world setting, this website was created for Portfolio Project 5 (Advanced Front End) as part of the Diploma in Full Stack Software Development program through [Code Institute](https://www.codeinstitute.net). Iowa Summer Activities is ficticious and does not provide veritable information for events happening in Iowa.

Take a look at the live website [here](https://activities-frontend-6f71eff2ee1a.herokuapp.com/).

![Responsive design](images/amiresponsive.png)
## Table of Contents

- [Project](<#project>)
    * [Objective](<#objective>)
    * [Site Users Goal](<#site-users-goal>)
    * [Site Owners Goal](<#site-owners-goal>)
    * [Project Management](<#project-management>)

- [User Experience (UX)](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [User Stories](<#user-stories>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)

- [Existing Features](#features)
  * [Navigation](#navigation)
  * [Authentication](#authentication)
  * [Homepage](#homepage)
  * [Feed](#feed)
  * [My Events](#my-events)
  * [Create an Event](#create-an-event)
  * [Event Detail Page](#event-detail-page)
  * [Reviews](#reviews)
  * [Profile Page](#profile-page)
  * [Contact](#contact)
  * [Reusable React Components](#reusable-react-components)

- [Features Left To Implement](<#features-left-to-implement>)

- [Technologies Used](<#technologies-used>)
    * [Languages](<#languages>)
    * [Frameworks & Software](<#frameworks--software>)
    * [Libraries](<#libraries>)
- [Agile Workflow](#agile-workflow)
  * [Github Project Board](#github-project-board)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

# **Project**

## Objective

The objective of this project was to create a web application where people can share information about activities and events happening in the Des Moines, Iowa area. The application could also serve as a way to meet new people within the community, while participating in local events.

Given the various attractions Iowa has to offer, this application not only enables neighbors to participate in specific events, they can also glean information on state parks and other sites of interest that aren't happening at a specific time. Through this platform, users can view a list of events, create their own, edit or delete it and comment on and review other posts. Users can also filter the content through keyword or post author and follow other users.

## Site User's Goal

People using this application are generally either interested in gaining information about events happening in the area or wanting to post information about an activity. As previously mentioned, however, users will also be able to find non-specific activities like campsite, state parks, nature reserves, etc. This is a platform that can include any type of activity, whether it's a specific planned event or just something 'fun' to check out in Des Moines or in Iowa. 

Once users participate in an activity or travel to a place, they leave a review comment and 0-5 star review. Users can also leave comments on posts for activities and events, 'like' (and 'unlike') activities and follow users they're interested in. Users are unable to review activities, like or leave comments on posts for which they are the author.


## Site Owner's Goal

As the site owner, I was originally interested in a platform I could share with my immediate family for a foreign visitor coming to Iowa this summer. Some in our family aren't on social media, which is the main way people find out about activities and events happening in our community. I wanted to have a list of activities, restaurants, state parks, ice cream parlors, etc as a trove of information so our visitor would be able to take advantage of her time in the state of Iowa as much as possible. 

Once starting the development process of this application, I realized that this platform could be beneficial to users outside my family for the same reasons. As such, I encourage all members of our community to visit the website, attend some of the activities and post their own. Through following other users and interacting with others on the site itself, neighbors can become friends and our small community can continue to grow.

[Back to top](<#table-of-contents>)

## Project Management

### GitHub Project Board

Before starting the frontend of this project, I thought about EPICs and user stories I wanted to include for a good user experience for visitors to this platform. I started by reviewing what I'd created for the [backend project board](https://github.com/users/Kaylaesmith1/projects/3/views/1) for the backend API, which included various user stories for each app created. Since most features were already covered from the backend, I focused my EPICs on then avigation bar and homepage, adding a couple user stories to EPICs for three apps: Following, Profiles, and Comments. 

Similarly, on the frontend project board, each user story belongs to an EPIC and I prioritized them using the MoSCoW method.



![User Stories](images/frontend-user-stories.png)
![Project Board](images/frontend-proj-board.png)

[Back to top](<#table-of-contents>)

# **User Experience (UX)**

## Wireframes

The wireframes for the project were created using [Figma](https://www.figma.com/). Wireframes have been created and included for both desktop and mobile devices. The application itself is responsive for desktop, tablet and mobile-sized devices. 

The layout closely follows the Moments walkthrough project, including a navigation bar with registration and login features, the activities section in the middle as posted events and on the right, on a desktop device, a list of most followed profiles. On smaller devices, the navbar becomes a hamburger menu, the most follow profiles move to the top of the page and the events are underneath. This layout was chosen for ease and because the information translates well through various device sizes. I found this layout easy to navigate from my desktop, laptop and mobile.

<details><summary><b>Wireframes</b></summary>

![Home Page](images/wireframe-homepage.png)
![Create Event Page](images/wireframe-create-event.png)
![Edit Event Page](images/wireframe-edit-event.png)
![Contact Page](images/wireframe-contact.png)
![Reviews Page](images/wireframe-reviews.png)
![Profile Page](images/wireframe-profile.png)
![Edit Profile Page](images/wireframe-edit-profile.png)
![Signin Page](images/wireframe-signin.png)
![Signup Page](images/wireframe-signup.png)

</details><br/>

## User Stories
Like with the backend, I used the Kanban project board in GitHub to help guide me through the user stories for the frontend application. creating this API. I used Agile principles again to create 5 EPICs and their subsequent user stories, where each user story belongs to one EPIC. Since most user stories dealing with my 7 separate apps in this project were discussed in the backend README documentation, I'll cover new EPICs here along with their user stories.

### EPIC | NavBar
As the developer I can create a functional navigation bar at the top of my page so that users can easily look at different pages of the site.

#### User Stories
- As a user I can click each navbar icon so that I am redirected to different pages.
- As a user I can upload a profile picture so that other users can see who my account belongs to.

### EPIC | Homepage
As the developer I can create a homepage where users can log in / register and see site information so that they know of events occurring.

#### User Stories
- As a user I can create an account so that I can create and view events and see other users' profiles.
- As a user I can log into my account so that I can interact fully with the website.
- As a logged in user I can see a list of events so that I can decide if I'm interested and/or want to attend.
- As a logged in user I can click a specific event so that I can see the details of that event.
- As a logged in user I can click the 'create event' button so that I can create an event and add information about it for others to see.
- As a logged in user I can use the search bar so that I can search for events by keyword.
- As a logged in user I can view the 'popular profiles' section so that I can see profiles of other users and choose to follow them.

### EPIC | Profile
As the developer I can create a Profile section so that users can update personal information and images.

#### User Stories
- As a user I can upload a picture so that other users can see who I am via my profile.
- As a user I can view others' profiles so that I can see their posts and profile details.
- As a user I can edit my own profile so that the information always remains updated and correct.
- As a user I can change my username and password so that these credentials are updated in case of a security issue.

### EPIC | Comments
As the developer I can create a Comments section so that users can comment on posts and interact with others on the site

#### User Stories
- As a user I can comment on an event so that others will know my opinion.
- As a user I can view other comments on an event so that I can see others' opinions on that event.
- As a user I can edit my own comments so that information is corrected.
- As a user I can delete my own comments so that any erroneous information from a comment is not on the site.

### EPIC | Following
As the developer I can create a followers section so that registered, logged in users can follow and unfollow other users.

#### User Stories
- As a user I can follow another registered user so that I can view their profile on my feed page.
- As a user I can unfollow another registered user so that their profile information will no longer be visible on my feed page.
- As the developer I can create follow / unfollow buttons so that registered, logged in users can follow and unfollow other users.


[Back to top](<#table-of-contents>)

## Site Structure

 The Iowa Summer Activities website is interactive, both for non registered, non logged-in users and for users signed into their account. Depending on the login status, some pages may not be visible to the user. When a user is not logged into their account, they see the home page, the sign in page and the sign up page in the navigation bar. . Onces logged in
  is split up in two parts: when the user is logged out and when the user is logged in. Depending on login status different pages are available for the user. When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. When the user is logged in Feed, My Events, Reviews, Signout and Profile Page also become available.

## Design Choices

* ### Color Scheme

When choosing a color palette for this application, I wanted something bright and summery but that had contrasting tones for text. I wanted to have a lighter backgroud color but still have the navitation bar and post sections stand out so as not to take away from the actual content of the site. 

Though seven colors can seem excessive, the darker colors are only used for some of the text and various icons, while the lighter tones are used for buttons and the rest of the overall layout of the page.

![Color Palette](images/color-scheme.png)

* ### Typography

The main fonts used on this site are 'Montserrat' and 'Lato', both with a fallback font of Sans-Serif, should the page not load properly. These fonts are both clear and have good letter spacing on their own, which make them easy to read for most users.

![Typography Lato](images/typography-lato.png)
![Typography Montserrat](images/typography-montserrat.png)

[Back to top](<#table-of-contents>)

# **Existing Features**

* ## Navigation

The navigation bar is straight forward and easy to interact with. Depending on the user's log-in status, different icons for different pages are visible. When navigating from a tablet or mobile device, the full navigation bar becomes a hamburger dropdown menu with the site icon to the far left.

For first time users and for those who are logged out of their account, the following menu is visible:

* Iowa Summer Activities Logo - On the far left hand side of the navigation bar users can see the Iowa Summer Activities logo. This logo is identical to the browser tab favicon for easy brand recognition and is visible on all pages of the site. Clicking the logo will return the user to the homepage.
* Homepage - The first menu icon and the landing page of the site is the homepage. Here, the user can see all activities, their descriptions and view any comments. At the top, there is a search field where users can search an activity by keyword or author, while on the right-hand side, there is a section of most followed profiles.
* Authentication - Users can either sign up for an account or sign into their existing one. Clicking either of these icons will take users to the corresponding page.

![Logged-out Navbar Desktop](images/navbar-desktop-loggedout.png)
![Logged-out Navbar Mobile](images/navbar-mobile-loggedout.png)

Once logged in, the user will see additional icons and be able to navigate to those pages. Those include:

* Create an Event - On this page the user can create a post for an activity. They're asked to enter in a title, a brief description and to upload an image. Both the image and title fields are obligatory.
* Feed - Here users can see a list of activities. To the right, they have a section of 'most followed profiles' and just under the navigation bar, a search bar is visible where users can search by keyword or by author.
* Liked - This page shows all events or activities the logged-in users has 'liked'. Clicking again on the heart icon will 'unlike' the activity and it will be removed from this page upon refresh. 
* Contact DSM - Users can contact the Des Moines city officials in charge of this website and who have an eye on the activities posted. Given that this site has been developed for learning purposes only, the contact messages go to the backend API database and not to a real city official. 
* Reviews - Users can review any activity for which they are not the author. They can leave a review message and a star review of 0-5 stars as well as reading other users' review posts. Users are unable to review an event they posted and users can not review an activity more than once.
* Authentication - The only icon that appears for logged-in usres is the 'sign out' icon, which will log the user out if clicked and return them to the homepage.
* Profile - This is the user's own profile that will show their avatar image if they uploaded one. If not, a default avatar image will be displayed. Clicking the avatar will bring them to their profile page where they can see all activities they posted and update their profile. Users can change their username or password and edit their profile, updating the avatar image and their bio information.

![Logged-in Navbar Desktop](images/navbar-desktop-loggedin.png)
![Logged-in Navbar Mobile](images/navbar-mobile-loggedin.png)

## Authentication

<!--Users who are new to the site, or haven't previously created an account can click on the Signup Menu option on the Navigation Bar to create a user account.  I have used the standard dj-rest/auth/registration user account signup process for this. 

![Sign up](images/signup.png)

If a user has a Happening user account, they can click on the Signin menu option in the Navigation Bar to sign into their account.

![Sign in](images/signin.png)

If the user wishes to sign out, once signed in, the sign out option becomes visible in the Navigation Bar for them to select. 

* ## Homepage

There are four main react components which make up the Home events page. 

1. Popular Profiles Component
2. Events posts
3. Top Upcoming Events
4. Search and Filter

### Popular Profiles Component

The popular profiles component is a permanent feature across the entire site. It appears at the top of all pages. This component uses a filter to order all site users by followers count from highest to lowest. The users with the highest follower count are determined to be the most popular profiles and the top six are displayed within the popular profiles component. 

If the user isn't logged in, they can see avatar, and the username of the top 6 most popular profiles, and if the user is logged in, they will also see a button enabling them to follow or unfollow the profile. 

![Popular Profiles - logged out](images/popular-profiles-loggedout.jpg)
![Popular Profiles - logged in](images/popular-profiles-loggedin.jpg)

If the follow button is greyed out, it is because your own profile has made it to the top 6 most popular profiles list, but you are not allowed to follow yourself. Originally, it was simply the case that no button appeared under your own profile but aesthetically, this didn't look good and the component didn't look balanced, so I decided to put an inactive button with a tooltip there instead. 

![Popular Profiles - own profile](images/popular-profiles-followyourself.jpg)

Each profile avatar can be clicked on to view the full profile page of that user. 

### Events Posts

All events that are created through the Happening sharing platform are displayed on the Homepage. All events created are requested from the API and they are ordered by the created date starting with the most recently posted and working backwards. 

![Event](images/event.jpg)

Each event posting displays the user who shared it and the date it was shared. The event poster is in the center, and underneath are the event details. In bold, you can see the event title and the date it's going to take place. Next is a description of the event, and the tags.

Each event has three counts shown - A count of people interested in the event, a count of people planning on going to the event, and a count of comments users have posted about this event. 

The first two counts work on a toggle system but in addition to this, they are also mutually exclusive. You can click the interested button on and off to make the count go up and down. Equally, you can click the going button on and off to make the count go up and down. However, if you have previoulsy clicked interested, and now you've decided to attend the event, by clicking the going button, the interested count automatically goes down by 1 as the going count goes up by 1. And vice versa. You can't be both interested and going to an event. It must be one or the other. 

By clicking on the event image or the comments count, the user is taken to the event details page.

### Top Upcoming Events

The third component of the events page is the Top Upcoming Events component. In desktop view, this is shown next to the popular profiles and events, and on tablet and mobile devices, this component moves over into the center and is displayed between the popular profiles and the events. 

This component uses two filters: The first filter comes from the API and orders all site events by going count from highest to lowest. Next, I used a Javascript filter on the frontend results to check the event date, and filter out any events where the event_date field is in the past. There is no point continually promoting fantastic events which have already taken place. Finally, on smaller devices I've taken just the top five results so that it fits better on smaller screens. 

If you click on any of the top events listed, you are taken to the event details page.

![Popular Events - Desktop](images/popular-events-desktop.jpg)
![Popular Events - Mobile](images/popular-events-mobile.jpg)

### Search and Filter

If the user wants to search for specific events or an event, they have two ways to achieve this:

1. All events are assigned a category on creation, and so the events list can be filtered by these categories to show only the events in one category selected by the user from the dropdown options. 

2. Search - The user can search all the events listed by event title, username who posted it, event date, or event tags. This search can be used in conjunction with the category filter or independently, but when the site has a lot of shared events, using both search and filter together makes the overall search facility much more efficient. 

![Events Filter](images/search-filter.jpg)

* ## Feed

The feed page looks identical to the homepage, only the Events Posts component changes. In this page all the events are requested from the API, but then a filter is used to only show events posted by profiles that the currently logged in user is following. For this reason, this page doesn't work if the user is not logged in. Equally, if the user isn't following any other profiles, no events will be displayed and a 'No Results found' message will appear instead inside the events posts component. 

![Feed- No Results](images/no-results.jpg)

* ## My Events

The My Events page looks identical to the homepage, only the Events Posts component changes. On selecting the My Events menu option in the NavBar, you are shown a dropdown with two additional options. Interested or Going. If you select interested, the events posts component will be filtered to only show the events where the logged in user has clicked the interested button. Alternatively, if the user selects the going option from navbar dropdown, the filter changes to only show events where the logged in user has clicked the going button. 

In the original plan for this project, I wanted the My Events page to be a combination of all the events where the user has selected either interested or going on an event. Initially, I tried to set up the backend API and display both these filters at the same time, but I couldn't join the two filterset fields together. I asked among the slack community and others had achieved adding two filters together with an AND command, but nobody seemed to know how to do an OR command. I consulted my mentor further into the project when I had the frontend up and running and he was also unsure how this could be achieved and suggested I just add an additional filter dropdown to toggle between the two for now. 

* ## Create an Event

If you are logged in, you are able to share new events with the community. By clicking on the Add Event menu option in the Navigation Bar, you are taken to the Share a New Event page, where you can submit the event creation form to the API.

All fields are mandatory apart from the event description (which may be understood from the event poster image that is uploaded) and an image must be uploaded for the event to be submitted successfully. Once the form has been submitted successfully, you can see the event published successfully as you are re-directed automatically to the newly created event details page. 

Each time you share a new event with the community, your events count goes up on your profile page for other users to see how active you are as an event host. 

![Create an Event](images/event-create.jpg)

* ## Event Detail Page

In the event details page, this simply shows everything relating to one single event. You can reach this page by clicking on an event image in any of the events pages or on the event title in the Top Upcoming Events component and Reviews page. It also shows the popular profiles component and the Top Upcoming Events component for continuity across the pages. If you are the owner of the event, from this page you have the option to edit or delete the event by clicking on the three dots that appear next to the event posted date. 

If you select Edit, you are taken back to the event creation form, but the fields are already pre-populated with the existing event information. You can edit the desired fields and save the changes, which will return you to the event detail page and you can see that the event has been updated successfully. 

![Edit an Event](images/event-edit.jpg)

If you select Delete, a pop-up message appears asking you if you are sure you want to delete this event. This defensive design component allows the user to cancel out of the deletion process if the button was pressed in error. If however, the user wishes to proceed with the deletion they can click confirm and the event will be removed from all pages and the user redirected back to the previously visited page. 

![Delete an Event](images/event-delete.jpg)

Below the event details is the comments section. If there are no comments yet, the user will see a message telling them that there are no comments. 

If the user is not logged in, they can read any comments that have been posted but they can't post a comment themselves unless they log in. 

![Comments - not logged in](images/comments-none.jpg)

Any comments that have been posted about this event are displayed, regardless of login status. If the user logs in they will see a comment form above the existing comments where they can post their own comments about the event for other users to read. 

![Comments](images/comments.jpg)

* ## Reviews

If the user is logged in, they can access the reviews page. The structure of this page is the same as the other events pages with the popular profiles component, the top upcoming events component and the search events component all still visible. The filter for the events listed however is different. The initial filter in the App.js file (filter={`?ordering=-event_date`}) orders the full list of events retrieved by their event_date in descending order. Once the full list has been called and ordered, a second filter (event_date__lte=${date}) is applied to remove any events where the event_date is less than or equal to today's date.

This differentiates the usage between the comments feature and the reviews feature. The comments are intended to be posted while an event is being promoted, prior to it taking place, to gauge the level of enthusiasm for the future event. The reviews are only for past events that have now taken place where people who attended can leave their feedback for others to read. 

When the user first enters the reviews page, each past event is listed with the following information: The profile avatar of the event host, the event title, the event date, the event's average rating score and the review count. This information is displayed in an in-line block on desktop devices and in column format on tablets and mobile. 

![Event Review Summary - desktop](images/review-desktop.jpg)
![Event Review Summary - mobile](images/review-mobile.jpg)

If you hover your mouse over the review count a tooltip tells you that you can click to view the individual opinions which have been left. The review comments component will open and close on a toggle function as you click the review count button. 

![Event Review Comments](images/review-comments.jpg)

Each event has a button prompting the user to post a review. If you are the owner of the event, a tooltip will tell you that you are not allowed to review your own event, and the button remains inactive. Similarly, if you have already posted a review to the selected event, the tooltip will tell you that you have already reviewed the event and will prevent you from posting a second. You can click on the event title to take you to the event details page and see more information about the event. You can also click on the avatars to see the profile page of the user who posted the event, or the profiles of other users who have left reviews.  

If the event is not your own, and you haven't previously submitted a review, you can click the button and access the modal pop up for writing a review. 

![Write a Review](images/review-create.jpg)

The review form has two parts to it. Firstly, it has a five star rating component, which I installed and followed the library documentation from [NPM React Simple Rating](https://www.npmjs.com/package/react-simple-star-rating). Then it has a text input field for users to publish an opinion. The input field is mandatory so you must leave a comment if you want to post a review, but if you leave the star rating blank, it will assume you are leaving a bad review and allocate 0 stars to your published review, and the average rating for the event will be recalculated accordingly. 

If you make a typing error or you wish to change your comments, once the review is published you have the option to edit the comments, or delete the entire review and start again if you want to change the star rating as well. If you want to delete the review, similarly to the event deletion, you will see a popup message asking you to confirm the delete request before it is actually removed from the site. 

![Edit a Review](images/review-edit.jpg)

* ## Profile Page

Throughout the site, wherever you see profile avatars, albeit in the popular profiles component, or next to events, comments or reviews that have been published, you can click on the avatar to view the full profile page of that user. In the Navigation Bar, in the authentication dropdown, you can access your own profile page as well.  

### Profile Stats

When a user signs up and creates a new site account, a basic profile is automatically created with a username, password and defauly avatar image. The only information that subsequently gets updated in the profile page is the site usage stats, as follows: 

* Number of events the user has posted
* Number of events the user has flagged as going
* Number of profiles they are following
* Number of profiles that are following them

There is an about container and a contact details container which remain empty until the user goes into their own profile page and clicks on the three dots dropdown to Edit the profile and add their personal details to the page. If they click on the Edit Profile option, they are taken to a new page containing the full profile details form to fill in and submit. Here, they can add their own avatar image, a name, bio, website address, instagram or facebook link, a telephone number and an email address. These are designed mainly to give event hosts the opportunity to publish additional contact information and social media links but of course all users are welcome to add as much or little personal info as they wish. 

![Profile Edit](images/profile-edit.jpg)

Once these fields have been filled in, they can be seen by other users in the main profile page stats container. Any website links that are entered can be clicked on to open the website in a new browser tab. 

Each profile also has a follow button inside the stats container so that other users can click it to follow and unfollow the profile as all profiles won't always appear listed in the popular profiles component, to access the follow functionality there. 

![Profile Stats](images/profile-stats.jpg)

### Profile Posts

Below the profile stats you can see all the events posted by the profile you are viewing. Any of these can be clicked on to view the individual event detail page with comments if there are any. 

* ## Contact

At the top of the profile page, the user can still see the popular profiles component as a permanent feature across the site, but the top upcoming events component has been replaced by a messaging system component. On desktop devices the message component is visible on the right of popular profiles, but for tablet and mobile it moves into place between the popular profiles and the User Profile Stats. 

If you are viewing someone else's profile, the message component contains a form to write a message and send it to the owner of the profile page you are viewing. 

![Create Message](images/message-create.jpg)

If you are viewing your own profile page the messaging component will display your own private message inbox. Other users will not be able to see the messages that have not been sent to them. All messages that have been sent to you, are displayed in descending order of when they were sent. You can see the avatar and the username of the sender, the date the message was sent, and the message itself. Each message has a 'reply' button if the user wants to send a reply message back to the sender. 

![Received Messages](images/message-inbox.jpg)
![Messages - Reply](images/message-reply.jpg)

Unlike with other forms such as creating an event, comment or review, where you can see the published content once the form has been posted successfully, the user does not have access to other user's inboxes to check whether the message has been sent successfully or not. For this reason, in the case of the messaging component, I have set up an alert system using Bootstrap alerts, to display a success alert message when a message or a reply message have been sent successfully. This adds to good user experience, and user peace of mind. 

![Message Alert](images/message-alert.jpg)

Equally, if the user tries to send a blank message, they will see a Bootstrap warning message telling them that they must fill in the message field in order to send the message successfully. 

![Message Alert](images/message-error.jpg)

For the time being, there is no alert system in place to send a notification to a user when they receive a new message, but this is something I would like to look into in future development sprints.

* ## Reusable React Components

### Three Dots Edit Delete Dropdown Menu

Based on the Moments walkthrough project 'MoreDropdown' component, I have utilised the same idea in my project but extended it's use even further to be accessed when editing or deleting events, comments and also reviews. In addition to this re-usable component which I learnt from the course tutorials, I also developed four more custom re-usable components specifically for my project.

### Delete Confirmation Component

In order to improve defensive design, I wanted to add a validation check before data gets deleted from the site. For this reason, I have developed a modal pop-up component which double checks whether the user wants to continue with their choice, after having clicked the delete button from the EditDeleteDropdown component on an event, a comment or a review. This component checks what type of data the user is trying to delete, and customises the modal message appropriately. On clicking the 'Confirm Deletion' button the corresponding handleDelete function is called, and the data is removed from the site

![Delete Event](images/delete-event.jpg)
![Delete Comment](images/delete-comment.jpg)
![Delete Review](images/delete-review.jpg)

### Date Formatter Component

Originally, I tried to format the event event_date field on the backend, but it caused all sorts of error messages and I couldn't quite get it to work correctly. Having consulted tutor support, they told me that it was also possible to leave the date format on the backend and just format it where necessary on the frontend. There are three areas in this site where event_date is published; in the event posting, in the top upcoming events component, and in the review listings. 

When I tried requesting the event_date from the API in a formatted form, it came through OK, similar to how the created_at date is formatted in the backend, but then when it came to pre-populating it back into an edit form, it wouldn't go back correctly into the date field. I therefore decided to leave the date format for all the API requests in it's original format, and just created a re-usable function - 'DateFormatter.js' to make it appear nicely for the front end user to view. 

![Date Unformatted](images/date-before.jpg)
![Date Formatted](images/date-after.jpg)

### Alert Component

As stated previously, there is no way for the user to check whether the message form has been submitted correctly or not, as the user doesn't have access to other user's inbox. I therefore wanted to set up a bootstrap success alert. Initially I created this as a single function inside the MessageCreateForm.js component. In a later sprint, when I was developing the reply feature, I decided to create a re-usable Alert component which could be used interchangeably between the send message and reply message forms. I refactored the code inside the MessageCreateForm component and imported the newly created AlertMessage component into the ReplyMessageForm.js component as well. In future development, I can extend this functionality to show user alerts in more areas of the site. 

### Scroll to Top Component

With the infinite scroll functionality in place, once there are a lot of events posted to the site, and the user scrolls a long way down looking at posts, once they want to return to the navbar options, it takes a long time to manually scroll all the way back up again, harming user experience.  For this reason, I have implemented a button which appears once the user has scrolled down more than 1000px ( appears after viewing the first post) and remains fixed to the bottom of the screen for when the user wants to return to the navbar menu at the top. 

Initially I implemented a simple button at the bottom of the events pages screen which takes the user back to the top of the window. However, in this scenario the user has to scroll through all events to reach the button. Looking at an article from [W3Schools](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) I added CSS to fix the button to the bottom of the page, and a function to keep the button hidden until the user has scrolled down more than 1000px. I moved this function into a re-usable hook component, which I then imported into the Profile Page and the Reviews page as well. 

![Back to the Top Button](images/scroll-button.jpg)

[Back to top](<#table-of-contents>)

# **Features Left to Implement**

* Add a notification system in to alert users when they receive a new message
* Differentiate between types of users - event hosts and event attendees -  set up profiles pages accordingly
* Turn this into a mobile app
* Get users from my town signed up and using the site to generate data, and get real user feedback for future sprints
* Set alerts for when events in your MyEvents page are about to take place

[Back to top](<#table-of-contents>)

# **Technologies Used - Frontend**

## Languages

* [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website.
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
* [React.js](https://en.wikipedia.org/wiki/React_(software)) - Provides the base for the frontend components

## Frameworks & Software
* [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build solid, responsive, mobile-first sites
* [Balsamiq](https://balsamiq.com/) - Used to create the wireframes
* [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories and bug reports.
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance.
* [Responsive Design Checker](https://www.responsivedesignchecker.com/) - Used for responsiveness check across devices.
* [Favicon](https://favicon.io/) - Used to create the favicon.
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness.
* [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.
* [My Free Logo Maker](https://myfreelogomaker.com/explore) - Used to create the Happening brand logo
* [ColorSpace](https://mycolor.space/?hex=%23081045&sub=1) - Used to create the colour palette
* [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
* [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
* [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

## Libraries

* [NPM React-star-rating](https://www.npmjs.com/package/react-simple-star-rating) - A simple react component for adding a star rating to your project.

[Back to top](<#table-of-contents>)

# Testing

Please click [**_here_**](TESTING.md) to read more information about testing Happening Frontend

[Back to top](<#table-of-contents>)

# Deployment

### Deployment to Heroku

Once you have created a new gitpod workspace and set up the new project, you are ready to deploy to Heroku. 

1. In your heroku account, select Create New App, and give it a unique name related to your project. 
2. Select a region corresponding to where you live and click 'Create App'.
3. Head into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
4. Click 'Deploy branch' to trigger Heroku to start building the application. 
5. Once you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser. 

### Connect React Frontend to the API backend

Once you have set up the workspace and done a basic deploy to Heroku, you can connect the react workspace to your API, in order to send data to the API

1. In the Heroku dashboard, go into the API application settings
2. In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application. In my case, this would be [https://happening-react.herokuapp.com](https://happening-react.herokuapp.com).
3. Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, remembering to remove the trailing slash at the end. Gitpod occasionally changes this URL so keep an eye on it, as you are working on your project. 
4. Go back into your frontend Gitpod workspace, and install the Axios library using the command 'npm install axios'.
5. Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
6. import axios at the top of the file
7. Define your baseURL which is the unique URL of your deployed API project. In my case this would be [https://happening-api-kelz.herokuapp.com/](https://happening-api-kelz.herokuapp.com/)
8. Set the content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
9. In order to avoid any CORS issues, set withCredentials to True.
10. Import this file into App.js to be used across all pages

### Fork this Project Repository

It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.

### Clone this Project Repository

A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.

![Clone](images/clone.jpg)

[Back to top](<#table-of-contents>)

# Credits

* The image on the sign in and sign up page was taken from [Unsplash.com](https://unsplash.com/photos/ekvNI_03FLM)
* The Upload image on the create event, and edit event and profile page is taken from [pngtree.com](https://pngtree.com/so/uploading)
* The No Results found image is taken from [hajde/media](https://hajde.media/forum/60)
* I used [freelogodesign.org](https://www.freelogodesign.org/manager) to design the Happening brand logo
* I used [fotor.com](https://www.fotor.com/features/background-remover/upload) to make the image background transparent on the logo
* I was passed this [article](https://christopher-dent.medium.com/adding-a-delete-confirmation-to-your-react-app-55221701daa6) by tutor support, in order to help me learn how to create a delete confirmation modal component.
* Once I had the modal component functioning correctly, in order to refactor it into a re-usable component, I found this helpful [article](https://codemoto.io/coding/react/react-delete-confirmation-modal) to make the necessary changes.
* I read this article on [Stack Overflow](https://stackoverflow.com/questions/53772417/react-how-to-filter-events-according-to-date) which helped me to create the date filter for the top upcoming events component
* I then found another article on [Stack Overflow](https://stackoverflow.com/questions/19097631/missing-invoking-a-constructor) to fix the console warning about component brackets.
* I used [reactgo.com](https://reactgo.com/react-get-current-date/) to learn how to make a variable for today's date
* I looked at my Mentor, Gareth McGirr's [P5 Project](https://github.com/Gareth-McGirr/body-doodles) to help me get an understanding of how to implement the React-simple-star-rating package. 
* I read this documentation on the [Star Rating System](https://www.npmjs.com/package/react-simple-star-rating) to help with the install and use of the external component
* I read an article by [gitconnected.com](https://levelup.gitconnected.com/how-to-create-a-scroll-to-top-button-in-reactjs-7b2f2563d6b0) to help me create a scroll to the top button
* I read an article by [W3schools.com](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) which helped mt to turn the scroll to top element into a re-usable component

# Acknowledgements
This fictional site was created for Portfolio Project #5 (Advanced Front End Specialisation) - Diploma in Full Stack Software Development at the [Code Institute](https://www.codeinstitute.net). I would like to thank my mentor Gareth McGirr for his support and feedback during the project. I would also like to thank everyone in my Slack class for their support, and on all the slack channels for answering my questions and concerns during this project and throughout the course. 

*Kelly Hutchison, June 2023*

[Back to top](<#table-of-contents>)
