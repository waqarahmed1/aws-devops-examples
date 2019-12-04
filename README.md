# aws-devops-examples
AWS DevOps examples. Provisioning of CI/CD pipelines in AWS (CodeCommit , CodeBuild, CodeDeploy and CodePipeline)

# Example 1 - (CodePipeline-Simple-Java) - AWS CodePipeline for Java app with unit tests

A sample 'Hello World' App with some contrived unit tests :) - The example demonstrates how AWS CodeCommit repo can be setup for an app and how AWS CodeBuild project can be created along with AWS CodeDeploy to deploy the app onto an EC2 instance. The whole CI/CD pipeline is joined together through AWS CodePipeline demonstrating a complete end to end pipeline which triggers on a checkin.

Use cloudformation template provided in example to setup:

1. Running the cloud formation template  will provision the necessary resources (AWS CodeCommit repository, IAM User to use https to access repo localy, AWS CodeBuild deployment , s3 Artifact Bucket, IAM role for CodeDeploy, AWS CodeDeploy deployment config, IAM Role for CodeDeploy ,EC2 Instance , IAM Role for Ec2 instance, AWS CodePipeline and role for CodePipeline )


    i.  Run in the N.Virginia region (You can run in other regions just be sure to change the 'AWSCodePipelineServiceRole' 
         service role arn in the cfn template).
         
         
    ii. Create a Deployment target group with at least one Ec2 instance (Ensure you have CodeDeploy agent installed on 
         the instance)

# Example 2 - (CodePipeline-ECS-NodeJs) - AWS CodePipeline for Node app runing in a Docker container. 

A complete end-to-end pipeline is created which builds a docker image for a node app and pushes it up to a container registry the container is then deployed across a cluster.

This example creates an AWS CodeBuild item which builds a docker image and then tags it and pushes the image to AWS ECR (Elastic Container Registry). The next step of the CodePipeline step is AWS CodeDeploy which uses the reference to the inage file pushed up to ECR and initialtes a Blue/Green depoyment of the container acroos an ECS cluster.

Use cloudformation template provided in example to setup:

    i.  Run the main Cloudformation template (this is a nestated template that makes reference to three templates 1. for
        creating VPC and ELB resources 2. Creating ECS resources and 3. Creating the AWS CodePipeline).
    
    
  
