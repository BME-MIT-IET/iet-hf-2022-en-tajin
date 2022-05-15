# CI Documentation 

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.

In our project we have 2 workflows:

### NodeJs with Webpack 
- Install the required dependencies using `npm`
- Run Unit test using `Mocha` and test coverage using `Istanbul`
- Build the library using `Webpack`

#### Result 
The workfow is triggered for each pull request to the master branch. 
##### Test
![](Screenshots/ci-1.png)
##### Build
![](Screenshots/ci-2.png)


### Docker and GitHub container registry 
- Log into GitHub container registry 
- Build Docker image 
- Push Docker image to ghcr 

![](Screenshots/ci-3.png)

- ghcr package: 
  
  ![](Screenshots/ci-4.png)