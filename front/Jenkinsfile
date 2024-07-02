pipeline{
    agent any

    stages{
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t forca_game . '
            }
        }

        stage('Up') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

}