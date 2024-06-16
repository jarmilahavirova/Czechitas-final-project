# RULES OPEN 2024

## About the project

RULES OPEN 2024 alias gamification of disc golf rules – a game for beginners who would already like to attend their first tournament, but they are still struggling with the rules – this game implements disc golf elements (such as layout, tee-signs, scorecard) and lets the players practice their knowledge of the rules, instead of throwing discs.

## Key features

**1. Interface - disc golf theme and classic computer games**

We wanted the interface to remind users of disc golf environment, so we used elements familiar from the classic game of disc golf, such as scorecard and tee signs. Additionally, the design is based on the concept of classic games to ensure simplicity and user-friendly, intuitive controls to ensure a comfortable and enjoyable user experience.

**2. Customizable setting**

To enhance user comfort, players of our game set their names on the HomePage, as well as choosing their avatars. This setting accompanies them throughout the entire game - on the GamePage, on the scorecard, and also on the ResultPage. The entire game is possible to play in both single and double mode.

![HomePage with different possibilities of setting](/assets/instruction1.jpg)

**3. Interactive map**

The main feature of GamePage is an interactive clickable map that responds to the value of the current hole. Only the corresponding area is unlocked and available for clicking. Additionally, there are meeples representing players on the map, transitioning to the next hole through pre-set animations after completing each hole.

![GamePage showing the interactive map](/assets/instruction2.jpg)

**4. Randomized Quiz**

The absolute key feature of the project is a quiz based on the principle of gamification that aims to familiarize users with the rules of disc golf in an entertaining way. Questions and answers are randomly drawn from a pre-prepared pool (in form of array).

When a player clicks on an answer, this answer is immediately marked as correct or wrong through visual styling (via CSS). If the answer of player was incorrect, the correct one is also marked to fulfill the educational aspect. Based on the answers, the player's score is instantly reflected in the scorecard, which can be also influenced by wind gusts, symbolized by a weather icon (as the random feature of the game).

![Randomized Quiz showing CSS styles of wrong and correct answers](/assets/readme-quiz-questions.jpg)

**5. Performance Evaluation**

After completing the entire course (9 holes), users receive an evaluation of their performance, score and few words to their performance in single-palyer mode, or annoncement of the winenr in two-players mode.

![Performance Evaluation for 2-players mode](/assets/instruction5.jpg)

**6. Responsivity**

The game is designed for both mobile and desktop devices. The design reflects the capabilities of the given devices, so it was necessary to modify the map and avatar appereance for different device sizes.

![Responsivity for mobile phone and tablet size devices](/assets/readme-map-responsivity.jpg)

## Technologies

Prototype:

- [Figma](https://www.figma.com)

Development:

- [React](https://react.dev/)
- JavaScript
- HTML
- CSS
- [BEM](https://getbem.com/) methodology
- [npm](https://www.npmjs.com/)

Graphics and assets:

- [DALL-E](https://openai.com/index/dall-e-3/)
- [Gimp](https://www.gimp.org/)

Versioning:

- [Git](https://git-scm.com/)
- [GitHub](https://github.com)

Deployment:

- [Netlify](https://www.netlify.com/)

## Installation

1. Clone this repository to your device.
2. Navigate to the project folder in your terminal.
3. Run the command `npm install` to install the required dependencies.
4. Run the command `npm run dev` to launch the Rules Open 2024 application.

## Feedback

We welcome your feedback! If you have any ideas for improvement or encounter any issues related to this project, we would love to hear from you! Your feedback is invaluable to us, therefore feel free to share your thoughts and suggestions.

## About the team

This project is a team project of two students of the IT retraining course called Digital Academy (see below): [Jarmila Havířová](https://github.com/jarmilahavirova) and [Jana Dolejší](https://github.com/JanaDolejsi).

Jarmila is an active and avid disc golf player. For her, disc golf transcends mere sport; it is a passion and a lifestyle. Consequently, she decided to center her final project around this theme. It’s also a way for her to express gratitude to the disc golf community and provide something of added value.

Jana had not encountered disc golf before meeting Jarmila. Hovewer, she was open-minded and agreed to explore this topic for their project.

### Our mentors

We would also like to show our gratitude to our mentors **Blanka Semanová** and **Lam Tran** for their support and guidance. They have lead us from troubleshooting technical issues to challenging us to explore new features and approaches of front-end development. They both have been instrumental in our growth.

## About the course Digital Academy

Czechitas is a nonprofit organization, focusing on increasing diversity in the world of IT. One of the courses is so called Digital Academy Web - an intensive (3,5 months, 300+ hours) training program with a focus on skills needed for Front-End Development positions (HTML, CSS, JavaScript, React, Git). This project is a final team project of this course, presented in front of jury of IT specialists.

We would also like to express our gratitude to [Czechitas organization](https://www.czechitas.cz) for making this project possible, as well as all the lecturers and coaches, for their invaluable knowledge and experience they have shared with us. We are excited to continue expanding our skills and expertise in front-end development.
