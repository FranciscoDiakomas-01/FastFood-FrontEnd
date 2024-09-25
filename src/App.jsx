import Header from "./components/header"
import './app.css'
import Main from "./components/main"
import PopularProduct from "./components/popularProduct"
import Products from "./components/Product"
import Team from "./components/team/inde"

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <PopularProduct/>
      <Products/>
      <Team/>
    </>
  )
}

export default App
