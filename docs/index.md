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

## Running on the VMware Tanzu Application Platform

[Watch it deploy on Tanzu Application Platform.](https://via.vmw.com/tap-node-sc)

The application can be deployed via the `tanzu` cli using a command line similar to the one shown below. You may need to modify this command depending needs of the supply chain you're using.

```bash
tanzu apps workload create node-express --dry-run \
  --git-repo https://github.com/benwilcock/node-express \
  --git-branch main \
  --type web \
  --label apps.tanzu.vmware.com/has-tests=true \
  --label app.kubernetes.io/part-of=node-express \
  --param-yaml testing_pipeline_matching_labels="{'apps.tanzu.vmware.com/pipeline':'test', 'apps.tanzu.vmware.com/language':'nodejs'}" \
  --annotation autoscaling.knative.dev/minScale=1
```

## Customisations

For a simple code customization demonstration, in the application code (in the `messages.js` file) change the name of the `client` property in the `messages` object from "VMware" to something else and then commit/redeploy/restart.

```nodejs
const messages = {
    msg_subject: 'Secure software supply chains are great!',
    msg_body: 'This is my message body.',
    client: 'VMware', //change this value
    framework: 'Node JS, Express, and EJS'
};
```

The homepage will then disply your new client name value at the bottom of the home page.