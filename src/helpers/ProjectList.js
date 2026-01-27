import Coffee from "../assets/coffee.jpeg";
import Calculator from "../assets/calculator.png";
import Invoices from "../assets/invoices.png"
import Demo from "../assets/demo.gif";

export const ProjectList = [
    {
        id: "coffee-bot",
        name: "Coffee Bot",
        image: Coffee,
        alt: "Drawing of small coffee machines, items, and cups with faces on them ",
        tags: "Python",
        url: "https://github.com/Erick-Allen/Coffee_Bot",
        github: "https://github.com/Erick-Allen/Coffee_Bot",
        description: "This is a coffee bot made with python. It is meant to loop over and over again, taking orders from the user"
    },
    {
        id: "quick-calc",
        name: "QuickCalc",
        image: Calculator,
        alt: "A blue smokey line from the left meeting in the middle with red smokey line coming from the right",
        tags: "HTML CSS JavaScript",
        url: "https://chromewebstore.google.com/detail/quickcalc/ibneokgnnenppcokmejepfdjhapepece?hl=en",
        github: "https://github.com/Erick-Allen/quickCalcExtension",
        description: "This is a google extension created by my brother and I where it takes formulas and usese input to calculate and has history"
    },
    {
        id: "user-invoice-database",
        name: "User Invoice Database",
        image: Demo || Invoices,
        // demo: Demo,
        alt: "A Invoice",
        tags: "Python SQLite Typer Rich Docker",
        url: "https://github.com/Erick-Allen/user-invoice-db",
        github: "https://github.com/Erick-Allen/user-invoice-db",
        description: "This is an interactive relational database used to track users and their invoices"
    }
]