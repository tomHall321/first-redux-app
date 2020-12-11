import React from "react";

const Results = ({ results, p1Name, p2Name, won,  }) => {

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">Game Id</th>
          <th scope="col">Player 1</th>
          <th scope="col">Player 2</th>
          <th scope="col">Who won?</th>

        </tr>
      </thead>
      <tbody>
        { results.map((result, index) => (
            <tr key={ index }>
              <th scope="row">{ index }</th>
              <td>{ result.player_1.score }</td>
              <td>{ result.player_2.score }</td>
              <td>{ result.player_1.won ? result.player_1.name : result.player_2.name }</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
};

export default Results;