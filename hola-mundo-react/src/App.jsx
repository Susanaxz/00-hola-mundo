

import TwitterFollowCard from "./TwitterFollowCard"
//({ username, name, follow }) => {
const App = () => {
    const formatUserName = (username) => `@${username}`
    return (
        <section className="app">
            <TwitterFollowCard formatUserName={formatUserName } username={"midudev"} name={"Miguel Ángel Durán"} />
            <TwitterFollowCard formatUserName={formatUserName}  username={"pheralb"} name={"Pablo Hernandez"} />
            <TwitterFollowCard formatUserName={formatUserName}  username={"susanaxz"} name={"Susana Ribera"} />
            <TwitterFollowCard formatUserName={formatUserName}  username={"pep"} name={"Pep Gimenez"} />
        </section>
  )
}

// aquí recibimos una prop desde TwitterFollowCard que es la función formatUserName y esta función la creamos en App.jsx
// y la pasamos como prop a TwitterFollowCard.jsx

export default App