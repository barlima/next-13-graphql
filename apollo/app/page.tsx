import { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../services/apollo";

const HomePage = async () => {
  const { data } = await client.query({
    query: gql`
      query Continents {
        continents {
          name
          code
        }
      }
    `,
  });

  return (
    <div>
      <h1>Continents:</h1>

      <div className="continent__list">
        {data.continents.map((continent) => (
          <a
            key={continent.code}
            className="continent__card"
            href={`/continent/${continent.code}`}
          >
            {continent.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
