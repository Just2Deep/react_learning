import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Just2Deep")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, [data]);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4 rounded-lg">
      <p>Github Followers: {data.followers}</p>
      <img
        src={data.avatar_url}
        alt="profile photo"
        width={300}
        className="my-0 mx-auto p-4 rounded-lg"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Just2Deep");
  const data = await response.json();
  return data;
};
