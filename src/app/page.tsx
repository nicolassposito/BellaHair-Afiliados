import Featured from "./components/featured/featured"
import Forms from "./components/forms/form"
import Header from "./components/header"
import Hero from "./components/hero/hero"
import Track from "./components/track/track"

export default function Page() {
  return(
    <>
    <Header />
    <Hero />
    <Featured />
    <Track />
    <Forms />
    </>
  )
}