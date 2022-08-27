import logo from '../../logo.svg';

function Home(){
    return(
        <div className="App-header">
          <img src={logo} className="App-logo2" alt="logo" />
          <p style={{paddingLeft:10}}> 이름 : 윤진아</p>
          <p style={{paddingLeft:10}}> 나이 : 23세</p>
          <p style={{paddingLeft:10}}> 전공 : 컴퓨터공학과</p>
        </div> 
    )
 
}

export default Home;