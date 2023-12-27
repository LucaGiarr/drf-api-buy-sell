# Table of Contents

- [User Story Testing](#user-story-testing)
  - [Navigation](#navigation)
  - [Routing](#routing)
  - [Authentication - Sign Up](#authentication--sign-up)
  - [Authentication - Sign in](#authentication--sign-in)
  - [Authentication - Logged in Status](#authentication---logged-in-status)
  - [Authentication - Refreshing access tokens](#authentication---refreshing-access-tokens)
  - [Navigation - Conditional rendering](#navigation---conditional-rendering)
  - [Advert page](#advert-page)
  - [Search for an advert](#search-for-an-advert)
  - [View most recent adverts](#view-most-recent-adverts)
  - [View details of an advert](#view-details-of-an-advert)
  - [Infinite scroll](#infinite-scroll)
  - [Create an advert](#create-an-advert)
  - [Edit an advert](#edit-an-advert)
  - [Contact a seller](#contact-a-seller)
  - [View messages](#view-messages)
  - [Message date](#message-date)
  - [Profile page](#profile-page)
  - [View all adverts by a specific user](#view-all-adverts-by-a-specific-user)
  - [Edit profile](#edit-profile)
  - [Update password](#update-password)
  - [Delete an advert](#delete-an-advert)
- [Validator Testing](#validator-testing)
  - [HTML](#html)
    - [Note 1](#note-1)
  - [CSS](#css)
  - [Javascript](#javascript)
  - [Python](#python)
  - [Lighthouse](#lighthouse)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
- [Browser Testing](#browser-testing)
- [Device Testing](#device-testing)
- [Manual Testing](#manual-testing)
- [Bugs](#bugs)
  - [Fixed Bugs](#fixed-bugs)
    - [Footer not staying at the bottom of the page](#Footer-not-staying-at-the-bottom-of-the-page)
    - [Number of comments not correct in the recipe detail page](#Number-of-comments-not-correct-in-the-recipe-detail-page)
    - [Error 404 when creating a recipe](#Error-404-when-creating-a-recipe)
    - [Error 500 when deleting a recipe](#Error-500-when-deleting-a-recipe)
    - [Error 500 when a new user Signs up and try to enter in the Profile page](#Error-500-when-a-new-user-Signs-up-and-try-to-enter-in-the-Profile-page)
  - [Unfixed bugs:](#unfixed-bugs)

## User Story Testing

#### Navigation

_As a user I can view a navbar from every page so that I can navigate between pages._

- The navbar is always at the top of all pages.

- [Navbar - Logged in](docs/testing_images/us_nav_logged%20in.png)
- [Navbar - Logged out](docs/testing_images/us_%20nav_logged%20out.png)
- [Navbar - Car page](docs/testing_images/us_nav_car%20page.png)
- [Navbar - Profile page](docs/testing_images/us_nav_profile%20page.png)

#### Routing

_As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh._

- The navbar allows to navigate quickly through pages.

#### Authentication - Sign Up

_As a user I can register a new account so that I can access all the features for signed-up users._

- [Sign Up page](docs/testing_images/us_sign%20up.png)

#### Authentication - Sign in

_As a user I can sign in to the app so that I can access functionality for logged-in users._

- [Sign In page](docs/testing_images/us-sign%20in.png)

#### Authentication - Logged in Status

_As a user I can tell if I am logged in or not so that log in if I need to access to features for logged-in users._

- When a user is logged in the profile image and the user's username are shown in the navbar.

- [User logged in](docs/testing_images/us_user%20logged%20in.png)
- [User logged out](docs/testing_images/us_user%20logged%20out.png)

#### Authentication - Refreshing access tokens

_As a logged-in user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised._

#### Navigation - Conditional rendering

_As a logged out user I can see sign-in and sign-up options so that I can sign in/sign up._

- When a user is logged out the "Sign In" and "Sign Up" are shown in the navbar that is shown in every page.

#### Advert page

_As a user I can view the adverts page so that I can see a list of cars for sale._

- [Advert page](docs/testing_images/us_nav_logged%20in.png)

#### Search for an advert

_As a user I can search for adverts with keywords so that I can find the adverts I am most interested in._

- [Advert page - search box](docs/testing_images/us_search.png)

#### View most recent adverts

_As a user I can view all the most recent adverts, ordered by most recently created first so that I am up to date with the newest adverts._

#### View details of an advert

_As a user I can view the details of another user’s advert so that I can buy a car._

- [Advert details](docs/testing_images/us_advert%20details.png)

#### Infinite scroll

_As a user I can keep scrolling through the adverts on the site, that are loaded for me automatically so that I don't have to click on "next page"._

#### Create an advert

_As a logged in user I can create an advert so that I can sell a car._

- [Create an Advert](docs/testing_images/us_create.png)

#### Edit an advert

_As an advert owner I can edit all the fields of my advert so that I can make corrections or updates after it was created._

- [Edit an Advert](docs/testing_images/us_edit.png)

#### Contact a seller

_As a logged-in user I can contact a seller by sending him/her a message so that I can ask more questions on the car on sale._

- The car owner can be contacted thanks to the email address shown in the profile page and through the message box at the bottom of the car page.

- [Contact a Seller - Email](docs/testing_images/us_contact%20email.png)
- [Contact a Seller - Send a message](docs/testing_images/us_contact%20message.png)

#### View messages

_As a logged-in user I can read messages I sent related to a car so that I can answer to them if required._

- The message box is located at the bottom of the car/advert page.

- [View messages](docs/testing_images/us_view%20messages.png)

#### Message date

_As a logged-in user I can see when a message was sent to a seller so that I know how old a message is._

- [Message box](docs/testing_images/us_message%20box.png)

#### Profile page

_As a logged out user I can view other users' profiles so that I can see their ads and thus what cars they are selling._

- [Profile page](docs/testing_images/us_profile%20page.png)

#### View all adverts by a specific user

_As a logged out user I can I can view all the adverts by a specific user so that I can catch up on their latest adverts._

- The profile page shows all the advert of a specific user.

#### Edit profile

_As a logged-in user I can edit my profile so that I can change my profile picture._

- [Edit Profile](docs/testing_images/us_edit%20profile.png)

#### Update password

_As a logged-in user I can update my password so that I can keep my profile secure._

- [Update password](docs/testing_images/us_edit%20password.png)

#### Delete an advert

_As an advert owner I can delete my advert so that all other users know that my car is not for sale anymore.As an advert owner I can delete my advert so that all other users know that my car is not for sale anymore._

- Only the owner of the car/advert can edit and delete an advert. Before deleting it he/she has to confirm if he/she is sure to delete the advert.

- [Delete advert](docs/testing_images/us_del%20advert.png)

## Validator Testing

### HTML

All HTML pages were run through the [W3C HTML Validator](https://validator.w3.org/). See results in below table.

| Link                                                                        | Logged out | Logged in |
| --------------------------------------------------------------------------- | ---------- | --------- |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/                        | No errors  | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/cars/39                 | No errors  | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/signin                  | No errors  | N/A       |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/signup                  | No errors  | N/A       |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/profiles/1              | No errors  | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/cars/38                 | No errors  | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/profiles/1/edit         | N/A        | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/profiles/1/edit/username| N/A        | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/profiles/1/edit/password| N/A        | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/cars/create             | N/A        | No errors |
| https://drf-api-buy-sell-f7b7b7adb241.herokuapp.com/cars/38/edit            | N/A        | No errors |

### CSS

No errors were found when checking the CSS file through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

| CSS file                    | Result     | 
| --------------------------- | ---------- |
| Index.css                   | No errors  |
| App.module.css              | No errors  |
| Asset.module.css            | No errors  | 
| Avatar.module.css           | No errors  | 
| Button.module.css           | No errors  | 
| Car.module.css              | No errors  | 
| CarAreaInfo.module.css      | No errors  | 
| CarCreateEditForm.module.css| No errors  | 
| CarDetailsSection.module.css| No errors  | 
| CarImages.module.css        | No errors  | 
| CarsPage.module.css         | No errors  | 
| ChatComponent.module.css    | No errors  | 
| NavBar.module.css           | No errors  |
| ProfilePage.module.css      | No errors  |   
| SignInUpForm.module.css     | No errors  | 

### Javascript

All Javascript code was checked and no errors were found when passing through [Jshint](https://jshint.com/)

### Python

All Python files were run through [Pep8](http://pep8online.com/) with no errors found.

### Lighthouse

The main pages of the deployed site were validated using the Lighthouse validation for both desktop and mobile in order to check accessibility and performance.

#### Desktop

| Page                  | Performance | Accessibility | Best Practice | SEO |
| --------------------- | ----------- | ------------- | ------------- | --- |
| index.html            | 92          | 96            | 92            | 90  |
| starters.html         | 91          | 96            | 92            | 90  |
| maincourses.html      | 91          | 96            | 92            | 90  |
| desserts.html         | 92          | 96            | 92            | 90  |
| other.html            | 92          | 96            | 92            | 90  |
| delete_recipe.html    | 92          | 96            | 92            | 90  |
| edit_recipe.html      | 83          | 96            | 92            | 90  |
| favourites.html       | 92          | 96            | 92            | 90  |
| personal_recipes.html | 92          | 93            | 92            | 90  |
| recipe_details.html   | 80          | 96            | 92            | 90  |
| recipe_form.html      | 82          | 96            | 92            | 90  |
| login.html            | 91          | 97            | 92            | 90  |
| logout.html           | 93          | 98            | 92            | 90  |
| password_change.html  | 93          | 98            | 99            | 90  |
| signup.html           | 89          | 97            | 92            | 90  |
| user_profile.html     | 92          | 97            | 92            | 90  |

#### Mobile

| Page                  | Performance | Accessibility | Best Practice | SEO |
| --------------------- | ----------- | ------------- | ------------- | --- |
| index.html            | 87          | 96            | 92            | 90  |
| starters.html         | 86          | 96            | 92            | 90  |
| maincourses.html      | 87          | 96            | 92            | 90  |
| desserts.html         | 85          | 96            | 92            | 90  |
| other.html            | 85          | 93            | 92            | 90  |
| delete_recipe.html    | 85          | 96            | 92            | 90  |
| edit_recipe.html      | 79          | 93            | 85            | 92  |
| favourites.html       | 80          | 92            | 85            | 92  |
| personal_recipes.html | 83          | 93            | 85            | 92  |
| recipe_details.html   | 78          | 92            | 83            | 92  |
| recipe_form.html      | 75          | 95            | 83            | 92  |
| login.html            | 84          | 97            | 83            | 92  |
| logout.html           | 82          | 97            | 83            | 92  |
| password_change.html  | 80          | 98            | 92            | 92  |
| signup.html           | 81          | 97            | 83            | 92  |
| user_profile.html     | 80          | 97            | 83            | 90  |

## Browser Testing

- The Website was tested on Google Chrome, Firefox, Safari browsers with no issues encountered.

## Device Testing

- The website was browsed mainly on devices such as Desktop, Laptop and iPhone 12 to ensure responsiveness on various screen sizes. The website performed well as intended. The responsive design was checked using Chrome developer tools on different devices with no issues encountered.

## Manual Testing

Manual testing were performed for both desktop and mobile. Because of time restraints, the below table is shown just some of the tests carried out and the results.

| Element               | Action     | Expected Result                                                                                                                             | Pass/Fail |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Logo area             | Click      | Redirect to home                                                                                                                            | Pass      |
| All Recipes Link      | Click      | Open All Recipes page                                                                                                                       | Pass      |
| Starters Link         | Click      | Open Starters page                                                                                                                          | Pass      |
| Main Courses Link     | Click      | Open Main Courses page                                                                                                                      | Pass      |
| Desserts Link         | Click      | Open Desserts page                                                                                                                          | Pass      |
| Other Link            | Click      | Open Other page                                                                                                                             | Pass      |
| Title of a recipe     | Click      | Open the details of that particular recipe                                                                                                  | Pass      |
| Sign Up Link          | Click      | Open Sign up page                                                                                                                           | Pass      |
| Sign Up Link          | Display    | Not visible if the user is logged in                                                                                                        | Pass      |
| Log In Link           | Click      | Open Login page                                                                                                                             | Pass      |
| Log In Link           | Display    | Not visible if the user is logged in                                                                                                        | Pass      |
| user Dropdown         | Display    | Present just when the user is logged in                                                                                                     | Pass      |
| user Dropdown         | Click      | Open user dropdown                                                                                                                          | Pass      |
| My Profile Link       | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| My Profile Link       | Click      | Open My Profile page                                                                                                                        | Pass      |
| Change Password Link  | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| Change Password Link  | Click      | Open Change Password page                                                                                                                   | Pass      |
| New Recipe Link       | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| New Recipe Link       | Click      | Open Add a Recipe page                                                                                                                      | Pass      |
| Likes icon            | Click      | If user is not logged in none happens                                                                                                       | Pass      |
| Likes icon            | Click      | Clicking the likes icon it changes to solid red                                                                                             | Pass      |
| Bookmark icon         | Click      | If user is not logged in none happens                                                                                                       | Pass      |
| Bookmark icon         | Click      | Clicking the bookmark icon it changes to solid grey                                                                                         | Pass      |
| Edit Recipe icon      | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| Edit Recipe icon      | Click      | Open Edit a Recipe page                                                                                                                     | Pass      |
| Delete Recipe icon    | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| Delete Recipe icon    | Click      | Open a page where the user needs to confirm deletion                                                                                        | Pass      |
| Personal Recipes Link | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| Personal Recipes Link | Click      | Open Personal Recipes page                                                                                                                  | Pass      |
| Favourites Link       | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| Favourites Link       | Click      | Open Favourite Recipes page                                                                                                                 | Pass      |
| Sign Out Link         | Display    | Only visible if the user is logged in                                                                                                       | Pass      |
| Sign Out Link         | Click      | Open Sign Out confirm page                                                                                                                  | Pass      |
| Hamburger Menu        | Responsive | Display when screen size reduces to large size                                                                                              | Pass      |
| Link in footer        | Click      | Open in new tab and to correct website                                                                                                      | Pass      |
| Recipe Details        | Display    | Display correct recipe title, image, author, website, likes, bookmarks and comments icons, ingredients, Recipe details, method and comments | Pass      |
| Likes icon            | Click      | If user is not logged in none happens                                                                                                       | Pass      |
| Likes icon            | Click      | Clicking the likes icon it changes to solid red                                                                                             | Pass      |
| Bookmark icon         | Click      | If user is not logged in none happens                                                                                                       | Pass      |
| Bookmark icon         | Click      | Clicking the bookmark icon it changes to solid grey                                                                                         | Pass      |
| User Comments         | Display    | Displays correct name date time and comment                                                                                                 | Pass      |
| User Comments         | Display    | Comments are ordered oldest to newest                                                                                                       | Pass      |

## Bugs

### Fixed bugs

#### Footer not staying at the bottom of the page

- **Fix** I set “main” bottom margin and I created a new class “main-min-height” and set the min height.

#### Number of comments not correct in the recipe detail page

- **Bug** The number of comments was not correct in the recipe detail page showing the sum of all comments (included the not approved once)
- **Fix** I Added to models.py “approved_comments”.

#### Error 404 when creating a recipe

- **Fix** I changed the queryset of from filter status=1 to get all.

#### Error 500 when deleting a recipe

- **Fix** I added "success_url" in the "RecipeDeleteView".

#### Error 500 when a new user Signs up and try to enter in the Profile page

- **Fix** Solution obtained following the video at this [link](https://www.youtube.com/watch?v=Kc1Q_ayAeQk).

### Unfixed bugs

Currently there are no known unfixed bugs.