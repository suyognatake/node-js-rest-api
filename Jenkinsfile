pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/suyognatake/node-js-rest-api.git'
      }
    }
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        echo 'Build complete'
      }
    }
  }
}
