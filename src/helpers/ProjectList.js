import Coffee from "../assets/coffee.jpeg";
import Calculator from "../assets/calculator.png";
import Invoices from "../assets/invoices.png"
import Demo from "../assets/invoicedb.png";

export const ProjectList = [
    {
        id: "user-invoice-database",
        name: "User Invoice Database",
        image: Demo || Invoices,
        // demo: Demo,
        alt: "InvoiceDB project interface preview",
        tags: "Python SQLite Typer Rich Docker React",
        url: "https://github.com/Erick-Allen/user-invoice-db",
        github: "https://github.com/Erick-Allen/user-invoice-db",
        description: "A database-backed invoice management tool for tracking users, invoices, and workflow data.",
        summary: "InvoiceDB is a full-stack invoice management project focused on organizing user and invoice records through practical database-backed workflows.",
        problem: "Invoice and customer data can become difficult to search, classify, and manage when it is spread across manual files or disconnected tools.",
        outcome: "The project combines a React interface, Python backend logic, SQLite storage, Docker setup, and AI-assisted features for classification and assistant-style querying.",
        highlights: [
            "Designed relational data models for users, invoices, and searchable records.",
            "Connected frontend workflows with backend logic and API-driven data access.",
            "Explored AI-assisted classification and querying to make invoice data easier to work with."
        ],
        tech: ["React", "Python", "SQLite", "APIs", "Docker", "AI Features"]
    },
    {
        id: "quick-calc",
        name: "QuickCalc",
        image: Calculator,
        alt: "QuickCalc browser extension preview",
        tags: "HTML CSS JavaScript",
        url: "https://chromewebstore.google.com/detail/quickcalc/ibneokgnnenppcokmejepfdjhapepece?hl=en",
        github: "https://github.com/Erick-Allen/quickCalcExtension",
        description: "A Chrome extension that helps users calculate formulas quickly and track recent results.",
        summary: "QuickCalc is a browser extension built to make small calculations faster by keeping the tool available directly inside Chrome.",
        problem: "Users often need quick formula-based calculations without switching tabs, opening a separate app, or losing recent results.",
        outcome: "The extension provides a lightweight calculator experience with input-driven formulas and calculation history.",
        highlights: [
            "Built a compact browser-extension interface with HTML, CSS, and JavaScript.",
            "Added calculation history so users can reference previous results.",
            "Published the project as a Chrome extension for real browser use."
        ],
        tech: ["HTML", "CSS", "JavaScript", "Chrome Extension"]
    },
    {
        id: "coffee-bot",
        name: "Coffee Bot",
        image: Coffee,
        alt: "Coffee Bot project illustration",
        tags: "Python",
        url: "https://github.com/Erick-Allen/Coffee_Bot",
        github: "https://github.com/Erick-Allen/Coffee_Bot",
        description: "A Python ordering simulation that walks users through a repeatable coffee shop workflow.",
        summary: "Coffee Bot is a command-line ordering program built to practice structured input handling, menu logic, and repeatable user workflows.",
        problem: "The project models a simple service flow where a user can place coffee orders repeatedly without restarting the program.",
        outcome: "It demonstrates control flow, user input validation, and clear terminal interactions in a small but complete Python application.",
        highlights: [
            "Built a loop-based ordering flow for repeated customer interactions.",
            "Organized menu options and order logic into a predictable terminal experience.",
            "Focused on readable Python code and straightforward user prompts."
        ],
        tech: ["Python", "CLI", "Control Flow", "Input Handling"]
    }
]
