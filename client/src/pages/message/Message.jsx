import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post("/messages", message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; Marky Ramone &gt;
        </span>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Oh oh..."
        ) : (
          <div className="messages">
            {data.map((message) => (
              <div
                key={message._id}
                className={
                  message.userId === currentUser._id ? "owner item" : "item"
                }
              >
                <img
                  src="https://musicasdelmundo.com.ar/wp-content/uploads/2021/12/unnamed-69.jpg"
                  alt=""
                />
                <p>{message.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="Write a message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
