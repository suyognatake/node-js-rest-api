pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/suyognatake/node-js-rest-api.git', branch: 'main'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build' 
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploy step here'
            }
        }
    }
}
