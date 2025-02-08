# install Bootstrap
To install Bootstrap in a Vite project, follow these steps:

### 1. **Install Bootstrap**
Run the following command in your project directory:

```sh
npm install bootstrap
```

### 2. **Import Bootstrap in Your Project**
You can import Bootstrap styles and scripts in different ways:

#### ✅ **For CSS Only (Recommended)**
In `main.jsx` or `main.tsx` (entry file):

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

#### ✅ **For Full Bootstrap (CSS + JS Components)**
If you also need Bootstrap JavaScript components like modals, tooltips, etc., import the JavaScript file:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### 3. **Use Bootstrap Classes**
Now, you can use Bootstrap classes in your components:

```jsx
function MyComponent() {
  return (
    <button className="btn btn-primary">Click Me</button>
  );
}
```

### 4. **(Optional) Customize Bootstrap**
If you want to customize Bootstrap, install `sass`:

```sh
npm install sass
```

Then, create a `src/styles.scss` file and import Bootstrap:

```scss
@import 'bootstrap/scss/bootstrap';
```

Now, import `styles.scss` in `main.jsx`:

```jsx
import './styles.scss';
```

---

That’s it! 🎉 Bootstrap should now be working in your Vite project. 🚀
