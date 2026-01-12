# 📞 Phonebook Application

This is a React application for managing a phonebook. You can add, search, and delete contacts. The app uses Formik for forms, Yup for validation, and persists contacts in local storage.

## 🚀 Live Demo

The application is deployed on **GitHub Pages**:

👉 [Live Demo](https://KeskenRidvan.github.io/goit-react-hw-03/)

## 🛠️ Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/KeskenRidvan/goit-react-hw-03.git
cd goit-react-hw-03
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run locally:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

5. **Deploy to GitHub Pages:**

```bash
npm run deploy
```

---

# 📝 Project Requirements

- 📁 Create a repository named `goit-react-hw-03`.
- 🔗 When submitting your homework, include two links: one to the source files and another to the live demo page.
- ⚡ The project must be created using [Vite](https://vite.dev/).
- 📝 Use the [Formik](https://formik.org/) library to create forms.
- 🚫 There should be no errors or warnings in the console when the task code is executed.
- 🏗️ For each component, there should be a separate folder in the `src/components` directory containing the React component's JSX file and its stylesheet. The folder name must match the component file (`.jsx` extension) and the style file (`.module.css`). Component names must match the names specified in the task (if any).
- 📤 Components must be exported using the default export method (`export default`).
- ✨ JS code should be clean and readable; use **Prettier** for this.
- 🎨 Create styles using **CSS Modules**.

---

# 📞 Phonebook Application

Develop an application to save phonebook contacts. The application should consist of a form, a contact list, and a search field. You can review the demo video of the application:

![gif-01](/src/assets/images/readme-image/assignment-video-01.gif)

## 🧩 Components

In this task, the interface is already divided into components. Your task is to build the application logic by defining the state and props for these components. The parts of the interface where the components are located are marked with corresponding colored boxes.

![image-01](src/assets/images/readme-image/assignment-image-01.png)

You should create the following components: root component, contact addition form, contact list, contact list item, and search filter.

All components will be rendered within the `App` component. The markup for the `App` component will be as follows (including props and other code):

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
```

#### ⚠️ Compared to previous assignments, fewer hints will be provided in this task. In this way, you are expected to become familiar with component development, props, and application logic.

### 📍 Step 1 - Contact List

In the `App` component, the contacts should be stored in an array within the state. During the development phase, you can test the functionality by defining static test data. For example, the initial value of the state could be as follows:

```json
[
  { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
  { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
  { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
  { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
]
```

Create the `ConactList` and `Contac` components and use them to list the contacts. Pass the necessary props appropriately.

When this step is completed, the interface will look like this:

![image-01](src/assets/images/readme-image/assignment-image-02.png)

### 📍 Step 2 - Search by Name

Add a SearchBox to filter contacts by name.

- 🔍 Search box - an input field that does not contain a form and whose value is written to the state (controlled component).
- 🔠 Filtering logic should be case-insensitive.

#### ⚠️ The filter state must be stored in the `App` component and the necessary props must be passed to the `SearchBox` component. Then, the filtering of the contact array should be done in the `App` component, and the results should be passed to the `ContactList` component as props.

When this step is completed, the contact list should update appropriately when the search box is used.

![gif-02](/src/assets/images/readme-image/assignment-video-02.gif)

### 📍 Step 3 - Adding Contacts

Create a `ContactForm` component to perform the process of adding a new contact. Each contact must have `name`, `number`, and `id` properties. For example, it should have the same structure as the data previously in the state.

#### ⚠️ Use a library like nanoid to create IDs. In the future, this work will be done with a database, but for now, you can manually add the ID when the form is submitted.

Build the form with [Formik](https://formik.org/). Also, add validation for form fields using the [Yup](https://github.com/jquense/yup) library and show error messages:

- ❗ Fields must be required.
- 📏 Minimum character count - 3
- 📏 Maximum character count - 50

When this step is completed, the application will look like this:

![gif-03](/src/assets/images/readme-image/assignment-video-03.gif)

### 📍 Step 4 - Deleting Contacts

Add the functionality to delete saved contacts to the application. The user can delete the contact by clicking the **Delete** button on the contact card.

![gif-04](/src/assets/images/readme-image/assignment-video-04.gif)

### 📍 Step 5 - Saving Contacts

The application should retrieve the contact list from local storage and save it when the page is refreshed. Use React effects for this.

- ✅ Contacts should be saved to local storage during contact addition and deletion.
- 🔄 When the application loads, if contacts exist, they should be read from local storage and written to the state.

![gif-05](/src/assets/images/readme-image/assignment-video-05.gif)
