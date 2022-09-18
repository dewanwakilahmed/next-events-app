import { getFeaturedEvents } from "../data";

function HomePage() {
  const feturedEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
}

export default HomePage;
