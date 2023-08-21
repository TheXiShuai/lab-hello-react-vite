import ironhack from './../assets/ironhack-logo-xs.png'
import menu from './../assets/menu-top-xs.png'

function Header(){
    return (
        <>
        <div className='main'>
        <nav className='header'>
            <img src={ironhack} alt="" />
            <img src={menu} alt="" />
        </nav>
        <div>
            <h1>SAY HELLO TO REACT JS</h1>
        </div>
        <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>


        <button type='submit'>Awesome!</button>
        </div>
</>
    )
}

export default Header  