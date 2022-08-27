import Home from './Home'
import Intro from './Intro'

const routers = [
    {
        key:'home',
        path:'/',
        element: ()=> <Home/>
    },
    {
        key:'intro',
        path:'/intro',
        element: ()=> <Intro/>
    }
]

export default routers;