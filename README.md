![Logo](./images/header-font-1.png)



---
## Index

* [Project Description](#project-description)
* [Skills & Retrospective](#skills-and-retrospective)
* [Manual](#manual)
* [Testing](#testing)
* [Color and Font References](#color-and-font-references)
---
## Project Description

{SoC}ial was created by [Matthew Miller](https://github.com/codedresser), [Simon Partridge](https://github.com/simonpartridge86), [Kunal Shukla](https://github.com/kun-shukla), and [Wanteng Teoh](https://github.com/ten-hub) (Team mishMash) in week 9 of our [School of Code](https://www.schoolofcode.co.uk/) bootcamp. We were challenged to come up with an app to help improve the remote learning experience of our fellow bootcampers in one short week.

After ideating around this theme and identifying existing problems, we ultimately decided to create an app that helps bootcampers more easily create and attend online intra-cohort social events outside bootcamp hours.

As the result, "{SoC}ial" is a single-page React web app that allows bootcampers to create online events for the School of Code community, as well as find and attend events created by other bootcampers.

---

## Skills & Retrospective

This was our first experience of as a group on an extended project. This exercise aimed to apply knowledge gained in the first 8 weeks of the School of Code bootcamp, as well as learning and applying the following **skills**:

* Agile methodologies and tools
* Project planning & management
* UX/UI design processes
* Cooperation and decision making in a larger dev team

Having reflected on the project week as a team, we believe that our **strengths** included:
* Creating a strong team manifesto that helped us stay focused and keep momentum during decision-making phases.
* Creating an environment where all team members felt valued and could contribute.
* Designing a realistic and quickly achievable MVP.
* Having regular (twice-daily) stand-up meetings to check in and plan next steps, keeping everyone on the same page.
* Every team member had the opportunity to be involved with each aspect of the project, resulting in an improved sense of understanding an ownership.

Thanks to these strengths, team morale remained high throughout the week and we were able to build an app that fulfilled our original brief and design.

**Lessons** to take forward to future projects:
* Although we wrote tests for the back-end, testing should be given greater priority.
* Programming steps should be broken down and planned in greater detail before starting to code.
* Write questionnaires to test, rather than confirm, our opinions/biases.
* Spend more time on the UX/UI design process.
* Make sure code it as human-readable as possible.
* Be more ambitious regarding stretch goals.

---
## Future Plans/Roadmap

---

## User Manual

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
API_KEY
ANOTHER_API_KEY
```

---

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

---

## Running Tests
---

## Color and Font References

| Color         | Hex                                                               |
| ------------- | ----------------------------------------------------------------- |
| Project Green | ![#74C69D](https://via.placeholder.com/10/74C69D?text=+) #74C69D  |
| Project Pink  | ![#F4AAFB](https://via.placeholder.com/10/F4AAFB?text=+) #F4AAFB  |

Header font - [Londrina Solid](https://fonts.google.com/specimen/Londrina+Solid) - examples: <br>
<img src="./images/header-font-1.png" alt="header-font-1" height="50"/>
<img src="./images/header-font-2.png" alt="header-font-2" height="50"/>

Main text font - [Roboto](https://fonts.google.com/specimen/Roboto) - examples: <br>
<img src="./images/main-text-font-1.png" alt="main-text-font-1" height="50"/>
<img src="./images/main-text-font-2.png" alt="main-text-font-2" height="50"/>

---

## Support and Feedback

To receive support or give feedback, please contact team members through details provided on their Github profiles:

[@Matthew Miller](https://github.com/codedresser),
[@Simon Partridge](https://github.com/simonpartridge86),
[@Kunal Shukla](https://github.com/kun-shukla),
[@Wanteng Teoh](https://github.com/ten-hub)
