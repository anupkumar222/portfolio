import blogProject from "../assets/blogProject.png";
import shoppingCart from "../assets/ShoppingCart.png";
import githubBattleApp from "../assets/GithubBattleApp.png";

const ProjectCardData = [
    {
        imageSrc: blogProject,
        title: "Blog App",
        text: "This is an Aplication for Blogging Articles. Here user can Access, Create, Update, Delete,comment and edit articles.",
        view: "https://react-conduit-blog-site.netlify.app",
        source: "https://github.com/anupkumar222/blog-app.git"
    },
    {
        imageSrc: shoppingCart,
        title: "Shopping Cart",
        text: "An e-commerce app that allows visitors to add items to the cart. Filter item based on sizes",
        view: "https://reactjs-shoppingcart2.netlify.app",
        source: "https://github.com/anupkumar222/shopping-cart.git"
    },
    {
        imageSrc: githubBattleApp,
        title: "Github Battle App",
        text: "Platform for github users to track top repositories of various programming languages and compare two repositories",
        view: "https://react-github-popular-battleapp",
        source: "https://github.com/anupkumar222/github_battle_app.git"
    }
]

export default ProjectCardData