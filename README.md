# node-express

This is a simple Node JS sample project which uses the Express framework. This project offers a homepage with a customizable message, a health endpoint, and simple REST API.

Before running for the first time you need to install the project dependencies. Run the command `npm install` to install them all. A list of these dependencies can be found in the `package.json` file. They include Express, EJS, and Jest.

You can run the server as a standalone app using `npm run server` command in the root of the project. The server will be listening to request on port `3000`. You can test the server in a browser by accessing `http://localhost:3000` or via `cURL` or `httpie`.

## Running Tests

Some unit tests have been provided which use the Jest unit testing framework. From the root folder of the project, run the command `npm test`. Jest will then execute the test suite and report back the unit testing results.

## Viewing The Homepage

Point your browser to`http://localhost:3000`

## Viewing The Messages REST Endpoint

Point your browser to`http://localhost:3000/api/messages` or follow the link on the homepage.

## Dynamically Reload The Local Server On Code Changes

Nodemon can be used to monitor the source code and dynamically reload the application when there are changes to the server code.

```bash
sudo npm install -g nodemon
nodemon server.js
```

# Deploying to Kubernetes

> NOTE: The provided `config/workload.yaml` file uses the Git URL for this sample. When you want to modify the source, you must push the code to your own Git repository and then update the `spec.source.git` information in the `config/workload.yaml` file.

## Deploying to Kubernetes as a TAP workload with Tanzu CLI

When you are done developing your app, you can simply deploy it using either:

A full command:

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

Or, the workload file descriptor:

```
tanzu apps workload apply -f config/workload.yaml
```

If you would like deploy the code from your local working directory you can use the following command:

```
tanzu apps workload create node-express -f config/workload.yaml \
  --local-path . \
  --source-image <REPOSITORY-PREFIX>/node-express-source \
  --type web
```

## Accessing the app deployed to your cluster

If you don't have `curl` installed it can be installed using downloads here: https://curl.se/download.html

Determine the URL to use for the accessing the app by running:

```
tanzu apps workload get node-express
```

To access the deployed app open the URL shown in your browser.

This depends on the TAP installation having DNS configured for the Knative ingress.


## Application Endpoints

1. `/`  HTML home page (shows a single page app containing a static image and some text). Contains a link to the source code.
1. `/api/messages` REST Json [GET] (shows a single hardcoded message as part of a list of messages).

## Code Customisation

For a simple code customization demonstration, in the application code (in the `messages.js` file) change the name of the `client` property in the `messages` object from "VMware" to something else and then commit/redeploy/restart.

```nodejs
const messages = {
    msg_subject: 'Secure software supply chains are great!',
    msg_body: 'This is my message body.',
    client: 'VMware', //change this value
    framework: 'Node JS, Express, and EJS'
};
```

The homepage will then use your new client name value in the text at the bottom of the home page.