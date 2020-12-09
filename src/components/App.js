import ResetButton from "./ResetBtn";
import WinnerMessage from "./Winner";
import Header from "./Header";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";

const App = ({onIncrementPlayer1, onIncrementPlayer2, handleReset}) => (
  <>
    {/* header */}
    <Header/>

    {/* scores */}
    <div className="row mb-4">
      <Player1 
          playerIncrement={ onIncrementPlayer1 }
      />

      <Player2 
          playerIncrement={ onIncrementPlayer2 }
      />
    </div>

      { /* winner message */}  
    <WinnerMessage/>
    {/* prop removed from here as being passed in by index.js in Winner directory */}
      <hr />
      
      { /* reset button */}
    <ResetButton
      handleReset={handleReset}
    />
     {/* need to pass a prop to parent component if it's declared at child component */}
  </>
);

export default App;