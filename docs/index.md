# Node.js Express

This app contains source code for a Node.js ([Express](https://expressjs.com/)) application that can be built and deployed automatically by the Tanzu Application Platform. The app includes a web page created using Express and a basic REST API. This application was initially created using an Accelerator for Node.js applications.

Features at a glance:

* A Node.js application using `npm` as the build and packaging system
* Express to provide web page templating and a landing page for the site
* A REST API that allows you to GET `/messages` (returns a JSON string built in `messages.js`)
* Backstage TechDocs using Markdown (see `mkdocs.yml` and `docs/index.md`)

Navigating your broswer to **http(s)://&lt;your.hosting.url&gt;:&lt;port&gt;** should show the following screen:

![supply chain diagram](https://github.com/benwilcock/node-express/raw/main/public/img/tap-into-prod.png "Composable and Modular - TAP Supply Chains")

[Watch it deploy on Tanzu Application Platform.](https://via.vmw.com/tap-node-sc)