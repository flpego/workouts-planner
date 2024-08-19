import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import AppRoutes from "./routes"
import './App.css'
function App() {

  return (
    <>
      <Header />
        <main>
          <AppRoutes />
        </main>

      <Footer />
    </>
  )
}

export default App
