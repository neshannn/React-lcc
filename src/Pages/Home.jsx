import React from 'react'

// const Home = () => {
//   return (
//     <div className='home'>
//       <div className='bio'>
//       <p id="para">Hi! My name is Jane Doe and I am a web developer
//                             in New York.
//       </p>
//       </div>
//       <div className="profile-pic">
//         <img src="https://astro-fe-portfolio.netlify.app/_astro/hero.f50e213d_Fme8W.png" alt="MyPic" />
//       </div>
    
//     </div>
//   )
// }

// export default Home

// import UseEffect from '../Components/UseEffect';
import UseState from '../Components/UseState';
import LoginForm from '../Components/LoginForm';


const Home = () => {
  return (
    <div>
        <LoginForm/>
    </div>
  )
}

export default Home;