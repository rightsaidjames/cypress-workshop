# Cypress Workshop
A brief Cypress workshop, introducing test organisation principles and key Cypress commands

## Prerequisites

* [Git](https://git-scm.com/) (preinstalled on Linux, installed on Mac using `xcode-select --install`)
* [Node.js](https://nodejs.org/en/download/)
* A code editor such as [VS Code](https://code.visualstudio.com/) or [Atom](https://atom.io/).

## Setup

Ensure that you have Node installed on your system using the following Terminal command:
```
node -v
```

If not, you can download and install the LTS version from the [Node.js website](https://nodejs.org/en/download/)

If your current version of Node is quite old, you can install the current LTS version using the link above. If you installed it using Homebrew, you can upgrade it using the command `brew upgrade node`.

If you don't already have a directory for storing projects cloned from Git, create one in your home directory using the `mkdir` command. For example, to create a `projects` directory (then navigate to it) open a new Terminal window/tab then run these commands:
```
mkdir projects
cd projects
```

Next, clone this repository, navigate to its root directory, then install Cypress and its dependencies:
```
git clone https://github.com/rightsaidjames/cypress-workshop.git
cd cypress-workshop
npm install
```

To open Cypress, run:
```
npx cypress open
```

Then open the `cypress-workshop` directory in a code editor such as VS Code or Atom.

## Resources

To complete this workshop, you'll make heavy use of the [official Cypress documentation](https://docs.cypress.io/), which is filled with helpful examples for common use cases.

To start with, you should refer to [Writing and Organizing Tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Writing-tests) and [Interacting with Elements](https://docs.cypress.io/guides/core-concepts/interacting-with-elements) to get a general sense of how to write tests using Cypress.

During these exercises, the main Cypress commands you'll be using are:
* [cy.get()](https://docs.cypress.io/api/commands/get) and [cy.find()](https://docs.cypress.io/api/commands/find) to find specific elements on the page. Note that `.find()` must be chained off `cy.get()` - it can't be used on its own, but it's sometimes helpful for selecting specific elements within the scope of a container element, and it can be used to make your test code look a bit neater.
* You can also use [cy.contains()](https://docs.cypress.io/api/commands/contains) to find an element by its text content, or chain on [.eq()](https://docs.cypress.io/api/commands/eq), [.first()](https://docs.cypress.io/api/commands/first) or [.last()](https://docs.cypress.io/api/commands/last) to select a specific element returned by a `cy.get()` or `cy.find()` command.
* [cy.click()](https://docs.cypress.io/api/commands/click) to click on an interactive element.
* [cy.type()](https://docs.cypress.io/api/commands/type) to type into a form field. Use [cy.clear()](https://docs.cypress.io/api/commands/clear) to clear an input field that already has a value.
* [cy.select()](https://docs.cypress.io/api/commands/select) to select an option from a dropdown menu. You can specify the machine name (the text within the `value` HTML attribute) or a text label.
* [cy.should()](https://docs.cypress.io/api/commands/should) to make assertions. `.should()` can be chained off almost any command, enabling you to make assertions on the state of an element after you've interacted with it. Read the [Assertions guide](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Assertions) to learn more about writing assertions.
* [cy.its()](https://docs.cypress.io/api/commands/its) to get a specific property returned by the preceding Cypress command, typically used for making assertions. For example, `cy.get('h1').its('length').should('eql', 1)` would assert that only one H1 element was found by the `cy.get('h1')` command.

You can find the [full list of commands](https://docs.cypress.io/api/table-of-contents) in the Cypress Docs.

### Additional Resources

* [Introduction to Cypress - Test Automation University](https://testautomationu.applitools.com/cypress-tutorial/)
* [Filip Hric's Cypress blog](https://filiphric.com/blog) - search for `basics` to find his Cypress basics series.