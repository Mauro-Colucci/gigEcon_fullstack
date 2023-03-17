import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import "./Messages.scss";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.patch(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something exploded in the data center!"
        ) : (
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((conv) => (
                <tr
                  key={conv.id}
                  className={
                    (currentUser.isSeller && !conv.readBySeller) ||
                    (!currentUser.isSeller && !conv.readByBuyer)
                      ? "active"
                      : ""
                  }
                >
                  <td>{currentUser.isSeller ? conv.buyerId : conv.sellerId}</td>
                  <td>
                    <Link to={`/message/${conv.id}`} className="link">
                      {conv.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(conv.updatedAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !conv.readBySeller) ||
                      (!currentUser.isSeller && !conv.readByBuyer)) && (
                      <button onClick={() => handleRead(conv.id)}>
                        Mark as Read
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default Messages;
