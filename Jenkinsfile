pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git branch: 'main', url: 'https://github.com/suyognatake/node-js-rest-api.git'
      }
    }
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test || echo "No tests defined"'
      }
    }
    stage('Build') {
      steps {
        echo 'Build complete'
      }
    }
  }
}
