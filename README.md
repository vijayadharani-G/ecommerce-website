# ⚡ ElectroMart

**Tech that keeps up with you.**

ElectroMart is a modern electronics e-commerce web app built with **vanilla HTML, CSS and JavaScript** (no frameworks). It goes beyond a basic store with smart search, search by photo, an EMI calculator and price-trend forecasting, all running in the browser.

🔗 **Live Demo:** [modern-electromart.netlify.app](https://modern-electromart.netlify.app)

> Try it: search *"gaming laptop under 1.5 lakh"*, or tap the camera icon to search by photo.

> ⚠️ This is a demo project for learning. Products, reviews and customer testimonials are sample content, not a real store.

## ✨ Features

- 🔍 **Natural-language search**: type queries like *"gaming laptop under 1.5 lakh"* and get relevant results
- 🧠 **Fuzzy search** using Levenshtein distance, so typos like "laptpo" still find laptops
- 📷 **Image search**: upload a photo and find visually similar products using colour-histogram matching
- 💳 **EMI calculator** to estimate monthly payments for a product
- 📈 **Price history and trend forecasting** using regression
- ⚡ **Flash sale** section with a live countdown timer
- 🎛️ **Sorting and filters** by brand, maximum price, rating and price order
- 🎁 **Gift finder** page that suggests products
- 🚚 **Order tracking** page
- ⭐ **Customer reviews** section
- 📱 **Fully responsive** layout

## 🛠️ Tech Stack

| Layer      | Technology                                          |
|------------|-----------------------------------------------------|
| Frontend   | HTML5, CSS3, JavaScript (ES6)                       |
| Algorithms | Levenshtein distance, colour histograms, regression |
| Hosting    | Netlify                                             |
| Tools      | VS Code, Git, GitHub                                |

## ⚙️ How It Works

**Natural-language search**
Parses the query to pick out the product type and price limits (e.g. "under 1.5 lakh"), then filters the product list.

**Fuzzy matching**
Calculates the Levenshtein (edit) distance between the search text and product names, so close matches still show up despite spelling mistakes.

**Image search**
Builds a colour histogram of the uploaded image and compares it with the histograms of product images. The closest matches are shown first.

**Price forecasting**
Fits a regression line over a product's past prices and projects the trend forward.

**EMI calculator**
Uses the standard EMI formula:
`EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)`
where P = principal, r = monthly interest rate, n = number of months.

## 🚀 How to Run Locally

No installation needed, since it is plain HTML, CSS and JavaScript.

```bash
git clone https://github.com/vijayadharani-G/electromart.git
cd electromart
```

Open `index.html` in your browser. For best results, run a local server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## 🧠 What I Learned

- Implementing algorithms (Levenshtein, histograms, regression) in plain JavaScript
- Handling image uploads using the Canvas API
- Building responsive layouts with vanilla CSS
- Structuring a larger vanilla JS project without any framework

## 🔮 Future Improvements

- Backend with a real product database
- User accounts and order history
- Payment gateway integration
- Better image matching using a machine learning model

## 👩‍💻 Author

**Vijayadharani G**
- [LinkedIn](https://www.linkedin.com/in/vijayadharanigovindaraj)
- [GitHub](https://github.com/vijayadharani-G)
- [Portfolio](https://vijayadharani-protfilo.netlify.app)
