import React from "react";
import Featured from "../../src/components/Featured";

function Home() {
  const imageUrl = process.env.PUBLIC_URL + "/assets/images/img09.jpg";
  const title = "CUYUTLAN";
  return (
    <div>
      <Featured imageUrl={imageUrl} title={title} />
    </div>
  );
}

export default Home;
