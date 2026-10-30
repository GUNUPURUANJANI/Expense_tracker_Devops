
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Smart Expense Tracker source code'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Validate Application') {
            steps {
                echo 'Checking backend JavaScript syntax'
                dir('backend') {
                    bat 'node --check server.js'
                }
            }
        }

        
stage('Automated Testing') {
    steps {
        echo 'Running automated API tests'

        dir('backend') {
            bat 'npm test'
        }
    }
}


        stage('Build') {
            steps {
                echo 'Smart Expense Tracker build validation completed'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Smart Expense Tracker pipeline completed!'
        }

        failure {
            echo 'FAILURE: Please check the Jenkins console output.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
