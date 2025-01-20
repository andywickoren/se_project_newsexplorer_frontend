React + Vite

NewsExplorer Front End

OVERVIEW

The NewsExplorer frontend application is a React-based single-page application (SPA) built with Vite, designed to allow users to search for and save news articles using the NewsAPI. Users can interact with dynamically rendered components, enjoy conditional styling based on application state, and experience responsive design tailored for both mobile and desktop viewports.

GENERAL FUNCTIONALITY

--Search News Cards

    Users can search for articles by keyword, which are fetched using the NewsAPI.
    Articles are displayed as "newscards," each showing:

        Image
        Date of publication
        Title
        Description
        Source

    Results are shown three at a time, with a "Show More" button to load additional articles.

--Saving Articles:

    Logged-in View:
        Logged-in users can save articles by clicking a bookmark icon, which toggles its style to indicate the save status.
        Saved articles appear on a dedicated "Saved News" page with:
            Keyword labels for each card.
            A trash icon for deletion.


    Logged-Out View:
        Visitors not logged in can view search results but cannot save articles.
        Clicking the bookmark icon displays a message prompting users to log in.

--Navigation:

    Navbar styles adapt depending on the current page ("saved-news" vs "home" page)

    Logged-In View:
        Navbar includes:
            NewsExplorer logo.
            Links to "Home" and "Saved News."
            A button displaying the user's name.


    Logged-Out View:
        Navbar includes:
            NewsExplorer logo.
            Links to "Home."
            A "Sign In" button that opens the Login Modal.

--Modals

    Register Modal:
        Allows new users to "register."
        Includes validation feedback for form fields, though data is not stored due to the absence of a backend.

    Login Modal:
        Validates user credentials to simulate logging in using a mock user.

--NewsCard Actions

    Clicking "delete" on the news cards saved on "saved-news" page immediately removes the card from view.

CURRENT STATE OF THE APPLICATION

    This application is currently in a test/demo state:

    Login Credentials: Use the mock user's details to log in:

    const mockUser = {
    email: "email@gmail.com",
    password: "password123",
    name: "Irene",
    };

    Backend Not Yet Implemented:
    The registrations modal displays validation and style feedback but does not store user data.
    Saved articles persist only in session memory for the demo.
    Note to reviewer: use email@gmail.com and password123 to login
    Use the triplpeten button in the footer to logout
    I did not see a logout option on the figma.  I was considering adding this feature on a popup on the username button, but am unsure there are more specific requirements.  For now, you can use the tripleten button to change isLoggedIn state and view the app logged out.

TECHNOLOGIES USED

    React: Core library for building the user interface.
    Vite: Bundler for fast development and builds.
    React Router: For client-side navigation and route handling.
    CSS: Custom styles for responsive design and component-specific styling.
    React Context API: For global state management, including isLoggedIn, isSavedNews, and viewport size detection (coming soon).
    NewsAPI: Powers article searches based on user-entered keywords.
    JavaScript Hooks:
    useContext, useLocation, and useEffect for state and side-effect management.

TO BE IMPROVED

    Backend Integration:
    Implement secure user authentication with JWT and database storage for user data and saved articles.
    Persistent State:
    Replace mock user and session-based article saving with a fully functional backend.
    Expanded Features:
    Add a more user-friendly logout feature
    Additional filters for articles
    Cloud deployment
    An additional page for viewing the full articles with larger display for images or related information, not shown in figma
    For now the application will be deployed to GitHub Pages for easy access and testing.
