# BiblioVault

## Overview
This is a simple **BiblioVault system** implemented in **pure JavaScript** without UI, designed to run in the browser console. It includes user authentication, book management, and logging functionalities.

## Features
### 1. **User Authentication & Roles**
- Default Admin: `admin@admin.com / test@test`
- Users:
  - **Admin**: Can manage books (add, edit, delete) and manage users.
  - **Client**: Can only list and read books.

### 2. **Book Management**
- Admin can **add, edit, and delete books**.
- Users can **list books** sorted by:
  - Title (Default)
  - Author
  - Publish Date
- Users can **search for books** by:
  - Title
  - Author

### 3. **Logging System**
- Records every action (logins, book additions, updates, deletions, logouts, searches).
- Logs are stored in an in-memory array.
- Log messages are displayed in the console.

### 4. **Access Control & Logout**
- Users must be logged in to perform any action.
- If no user is logged in, no operations can be performed.
- Admin and clients must log in before accessing features.
- Users can log out, preventing further actions until they log in again.

## Installation & Usage
### **Step 1: Open Developer Console**
1. Open any web browser (Chrome, Firefox, Edge, etc.).
2. Press `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac) to open DevTools.
3. Go to the **Console** tab.

### **Step 2: Usage Examples**
#### **Login as Admin:**
```js
auth.login("admin@admin.com", "test@test");
```

#### **Manage Books (Admin Only, Requires Login):**
```js
bookStore.addBook("JavaScript Guide", "John Doe", "2020-01-15");
bookStore.editBook(1, { title: "Advanced JavaScript" });
bookStore.deleteBook(1);
```

#### **List Books (Requires Login):**
```js
bookStore.listBooks(); // Default: Sort by title
bookStore.listBooks("author"); // Sort by author
bookStore.listBooks("publishDate"); // Sort by publish date
```

#### **Search for Books (Requires Login):**
```js
bookStore.searchBooks("JavaScript"); // Search by title
bookStore.searchBooks("John Doe"); // Search by author
```

#### **Logout:**
```js
auth.logout();
```
- After logging out, no actions can be performed until a user logs in again.

## Notes
- Only **admin** can manage books (add, edit, delete).
- Sorting and search are available for books.
- Users must be logged in to perform any operations.
- The system runs entirely in **browser memory** (refreshing clears the data).

## Bonus Task
- Use **IndexedDB** to persist data across browser sessions.

## License
This project is open-source and free to use.
