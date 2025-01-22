/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
// import { defineCliConfig } from 'sanity/cli'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// export default defineCliConfig({ api: { projectId, dataset } })

import { createClient } from '@sanity/client';


const client = createClient({
  projectId: '741r49ds', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'sk5w5H2J7NntzTAnLPGJ2lXnYslK0DxG71HVSW1ogVgE1A5mRoor5qqvjOzqRxMMTrlSMyTi6USkBezTBFeVzAEP1s6nkP4qR806YqngTYivkACEWBAUOSuWybPsGmgyXO3V2FZ62t4jOYRUozaQBgKc8dUomoNciPkCY7CdwVy0fyAimzx9', // Replace with your Sanity API token
});


export default client;

