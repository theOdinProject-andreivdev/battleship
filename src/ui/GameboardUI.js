import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";
import BlockUI from "./BlockUI";

function GameboardUI() {
  const gameBoard = Gameboard();

  const plane = Plane({ x: 2, y: 2 });
  const plane2 = Plane({ x: 6, y: 7 });
  gameBoard.addPlane(plane);
  gameBoard.addPlane(plane2);
  gameBoard.rotate(plane2);

  return (
    <div>
      <table className="table table-bordered">
        {gameBoard.getBlocks().map((br) => {
          return (
            <div>
              <tr>
                {br.map((block) => {
                  return (
                    <td>
                      <BlockUI type={block.type} />
                    </td>
                  );
                })}
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
}

export default GameboardUI;
