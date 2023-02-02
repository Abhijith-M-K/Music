import Table from "react-bootstrap/Table";
import "./Table.css";
import Pic from "../../img/images.jpeg";
import { BsPlayCircleFill, BsFillTrashFill } from "react-icons/bs";
function Tables() {
  return (
    <Table className="table_head">
      <thead>
        <tr>
          <th></th>
          <th>SONG NAME</th>
          <th>SOURCE</th>
          <th>ADDED ON</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className="pic" src={Pic} alt="" />
          </td>
          <td>ABC</td>
          <td>Youtube</td>
          <td>02/02/2023</td>
          <td>
            <BsPlayCircleFill />
          </td>
          <td>
            <BsFillTrashFill />
          </td>
        </tr>
        <tr>
          <td>
            <img className="pic" src={Pic} alt="" />
          </td>
          <td>ABC</td>
          <td>Youtube</td>
          <td>02/02/2023</td>
          <td>
            <BsPlayCircleFill />
          </td>
          <td>
            <BsFillTrashFill />
          </td>
        </tr>
        <tr>
          <td>
            <img className="pic" src={Pic} alt="" />
          </td>
          <td>ABC</td>
          <td>Youtube</td>
          <td>02/02/2023</td>
          <td>
            <BsPlayCircleFill />
          </td>
          <td>
            <BsFillTrashFill />
          </td>
        </tr>
        <tr>
          <td>
            <img className="pic" src={Pic} alt="" />
          </td>
          <td>ABC</td>
          <td>Youtube</td>
          <td>02/02/2023</td>
          <td>
            <BsPlayCircleFill />
          </td>
          <td>
            <BsFillTrashFill />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;
