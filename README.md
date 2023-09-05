# amazon-memorydb-playground

learn [Amazon MemoryDB for Redis](https://aws.amazon.com/memorydb/)

## Demo

```sh
export AWS_PROFILE="hub01-admin"
export STACK_NAME=amazon-memorydb-playground
export REGION=us-east-1
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

sam build --use-container

sam deploy --guided
sam deploy

aws cloudformation describe-stacks \
  --stack-name $STACK_NAME \
  --region $REGION \
  --query 'Stacks[0].Outputs' \
  > stack-outputs.json

sam delete --no-prompts

```

## resources

- [Amazon MemoryDB for Redis](https://aws.amazon.com/memorydb/)
- [Amazon MemoryDB for Redis Documentation](https://docs.aws.amazon.com/memorydb/)
- [serverless-patterns/apigw-lambda-memorydb](https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-memorydb)
- [AWSinAction/code3/chapter11/memorydb-minimal.yaml](https://github.com/AWSinAction/code3/blob/main/chapter11/memorydb-minimal.yaml)
- [Configure ACLs with the ACL command](https://redis.io/docs/management/security/acl/)