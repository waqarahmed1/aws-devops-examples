# aws-devops-examples
AWS DevOps examples. Provisioning of CI/CD pipelines in AWS (CodeCommit , CodeBuild, CodeDeploy and CodePipeline)

# Example 1 - Creating end to end pipeline - AWS CodePipeline for Java app with unit tests

The repo contains a sample 'Hello World' App with some contrived unit tests :) - The example demonstrates how AWS CodeCommit repo can be setup for the app and then how AWS CodeBuild project can be created along with AWS CodeDeploy deployment to deploy the app onto an EC2 instance. The whole CI/CD pipeline is joined together through AWS COdePipeline demonstraing a complete end to end pipeline which triggers on a checkin

Two options to run the example:

1. Manual Steps (See below )

2. Run the cloud formation template. This will provision the necessary resources (AWS CodeCommit repository, IAM User to use https to access repo localy, AWS CodeBuild deployment , s3 Artifact Bucket, IAM role for CodeDeploy, AWS CodeDeploy deployment config, IAM Role for CodeDeploy ,EC2 Instance , IAM Role for Ec2 instance, AWS CodePipeline and role for CodePipeline )




Manual Steps to create pipeline in AWS.

................
