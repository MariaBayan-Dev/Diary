# 📓 Diary

A personal diary project where the user can create an entry, add an image URL, and publish it. They can also delete and edit it.

## 🚀 Features

- Can write text and add an external image.
- Publish the post, and even after updating the website, the post will remain.
- You can delete and edit the post. Save changes.

## 🛠️ Technologies

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-8A2BE2?logo=CSS&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=grey)

## 📚 What I learned

- How to implement a full CRUD with localStorage — creating, 
  reading, updating and deleting entries that persist 
  after page reload.
- How to generate unique IDs using Date.now() and store 
  them as data attributes in the DOM to retrieve them 
  on user interaction.
- How to update a specific entry in localStorage using 
  map() to return a new array where only the matching 
  entry is modified, combined with the spread operator 
  to update only the relevant field without mutating 
  the original object.
- How to use event delegation to handle three different 
  actions (delete, edit, confirm) from a single listener 
  on the parent container.
- How to dynamically replace DOM elements — swapping a 
  paragraph for a textarea when editing, and back again 
  after confirming.

## 🔮 Future Improvements

- Add mood tags (e.g. happy, sad, reflective) to categorize each entry.
- Add the ability to sort entries by date (newest or oldest first).
- Add a search bar to filter entries by text content, using filter() 
  and includes() to match the search term against each entry's text.
- Rebuild using React to simplify state management and reduce 
  manual DOM manipulation.

## 🔗 Live Demo
👉 [Diary](https://mariabayan-dev.github.io/Diary/)

## 📸 Preview

<img width="1901" height="901" alt="diary-preview" src="https://github.com/user-attachments/assets/eff0f71f-5682-4c99-8986-8bf089e89478" />

