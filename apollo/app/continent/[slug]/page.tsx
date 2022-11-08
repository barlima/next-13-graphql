import { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../../../services/apollo";

const ContinentPage = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query Countries($code: ID!) {
        continent(code: $code) {
          name
          countries {
            name
            code
          }
        }
      }
    `,
    variables: {
      code: params.slug,
    },
  });

  return (
    <div>
      <h1>Countries in {data.continent.name}:</h1>
      <div>
        {data.continent.countries.map((country) => (
          <div>{country.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ContinentPage;
