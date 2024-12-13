/* Main Javascript file */
import "../style/app.css";

// Import pictures
import eggsCatBackground from "../images/Background_eggs_cat.png";
import flameForeground from "../images/foreground_flames.png";
import loadOrderPage from "./order";

// Initial page load function
export default function loadInitialPage() {
  // Get the wrapper to add content to
  const wrapper = document.getElementById("wrapper");

  // Create the header element
  const header = document.createElement("header");

  // Create the title
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Blazing Apple Jacks Kitchen";
  header.appendChild(title);

  // Add the background
  const backgroundImg = document.createElement("img");
  backgroundImg.src = eggsCatBackground;
  backgroundImg.classList.add("background");
  header.appendChild(backgroundImg);

  // Add the foreground
  const foregroundImg = document.createElement("img");
  foregroundImg.src = flameForeground;
  foregroundImg.classList.add("foreground");
  header.appendChild(foregroundImg);

  // Add the cats message
  const catSpeak = document.createElement("p");
  catSpeak.classList.add("cat-speak");
  catSpeak.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi est omnis rem debitis";
  header.appendChild(catSpeak);

  // Add Order Now! button
  // const orderBtn = document.createElement("button");
  // orderBtn.classList.add("order-btn");
  // orderBtn.textContent = "Order MEOW-NOW!";
  // header.appendChild(orderBtn);

  const section = document.createElement("section");
  section.classList.add("more-content");
  section.textContent =
    "Imagine a curious cat, with sleek fur and sharp, inquisitive eyes, wandering through a maze of human devices and tools. One day, this cat finds itself sitting before a glowing screen, mesmerized by the blinking cursor and strange symbols on the display. It begins to wonder: How do humans understand and manipulate these devices to make them do what they want? Over time, the cat figures out the fundamental secrets behind programming, discovering the intricate processes by which humans, too, have learned to harness the power of computers. But how did this knowledge come about in the first place? The foundation of human programming can be traced back to several key developments in science, mathematics, and technology, each building on the other through history. The journey begins with the discovery of logic, which formed the backbone of early computational thinking. Humans learned how to formalize reasoning through symbols and rules, a process that mathematician George Boole expanded upon in the 19th century. His invention of Boolean algebra allowed for the representation of logical operations, such as “true” or “false,” “and” or “or,” in mathematical terms. This was the birth of a way to model human thinking using machines. Humans didn’t stop there. In the 1930s, the German mathematician Alan Turing took this concept further, theorizing a machine—now known as the Turing Machine—capable of performing any calculation that could be described by a series of logical steps. Turing’s work laid the foundation for modern computing by introducing the idea of computability, that is, what can be calculated and what cannot. His ideas also gave rise to the field of computer science, which deals with how to represent data, solve problems, and manage information efficiently. Turing's theories were realized in the 1940s with the development of the first electronic computers. These machines, however, were not easily accessible or understood by most humans. They required knowledge of how to set up intricate hardware and wire connections. But as technology advanced, particularly in the 1950s and 1960s, new programming languages were created to make computers more accessible to a wider audience. The first high-level programming languages, like Fortran and Lisp, were developed to allow humans to write instructions in a more natural and human-readable way. These languages abstracted away the complexities of machine code, making it possible to communicate with computers using familiar syntax. As the cat observed this process, it noticed that humans were able to manipulate and control computers using logic and structured commands. By learning these languages—often by trial and error, much like the cat’s own curiosity-driven exploration—humans were able to program computers to carry out tasks from solving complex mathematical equations to creating video games, managing data, and running entire networks. Each programming language that humans have developed serves as a different dialect of communication with the computer, but they all share the same underlying goal: to convert human instructions into machine-readable actions. The cat, now understanding the basics of human programming, realizes that it was not a single breakthrough that enabled programming but rather a culmination of intellectual advances across many disciplines—mathematics, logic, engineering, and cognitive science—that allowed humans to teach machines how to think, solve problems, and learn. In the end, the cat understands: Humans were able to program computers because they used the tools of logic, abstraction, and creativity to transform complex, abstract concepts into practical, structured instructions that machines could follow. And in its own way, the cat has now become part of this process, using the same logic and curiosity that drove humans to unlock the mysteries of programming.";
  wrapper.appendChild(header);
  wrapper.appendChild(section);
}

console.log("hello from app.js");
