#**Sample Node-JS backend Application**

**1. Infra as Code** <br>

An Azure ARM Template has been attached to this repo which creates a <br>
* Basic node-js webapp and <br>
* Web app service plan in Azure <br>
Template : (https://github.com/Akshara-D/Node-js-demo/blob/master/ARMTemplate/azuredeploy.json)

**2. Pipeline as Code** <br>
There are 2 pipeline files attached <br>
* Executes the ARM template to create the infrastructure - https://github.com/Akshara-D/Node-js-demo/blob/master/.github/workflows/infra-master.yml
* Pulls code, Install dependencies, runs unit tests , builds , publish artifacts and deploys the code to cloud webapp created by the template  - [https://github.com/Akshara-D/Node-js-demo/blob/master/.github/workflows/infra-master.yml](https://github.com/Akshara-D/Node-js-demo/blob/master/.github/workflows/azure-webapps-node.yml)
* Added the pipeline trigger condition code for both pipelines in yaml file only when there is a push in master branch.
* Note: Infra as code pipeline is triggered only when there is a change inside this specific **ARMTemplate/azuredeploy.json** file of master branch.

**USED azure secrets to store all keys/credentials needed in this pipeline**


