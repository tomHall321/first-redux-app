import ResetButton from "./components/ResetButton";
import WinnerMessage from "./components/WinnerMessage";
import Header from "./components/Header";
import Player from "./components/Player";

const App = ({player1, player2, onIncrementPlayer1, onIncrementPlayer2, handleReset, p1serving, winner}) => (
  <>
    {/* header */}
    <Header/>

    {/* scores */}
    <div className="row mb-4">
    <Player 
        player={ 1 }
        servingPlayer={ p1serving }
        playerScore={ player1 }
        playerIncrement={ onIncrementPlayer1 }
        winner={ winner }
    />

    <Player 
        player={ 2 }
        servingPlayer={ !p1serving }
        playerScore={ player2 }
        playerIncrement={ onIncrementPlayer2 }
        winner={ winner }
    />
      </div>

      { /* winner message */}
      <WinnerMessage winner={winner}/>
      <hr />
      
      { /* reset button */}
     <ResetButton handleReset={handleReset}/>
     {/* need to pass a prop to parent component if it's declared at child component */}
  </>
);

export default App;