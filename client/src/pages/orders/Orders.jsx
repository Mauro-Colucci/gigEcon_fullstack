import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Johnny Ramone",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>
                59<sup>99</sup>
              </td>
              <td>Joey Ramone</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Ai generated concept art</td>
              <td>
                120<sup>99</sup>
              </td>
              <td>Johnny Ramone</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>High quality digital character</td>
              <td>
                79<sup>99</sup>
              </td>
              <td>Marky Ramone</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Illustration hyper realistic painting</td>
              <td>
                119<sup>99</sup>
              </td>
              <td>C.J. Ramone</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Original ai generated digital art</td>
              <td>
                59<sup>99</sup>
              </td>
              <td>Tommy Ramone</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Text based ai generated art</td>
              <td>
                110<sup>99</sup>
              </td>
              <td>Dee Dee Ramone</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Orders;
