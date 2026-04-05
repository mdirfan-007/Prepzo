#  Prepzo – Learning Log

This repository tracks my daily progress while building **Prepzo (AI Interview Marketplace)**.

---

## 📅 Day Update (Authentication + Styling)

### 🔐 Authentication with Clerk

Today I learned how to integrate authentication using Clerk.

#### ✅ Key Concepts:
- Setup Clerk in Next.js App Router
- Wrap app with `ClerkProvider`
- Use prebuilt components:
  - `SignInButton`
  - `SignUpButton`
  - `UserButton`
- Conditional rendering using:
  - Signed-in users
  - Signed-out users

#### 🧠 What I Understood:
- Clerk handles authentication UI and backend
- No need to build auth from scratch
- Easy user session management

---

### 👤 User Management

- Display user profile using `UserButton`
- Handle authentication state
- Protect UI based on login status

#### Example:
```jsx
<Show when="signed-in">
  <UserButton />
</Show>