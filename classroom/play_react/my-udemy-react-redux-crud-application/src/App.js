import PropTypes from 'prop-types'

const App = () => {
  const helloWorldJa = <h1>こんにちは,世界。</h1>
  const profiles = [
    { name: "Taro", age: 25 },
    { name: "Hanako", age: 22 },
    { name: "No name", age: 100 }
  ]
  return (
    <>
      {helloWorldJa}
      {profiles.map((profile, index) => { return <User name={profile.name} age={profile.age} key={index} /> })}
    </>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
