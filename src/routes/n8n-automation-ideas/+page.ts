/** @type {import('./$types').PageLoad} */

// Working for only Public right Now
import { PUBLIC_X_HASURA_ADMIN_SECRET } from '$env/static/public';

const hasuraAdminSecret = PUBLIC_X_HASURA_ADMIN_SECRET;

export async function load() {
  const data = await fetch('https://apps.crewnew.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': hasuraAdminSecret
    },
    body: JSON.stringify({
      query: `
      query ServicehostAutomations {
        sh_automations(order_by: {sort: asc}, where: {status: {_eq: "published"}}) {
          name
          description
          vote
        }
      }
          `
    })
  });
  const json = await data.json();
  //console.log(json.data.sh_automations);

  return {
    cms: json.data.sh_automations
  };
}