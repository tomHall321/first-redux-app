const StartGameBtn = ({ handleClick }) => {
    return (
          <button 
            className="btn btn-danger"
            onClick={ handleClick }
          >Start Game</button>
      )
  }

  export default StartGameBtn;