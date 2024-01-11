import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const Home = () => {
  // throw new Error();
  return (
    <div>
      This is Home Page
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default Home;
